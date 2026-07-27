import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import CareerAccordion from '../components/site/CareerAccordion';

const items = [
  {
    title: 'First role',
    meta: '2024–Present',
    summary: 'First summary',
    items: ['First detail'],
  },
  {
    title: 'Second role',
    meta: '2020–2024',
    summary: 'Second summary',
    items: ['Second detail'],
  },
];

describe('CareerAccordion', () => {
  it('connects triggers and panels and changes the open role', () => {
    render(<CareerAccordion items={items} />);

    const firstTrigger = screen.getByRole('button', { name: /First role/i });
    const secondTrigger = screen.getByRole('button', { name: /Second role/i });

    expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('region', { name: /First role/i })).toBeInTheDocument();

    fireEvent.click(secondTrigger);

    expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');
    expect(secondTrigger).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('region', { name: /Second role/i })).toBeInTheDocument();
  });
});
