import { describe, expect, it } from 'vitest';
import {
  policies,
  normalizeProfile,
  scorePolicy,
  filterPolicies,
  buildSavedPolicyMarkdown,
  buildNavigatorSummary,
} from '../src/policy-core.js';

describe('청년정책 내비게이터 core', () => {
  it('normalizes a youth profile with safe defaults', () => {
    expect(normalizeProfile({ age: '24', region: '서울', situation: 'job', income: 'low' })).toMatchObject({
      age: 24,
      region: '서울',
      situation: 'job',
      income: 'low',
      keywords: [],
    });
  });

  it('scores policy fit by age, region, situation, income and keyword', () => {
    const profile = normalizeProfile({ age: 24, region: '서울', situation: 'job', income: 'low', keywords: '월세 취업' });
    const housing = policies.find((policy) => policy.id === 'seoul-youth-rent');
    const score = scorePolicy(housing, profile);
    expect(score.percent).toBeGreaterThanOrEqual(80);
    expect(score.reasons).toContain('지역 조건 일치');
  });

  it('filters and sorts recommended policies by fit score', () => {
    const profile = normalizeProfile({ age: 29, region: '부산', situation: 'startup', income: 'middle', keywords: '창업' });
    const result = filterPolicies({ profile, query: '창업', category: '일자리·창업' });
    expect(result[0].id).toBe('busan-startup-voucher');
    expect(result[0].fit.percent).toBeGreaterThan(60);
  });

  it('builds a KRDS-like citizen service summary', () => {
    const summary = buildNavigatorSummary(policies);
    expect(summary.total).toBeGreaterThan(5);
    expect(summary.categories).toContain('주거');
    expect(summary.activeCount).toBeGreaterThan(0);
  });

  it('exports saved policy markdown for Tolaria or 상담 기록', () => {
    const selected = [policies[0], policies[1]];
    const markdown = buildSavedPolicyMarkdown(selected, { now: new Date('2026-05-20T00:00:00+09:00') });
    expect(markdown).toContain('# 청년정책 내비게이터 저장 목록');
    expect(markdown).toContain('2026-05-20');
    expect(markdown).toContain(policies[0].title);
  });
});
