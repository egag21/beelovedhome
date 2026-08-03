import { describe, expect, it } from 'vitest';
import { routeMeta, siteMeta } from '../content/site';

describe('content integrity', () => {
  it('defines Bee Loved Home metadata for the public site', () => {
    expect(siteMeta.siteName).toBe('Bee Loved Home');
    expect(siteMeta.siteUrl).toBe('https://beelovedhome.com');
    expect(siteMeta.socialImage).toBe('/images/bee-loved-wraps.png');
    expect(Object.keys(routeMeta)).toEqual(['/', 'notFound']);
  });
});
