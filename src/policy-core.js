export const policies = [
  {
    id: 'seoul-youth-rent',
    title: '서울 청년 월세 지원',
    category: '주거',
    region: ['서울'],
    ageRange: [19, 39],
    situations: ['student', 'job', 'work', 'independent'],
    income: ['low', 'middle'],
    status: '접수 예정',
    deadline: '2026-06-30',
    benefit: '월 최대 20만원, 최대 12개월 월세 지원',
    action: '주민등록상 주소, 임대차계약서, 소득 증빙을 먼저 확인하세요.',
    channel: '서울청년몽땅정보통',
    url: 'https://youth.seoul.go.kr',
    tags: ['월세', '주거', '독립', '청년월세'],
  },
  {
    id: 'korea-tomorrow-savings',
    title: '청년내일저축계좌',
    category: '자산형성',
    region: ['전국'],
    ageRange: [19, 34],
    situations: ['work', 'job', 'independent'],
    income: ['low'],
    status: '상시 확인',
    deadline: '지자체 공고별 상이',
    benefit: '본인 저축액에 정부지원금을 매칭해 목돈 형성 지원',
    action: '복지로/주민센터에서 가구소득·근로소득 기준을 확인하세요.',
    channel: '복지로',
    url: 'https://www.bokjiro.go.kr',
    tags: ['저축', '자산', '근로', '목돈'],
  },
  {
    id: 'korea-job-success',
    title: '국민취업지원제도 청년 특례',
    category: '일자리·창업',
    region: ['전국'],
    ageRange: [18, 34],
    situations: ['job', 'student'],
    income: ['low', 'middle'],
    status: '상시 접수',
    deadline: '상시',
    benefit: '취업상담, 직업훈련, 구직촉진수당 등 맞춤형 취업지원',
    action: '워크넷 구직등록 후 고용센터 상담 예약을 진행하세요.',
    channel: '국민취업지원제도',
    url: 'https://www.kua.go.kr',
    tags: ['취업', '구직', '상담', '훈련'],
  },
  {
    id: 'gyeonggi-youth-basic',
    title: '경기도 청년기본소득',
    category: '생활지원',
    region: ['경기'],
    ageRange: [24, 24],
    situations: ['student', 'job', 'work', 'independent'],
    income: ['low', 'middle', 'high'],
    status: '분기별 신청',
    deadline: '분기별 공고 확인',
    benefit: '분기별 지역화폐 지급으로 생활비 부담 완화',
    action: '신청일 기준 거주요건과 만 24세 생일 구간을 확인하세요.',
    channel: '경기도 일자리재단 통합접수',
    url: 'https://apply.jobaba.net',
    tags: ['기본소득', '지역화폐', '생활비'],
  },
  {
    id: 'busan-startup-voucher',
    title: '부산 청년 창업 바우처',
    category: '일자리·창업',
    region: ['부산'],
    ageRange: [19, 39],
    situations: ['startup', 'work', 'job'],
    income: ['low', 'middle', 'high'],
    status: '모집 중',
    deadline: '2026-07-12',
    benefit: '초기 사업화 비용, 멘토링, 시제품 제작비 일부 지원',
    action: '사업계획서 1p와 주민등록상 부산 거주 여부를 준비하세요.',
    channel: '부산청년플랫폼',
    url: 'https://young.busan.go.kr',
    tags: ['창업', '바우처', '사업화', '멘토링'],
  },
  {
    id: 'korea-hope-education',
    title: '국가장학금 및 학자금 지원',
    category: '교육',
    region: ['전국'],
    ageRange: [18, 34],
    situations: ['student'],
    income: ['low', 'middle'],
    status: '학기별 신청',
    deadline: '학기별 공고 확인',
    benefit: '소득구간에 따른 등록금 지원과 생활비 대출 연계',
    action: '한국장학재단에서 가구원 정보제공 동의 상태를 확인하세요.',
    channel: '한국장학재단',
    url: 'https://www.kosaf.go.kr',
    tags: ['장학금', '등록금', '학자금', '대학생'],
  },
  {
    id: 'youth-culture-pass',
    title: '청년 문화예술패스',
    category: '문화·복지',
    region: ['전국'],
    ageRange: [19, 19],
    situations: ['student', 'job', 'work', 'independent'],
    income: ['low', 'middle', 'high'],
    status: '예산 소진 전',
    deadline: '예산 소진 시 종료',
    benefit: '공연·전시 관람비 지원으로 문화 접근성 확대',
    action: '출생연도 기준과 예매처 연동 가능 여부를 확인하세요.',
    channel: '청년문화예술패스',
    url: 'https://www.youthculturepass.or.kr',
    tags: ['문화', '공연', '전시', '패스'],
  },
  {
    id: 'incheon-interview-cost',
    title: '인천 청년 면접비 지원',
    category: '일자리·창업',
    region: ['인천'],
    ageRange: [18, 39],
    situations: ['job'],
    income: ['low', 'middle', 'high'],
    status: '상시 확인',
    deadline: '예산 소진 시 종료',
    benefit: '면접 1회당 교통·준비 비용 일부 지원',
    action: '면접확인서 또는 채용공고·응시 증빙을 보관하세요.',
    channel: '인천청년포털',
    url: 'https://www.incheon.go.kr/youth',
    tags: ['면접', '취업', '교통비', '구직'],
  },
];

