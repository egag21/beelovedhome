import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

afterEach(cleanup);

describe('Bee Loved Home public content', () => {
  it('introduces the sourdough wrap and Carrie', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Keep good breadgood longer');
    expect(screen.getByText(/Small-batch beeswax wraps made by Carrie/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'The Loaf Hug' })).toBeInTheDocument();
  });

  it('publishes the recurring Monument market information', () => {
    render(<HomePage />);

    expect(screen.getByText(/farmers market in Monument, Colorado, every Saturday/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Find us this Saturday' })).toHaveAttribute('href', '#find-us');
    expect(screen.getByRole('link', { name: /Ask about this week’s market/ })).toHaveAttribute(
      'href',
      'mailto:info@beelovedhome.com',
    );
  });

  it('includes accessible wrap-care and FAQ content', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { name: /Cool water\.\s*Kind hands\./ })).toBeInTheDocument();
    expect(screen.getByText(/No hot water, microwave, dishwasher/i)).toBeInTheDocument();
    expect(screen.getByText('How long will a wrap last?')).toBeInTheDocument();
  });

  it('offers a clear route home from the not-found page', () => {
    render(<MemoryRouter><NotFoundPage /></MemoryRouter>);

    expect(screen.getByRole('link', { name: 'Return to Bee Loved Home' })).toHaveAttribute('href', '/');
  });
});
