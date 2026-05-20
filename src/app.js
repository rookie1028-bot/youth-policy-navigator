import {
  buildNavigatorSummary,
  buildSavedPolicyMarkdown,
  categoryLabels,
  filterPolicies,
  incomeLabels,
  normalizeProfile,
  policies,
  situationLabels,
} from './policy-core.js';
import './styles.css';

const STORAGE_KEY = 'youth-policy-navigator:v1:saved';
const state = {
  profile: normalizeProfile({}),
  query: '',
  category: '전체',
  region: '전체',
  status: '전체',
  savedIds: new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')),
};

const regions = ['전체', '전국', '서울', '경기', '부산', '인천'];
const statuses = ['전체', '모집', '접수', '상시', '예정'];
const summary = buildNavigatorSummary(policies);

function option(value, label = value) {
  return `<option value="${value}">${label}</option>`;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.savedIds]));
}

function selectedPolicies() {
  return policies.filter((policy) => state.savedIds.has(policy.id));
}

function renderPolicyCard(policy) {
  const saved = state.savedIds.has(policy.id);
  return `<article class="policy-card" aria-labelledby="policy-${policy.id}">
    <div class="policy-card__top">
      <span class="krds-badge">${policy.category}</span>
      <span class="fit fit--${policy.fit.level === '높음' ? 'high' : policy.fit.level === '가능성 있음' ? 'mid' : 'low'}">적합도 ${policy.fit.percent}% · ${policy.fit.level}</span>
    </div>
    <h3 id="policy-${policy.id}">${policy.title}</h3>
    <p>${policy.benefit}</p>
    <dl class="policy-meta">
      <div><dt>지역</dt><dd>${policy.region.join(', ')}</dd></div>
      <div><dt>연령</dt><dd>${policy.ageRange[0]}~${policy.ageRange[1]}세</dd></div>
      <div><dt>상태</dt><dd>${policy.status}</dd></div>
      <div><dt>마감</dt><dd>${policy.deadline}</dd></div>
    </dl>
    <div class="reason-list" aria-label="추천 이유">
      ${policy.fit.reasons.slice(0, 3).map((reason) => `<span>${reason}</span>`).join('') || '<span>조건 확인 필요</span>'}
    </div>
    <div class="next-action"><strong>다음 행동</strong><br>${policy.action}</div>
    <div class="policy-actions">
      <a href="${policy.url}" target="_blank" rel="noreferrer">신청 채널 보기</a>
      <button type="button" data-save="${policy.id}" aria-pressed="${saved}">${saved ? '저장됨' : '관심 정책 저장'}</button>
    </div>
  </article>`;
}

