import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import PortfolioPage from '../pages/PortfolioPage';

afterEach(cleanup);

describe('Portfolio project accordions', () => {
  it('starts with all four projects closed and opens them independently', () => {
    render(<PortfolioPage />);

    const triggers = screen.getAllByRole('button', { name: /View case study:/i });

    expect(triggers).toHaveLength(4);
    triggers.forEach((trigger) => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    fireEvent.click(triggers[0]);

    expect(triggers[0]).toHaveAttribute('aria-expanded', 'true');
    expect(triggers[1]).toHaveAttribute('aria-expanded', 'false');
    expect(
      screen.getByRole('region', { name: /GRN Map App Redesign/i }),
    ).toBeInTheDocument();

    fireEvent.click(triggers[1]);

    expect(triggers[0]).toHaveAttribute('aria-expanded', 'true');
    expect(triggers[1]).toHaveAttribute('aria-expanded', 'true');
    expect(
      screen.getByRole('region', { name: /Strengthening Structure/i }),
    ).toBeInTheDocument();
  });

  it('keeps the sticky project navigation links intact', () => {
    render(<PortfolioPage />);

    const navigation = screen.getByRole('navigation', {
      name: /Portfolio case studies/i,
    });

    expect(navigation.querySelectorAll('a')).toHaveLength(4);
    expect(navigation.querySelector('a[href="#grn-map-app"]')).toBeInTheDocument();
    expect(navigation.querySelector('a[href="#c2c-story"]')).toBeInTheDocument();
  });
});
