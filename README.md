# 청년정책 내비게이터

KRDS 기반으로 만든 로컬 청년정책 탐색 MVP입니다. 나이·지역·현재 상황·소득 느낌·관심 키워드를 입력하면 샘플 청년정책을 적합도 순으로 보여주고, 관심 정책을 localStorage에 저장한 뒤 Markdown으로 복사할 수 있습니다.

## 실행

```bash
npm install
npm test
npm run build
npm run dev
```

- Local URL: http://127.0.0.1:17542
- 저장 키: `youth-policy-navigator:v1:saved`

## 구현 범위

- 조건 입력: 나이, 지역, 상황, 소득, 키워드
- 정책 필터: 검색어, 분야, 지역, 상태
- 추천 점수: 나이/지역/상황/소득/키워드 기반 로컬 scoring
- 관심 정책 저장: 브라우저 localStorage
- 상담/Tolaria용 Markdown 복사
- KRDS 기본 접근성: `lang=ko`, skip link, header/nav/main/footer, label-control binding, focus ring, semantic card structure

## KRDS Component Mapping

- Header / Navigation: 상단 서비스명 + 주요 anchor nav
- Form layout / Input / Select: 조건 입력과 필터 카드
- Badge / Tag: 분야, 적합도, 추천 이유
- Structured list: 정책 메타 정보 `dl`
- Button / Link button: CTA, 저장, 신청 채널
- Help panel: 서비스 요약/주의 문구
- Critical guidance: 공식 자격 판정은 신청 채널 최종 확인 안내

## v0 한계

정책 데이터는 실시간 API가 아니라 샘플 seed입니다. 실제 공고/마감/자격 조건은 공식 채널에서 최종 확인해야 합니다.

## 다음 확장 후보

1. 정책 API/크롤링 연동 또는 CSV import
2. 지역별 상세 정책 데이터 확장
3. 신청서류 체크리스트와 캘린더 리마인더
4. 상담 로그/Tolaria 직접 저장 Electron 브릿지
