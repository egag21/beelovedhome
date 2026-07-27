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

  it('uses the solid header treatment only on Home', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <SiteHeader />
      </MemoryRouter>,
    );

    expect(document.querySelector('.site-header')).toHaveClass('site-header--home');

    unmount();

    render(
      <MemoryRouter initialEntries={['/about']}>
        <SiteHeader />
      </MemoryRouter>,
    );

    expect(document.querySelector('.site-header')).not.toHaveClass('site-header--home');
  });
});
