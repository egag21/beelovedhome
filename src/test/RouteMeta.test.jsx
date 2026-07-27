import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import RouteMeta from '../app/RouteMeta';

describe('RouteMeta', () => {
  it('sets route-specific title, description, and canonical URL', () => {
    render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <RouteMeta />
      </MemoryRouter>,
    );

    expect(document.title).toBe('Selected Work | Jeffrey Gage');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.stringContaining('Case studies'),
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://jeffgage.net/portfolio',
    );
  });
});
