import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SquareProfileImage from '../components/site/SquareProfileImage';

describe('SquareProfileImage', () => {
  it('renders a square image contract without changing ResponsiveImage', () => {
    const { container } = render(
      <SquareProfileImage src="/portrait.jpg" alt="Profile portrait" />,
    );

    expect(container.firstChild).toHaveClass('square-profile-image');
    expect(screen.getByRole('img', { name: 'Profile portrait' })).toHaveAttribute('width', '1');
    expect(screen.getByRole('img', { name: 'Profile portrait' })).toHaveAttribute('height', '1');
  });
});
