import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import SiteHeader from '../components/site/SiteHeader';

afterEach(cleanup);

describe('SiteHeader', () => {
  it('opens and closes the mobile menu with Escape', () => {
    render(
      <MemoryRouter>
        <SiteHeader />
      </MemoryRouter>,
    );

    const toggle = screen.getByRole('button', { name: 'Open menu' });
    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAccessibleName('Close menu');

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveAccessibleName('Open menu');
  });

  it('links the brand home and navigation to page sections', () => {
    render(
      <MemoryRouter>
        <SiteHeader />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: 'Bee Loved Home, home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Our wraps' })).toHaveAttribute('href', '#wraps');
    expect(screen.getByRole('link', { name: 'Find us' })).toHaveAttribute('href', '#find-us');
  });
});