function render() {
  const results = filterPolicies(state);
  document.querySelector('#app').innerHTML = `
    <a class="skip-link" href="#main">본문으로 바로가기</a>
    <header class="site-header" role="banner">
      <div class="brand-mark" aria-label="서비스명">청년정책 내비게이터</div>
      <nav aria-label="주요 메뉴">
        <a href="#diagnosis">조건 입력</a>
        <a href="#results">추천 정책</a>
        <a href="#saved">저장 목록</a>
      </nav>
    </header>
    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero__copy">
          <p class="eyebrow">KRDS 기반 · local-first 정책 탐색</p>
          <h1 id="hero-title">흩어진 청년정책을<br>내 조건과 다음 행동으로 정리합니다.</h1>
          <p class="hero-text">나이, 지역, 현재 상황을 넣으면 주거·취업·자산형성·문화 정책을 적합도 순으로 보여줍니다. 공식 신청은 각 채널에서 하고, 이 화면은 판단과 기록을 돕는 내비게이터입니다.</p>
          <div class="hero-actions">
            <a class="primary-link" href="#diagnosis">내 조건으로 찾기</a>
            <a class="secondary-link" href="#saved">저장 목록 보기</a>
          </div>
        </div>
        <aside class="service-panel" aria-label="서비스 요약">
          <span class="panel-label">정책 데이터 요약</span>
          <strong>${summary.total}개</strong>
          <p>샘플 정책 · ${summary.categories.length}개 분야 · 활성/상시 ${summary.activeCount}개</p>
          <ul>
            <li>접근성: label, landmark, skip link 적용</li>
            <li>저장: 브라우저 localStorage</li>
            <li>출력: Markdown 복사</li>
          </ul>
        </aside>
      </section>

      <section id="diagnosis" class="workspace" aria-labelledby="diagnosis-title">
        <form class="diagnosis-card" aria-describedby="diagnosis-help">
          <p class="section-kicker">01 · 조건 입력</p>
          <h2 id="diagnosis-title">지금의 나를 기준으로 정책을 좁혀보기</h2>
          <p id="diagnosis-help">정확한 자격 판정이 아니라, 먼저 확인할 정책의 우선순위를 만드는 단계입니다.</p>
          <div class="form-grid">
            <label>나이
              <input id="age" type="number" min="0" inputmode="numeric" value="${state.profile.age}" />
            </label>
            <label>지역
              <select id="profile-region">${['전국','서울','경기','부산','인천'].map((r) => option(r, r)).join('')}</select>
            </label>
            <label>현재 상황
              <select id="situation">${Object.entries(situationLabels).map(([value, label]) => option(value, label)).join('')}</select>
            </label>
            <label>소득 느낌
              <select id="income">${Object.entries(incomeLabels).map(([value, label]) => option(value, label)).join('')}</select>
            </label>
          </div>
          <label class="full-field">관심 키워드
            <input id="keywords" type="search" placeholder="예: 월세 취업 창업 장학금" value="${state.profile.keywords.join(' ')}" />
          </label>
          <button class="primary-button" type="submit">추천 다시 계산하기</button>
        </form>

        <aside class="filter-card" aria-labelledby="filter-title">
          <p class="section-kicker">02 · 필터</p>
          <h2 id="filter-title">정책 목록 좁히기</h2>
          <label>검색어
            <input id="query" type="search" placeholder="정책명, 혜택, 채널 검색" value="${state.query}" />
          </label>
          <label>분야
            <select id="category">${['전체', ...categoryLabels].map((c) => option(c, c)).join('')}</select>
          </label>
          <label>지역 필터
            <select id="region-filter">${regions.map((r) => option(r, r)).join('')}</select>
          </label>
          <label>상태
            <select id="status-filter">${statuses.map((s) => option(s, s)).join('')}</select>
          </label>
        </aside>
      </section>

      <section id="results" class="results-section" aria-labelledby="results-title">
        <div class="section-head">
          <div>
            <p class="section-kicker">03 · 추천 결과</p>
            <h2 id="results-title">먼저 확인할 청년정책 ${results.length}개</h2>
          </div>
          <p>적합도는 나이·지역·상황·소득·키워드 기반의 간단한 로컬 계산입니다.</p>
        </div>
        <div class="policy-list">${results.map(renderPolicyCard).join('') || '<p class="empty">조건에 맞는 정책이 없습니다. 필터를 줄여보세요.</p>'}</div>
      </section>

      <section id="saved" class="saved-section" aria-labelledby="saved-title">
        <div>
          <p class="section-kicker">04 · 저장 목록</p>
          <h2 id="saved-title">나중에 확인할 정책 ${state.savedIds.size}개</h2>
          <p>저장 목록은 이 브라우저에만 남습니다. 상담 기록이나 Tolaria에 붙여넣을 수 있게 Markdown으로 복사할 수 있습니다.</p>
          <div class="saved-list">${selectedPolicies().map((policy) => `<span>${policy.title}</span>`).join('') || '<span class="muted">아직 저장한 정책이 없습니다.</span>'}</div>
        </div>
        <div class="markdown-box">
          <label for="markdown-output">저장용 Markdown</label>
          <textarea id="markdown-output" readonly>${buildSavedPolicyMarkdown(selectedPolicies())}</textarea>
          <div class="markdown-actions">
            <button type="button" id="copy-markdown">Markdown 복사</button>
            <button type="button" id="clear-saved" class="danger-button">저장 목록 비우기</button>
          </div>
          <p id="copy-status" role="status" aria-live="polite"></p>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <p>청년정책 내비게이터 v0.1 · 공식 자격 판정은 각 정책 신청 채널에서 최종 확인해야 합니다.</p>
    </footer>`;

  document.querySelector('#profile-region').value = state.profile.region;
  document.querySelector('#situation').value = state.profile.situation;
  document.querySelector('#income').value = state.profile.income;
  document.querySelector('#category').value = state.category;
  document.querySelector('#region-filter').value = state.region;
  document.querySelector('#status-filter').value = state.status;
  bindEvents();
}

function bindEvents() {
  document.querySelector('.diagnosis-card').addEventListener('submit', (event) => {
    event.preventDefault();
    state.profile = normalizeProfile({
      age: document.querySelector('#age').value,
      region: document.querySelector('#profile-region').value,
      situation: document.querySelector('#situation').value,
      income: document.querySelector('#income').value,
      keywords: document.querySelector('#keywords').value,
    });
    render();
    document.querySelector('#results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  ['#query', '#category', '#region-filter', '#status-filter'].forEach((selector) => {
    document.querySelector(selector).addEventListener('input', (event) => {
      const map = { '#query': 'query', '#category': 'category', '#region-filter': 'region', '#status-filter': 'status' };
      state[map[selector]] = event.target.value;
      render();
    });
  });

  document.querySelectorAll('[data-save]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.save;
      if (state.savedIds.has(id)) state.savedIds.delete(id);
      else state.savedIds.add(id);
      saveState();
      render();
    });
  });

  document.querySelector('#copy-markdown').addEventListener('click', async () => {
    const text = document.querySelector('#markdown-output').value;
    try {
      await navigator.clipboard.writeText(text);
      document.querySelector('#copy-status').textContent = 'Markdown을 복사했습니다.';
    } catch {
      document.querySelector('#markdown-output').select();
      document.execCommand('copy');
      document.querySelector('#copy-status').textContent = 'Markdown을 복사했습니다.';
    }
  });

  document.querySelector('#clear-saved').addEventListener('click', () => {
    if (!state.savedIds.size || !confirm('저장 목록을 모두 비울까요?')) return;
    state.savedIds.clear();
    saveState();
    render();
  });
}

render();
