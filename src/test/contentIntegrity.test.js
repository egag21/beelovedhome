import { describe, expect, it } from 'vitest';
import { editingProjects, portfolioProjects } from '../content/portfolio';
import { routeMeta } from '../content/site';

describe('content integrity', () => {
  it('keeps portfolio IDs unique and aligned with editing projects', () => {
    const ids = portfolioProjects.map((project) => project.id);

    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toContain(editingProjects.developmental.id);
    expect(ids).toContain(editingProjects.line.id);
  });

  it('defines metadata for every public route', () => {
    expect(Object.keys(routeMeta)).toEqual(
      expect.arrayContaining(['/', '/portfolio', '/about', '/cv-contact', 'notFound']),
    );
  });
});
