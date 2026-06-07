# Contributing to Youth Policy Navigator

Thanks for considering a contribution.

This project is an early-stage public-interest tool. The most useful contributions are small, verifiable, and easy for non-developers to understand.

## Good first contributions

- Correct a policy title, deadline note, channel URL, or action checklist
- Add a new seed policy with official source URL
- Improve Korean copy so the next action is clearer
- Add test cases for scoring or filtering behavior
- Improve accessibility labels, keyboard flow, or focus states
- Document how another city/region can fork the navigator

## Development setup

```bash
npm install
npm test
npm run build
npm run dev
```

## Data contribution rules

When adding or editing policy data:

1. Prefer official government, school, or public institution URLs.
2. Avoid promising eligibility. This app helps prioritize; official channels decide final eligibility.
3. Include a concrete `action` field that tells users what to prepare next.
4. Keep deadlines conservative. If uncertain, use `공고 확인` or `지자체 공고별 상이`.
5. Add or update tests when the scoring behavior changes.

## Pull request checklist

- [ ] The app builds with `npm run build`
- [ ] Tests pass with `npm test`
- [ ] New policy entries include official URLs
- [ ] User-facing copy is clear for non-developer users
- [ ] Accessibility basics are preserved

## Maintainer workflow

The maintainer uses AI coding tools, including Codex/Hermes-style agents, for triage, review, and documentation. Contributions should remain transparent: generated code is welcome, but changes must be tested and understandable.