export const categoryLabels = [...new Set(policies.map((policy) => policy.category))];
export const situationLabels = {
  student: '재학/휴학',
  job: '구직 중',
  work: '근로 중',
  startup: '창업 준비/운영',
  independent: '독립 생활',
};
export const incomeLabels = { low: '낮음', middle: '중간', high: '높음/무관' };

export function normalizeProfile(input = {}) {
  const age = Number.parseInt(input.age, 10);
  const keywords = Array.isArray(input.keywords)
    ? input.keywords
    : String(input.keywords || '')
        .split(/[\s,，]+/)
        .map((word) => word.trim())
        .filter(Boolean);
  return {
    age: Number.isFinite(age) ? Math.max(0, age) : 24,
    region: input.region || '전국',
    situation: input.situation || 'job',
    income: input.income || 'middle',
    keywords,
  };
}

function matchesRegion(policy, region) {
  return policy.region.includes('전국') || policy.region.includes(region);
}

function matchesAge(policy, age) {
  return age >= policy.ageRange[0] && age <= policy.ageRange[1];
}

function keywordHits(policy, keywords) {
  const haystack = [policy.title, policy.category, policy.benefit, policy.action, ...policy.tags].join(' ').toLowerCase();
  return keywords.filter((keyword) => haystack.includes(keyword.toLowerCase()));
}

export function scorePolicy(policy, profileInput = {}) {
  const profile = normalizeProfile(profileInput);
  const reasons = [];
  let score = 0;

  if (matchesAge(policy, profile.age)) {
    score += 25;
    reasons.push('나이 조건 일치');
  }
  if (matchesRegion(policy, profile.region)) {
    score += 25;
    reasons.push(policy.region.includes('전국') ? '전국 공통 정책' : '지역 조건 일치');
  }
  if (policy.situations.includes(profile.situation)) {
    score += 20;
    reasons.push('현재 상황과 연결');
  }
  if (policy.income.includes(profile.income) || policy.income.includes('high')) {
    score += 15;
    reasons.push('소득 조건 가능성');
  }
  const hits = keywordHits(policy, profile.keywords);
  if (hits.length > 0) {
    score += Math.min(15, hits.length * 8);
    reasons.push(`관심 키워드: ${hits.join(', ')}`);
  }
  const urgent = /모집 중|접수|예정|상시/.test(policy.status);
  if (urgent) score += 5;

  return {
    percent: Math.min(100, score),
    reasons,
    level: score >= 80 ? '높음' : score >= 55 ? '가능성 있음' : '확인 필요',
  };
}

export function filterPolicies({ profile = {}, query = '', category = '전체', region = '전체', status = '전체' } = {}) {
  const normalized = normalizeProfile(profile);
  const q = query.trim().toLowerCase();
  return policies
    .filter((policy) => category === '전체' || policy.category === category)
    .filter((policy) => region === '전체' || policy.region.includes('전국') || policy.region.includes(region))
    .filter((policy) => status === '전체' || policy.status.includes(status))
    .filter((policy) => {
      if (!q) return true;
      return [policy.title, policy.category, policy.benefit, policy.action, policy.channel, ...policy.tags]
        .join(' ')
        .toLowerCase()
        .includes(q);
    })
    .map((policy) => ({ ...policy, fit: scorePolicy(policy, normalized) }))
    .sort((a, b) => b.fit.percent - a.fit.percent || a.deadline.localeCompare(b.deadline, 'ko'));
}

export function buildNavigatorSummary(list = policies) {
  return {
    total: list.length,
    categories: [...new Set(list.map((policy) => policy.category))],
    regions: [...new Set(list.flatMap((policy) => policy.region))],
    activeCount: list.filter((policy) => /모집|접수|상시|예정/.test(policy.status)).length,
  };
}

export function buildSavedPolicyMarkdown(selectedPolicies = [], { now = new Date() } = {}) {
  const date = new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(now)
    .replace(/\. /g, '-')
    .replace('.', '')
    .replace(/-$/g, '');
  const body = selectedPolicies.length
    ? selectedPolicies
        .map((policy) => `## ${policy.title}\n- 분야: ${policy.category}\n- 지역: ${policy.region.join(', ')}\n- 대상 연령: ${policy.ageRange[0]}~${policy.ageRange[1]}세\n- 상태/마감: ${policy.status} · ${policy.deadline}\n- 지원 내용: ${policy.benefit}\n- 다음 행동: ${policy.action}\n- 신청 채널: ${policy.channel} (${policy.url})`)
        .join('\n\n')
    : '저장된 정책이 아직 없습니다.';
  return `# 청년정책 내비게이터 저장 목록\n\n- 생성일: ${date}\n- 목적: 흩어진 청년정책을 나의 조건과 다음 행동 기준으로 정리\n\n${body}\n\n---\n\n## 확인 질문\n- 지금 바로 신청할 수 있는 정책은 무엇인가?\n- 증빙서류를 준비해야 하는 정책은 무엇인가?\n- 놓치면 손해가 큰 마감은 무엇인가?`;
}
