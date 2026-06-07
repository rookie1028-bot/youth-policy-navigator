# Youth Policy Navigator / 청년정책 내비게이터

A local-first, KRDS-inspired web app that helps young people in Korea turn scattered youth-policy information into a prioritized action list.

> Status: early-stage public-interest OSS MVP. The current dataset is a curated seed dataset; the project is designed to grow into an open template for policy discovery, eligibility triage, and AI-assisted civic-service workflows.

## Why this exists

Youth policies in Korea are spread across national, city, and local portals. The hard part is not only finding a policy; it is deciding **what to check first**, **which proof documents to prepare**, and **how to keep the next action visible**.

This project explores a small but reusable pattern:

```text
citizen profile → policy scoring → next action → saved markdown checklist
```

It is intentionally local-first and lightweight so students, job seekers, independent young adults, civic hackers, and AI builders can fork it, replace the seed data, and adapt it to their own region or community.

## Features

- Profile-based recommendation: age, region, current situation, income band, and interest keywords
- Local scoring engine with human-readable recommendation reasons
- Policy filters by category, region, status, and search query
- Saved policy list stored in browser `localStorage`
- Markdown export for counseling notes, Tolaria/PKM records, or follow-up checklists
- KRDS-inspired accessibility basics: Korean `lang`, skip link, landmarks, labels, focus states, semantic cards
- Test-covered core logic using Vitest

## Demo / local usage

```bash
npm install
npm test
npm run build
npm run dev
```

Local URL:

```text
http://127.0.0.1:17542
```

## Project structure

```text
src/policy-core.js          # seed policies, profile normalization, scoring, filtering, markdown export
src/app.js                  # UI rendering and localStorage interactions
src/styles.css              # KRDS-inspired UI styling
tests/policy-core.test.js   # core recommendation and export tests
```

## Current scope

The MVP contains a small seed dataset covering housing, jobs, savings, education, culture, and local support policies. It does **not** replace official eligibility checks.

Official applications must still be completed through each policy's official channel.

## Roadmap

- [ ] Add CSV/JSON import for local governments, schools, and community organizations
- [ ] Add policy data validation and stale-deadline detection
- [ ] Add region packs for Seoul, Gyeonggi, Busan, Incheon, and national programs
- [ ] Add document checklist generation per policy
- [ ] Add multilingual support for international students and migrant youth
- [ ] Add AI-assisted policy summarization and form-preparation workflows
- [ ] Publish reusable templates for other public-service navigators

## Maintainer

Maintained by [Rookie / 권예람](https://github.com/rookie1028-bot), an AI-native creator building local-first tools, public-service prototypes, and record-based life operating systems.

## Contributing

Contributions are welcome, especially:

- policy seed data corrections
- region-specific policy packs
- accessibility improvements
- KRDS component mapping improvements
- tests for scoring and filtering edge cases
- documentation for non-developer users

Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## License

MIT License. See [`LICENSE`](./LICENSE).
