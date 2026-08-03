import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import RouteMeta from '../app/RouteMeta';

describe('RouteMeta', () => {
  it('sets route-specific title, description, and canonical URL', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <RouteMeta />
      </MemoryRouter>,
    );

    expect(document.title).toBe('Bee Loved Home | Handmade Beeswax Wraps');
    expect(document.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      expect.stringContaining('Colorado Springs'),
    );
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
      'href',
      'https://beelovedhome.com',
    );
  });
});
