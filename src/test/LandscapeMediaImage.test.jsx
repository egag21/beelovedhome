import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import LandscapeMediaImage from '../components/site/LandscapeMediaImage';

describe('LandscapeMediaImage', () => {
  it('uses a landscape ratio and hides absent subtitle text', () => {
    const { container } = render(
      <LandscapeMediaImage src="/art.jpg" alt="" width="1200" height="800" />,
    );

    expect(container.querySelector('.landscape-media-image__frame')).toHaveStyle({
      aspectRatio: '3 / 2',
    });
    expect(container.querySelector('figcaption')).not.toBeInTheDocument();
  });

  it('shows optional subtitle text beneath the image', () => {
    render(
      <LandscapeMediaImage
        src="/art.jpg"
        alt="Example artwork"
        width="1200"
        height="800"
        subtitle="Optional subtitle"
      />,
    );

    expect(screen.getByText('Optional subtitle')).toBeInTheDocument();
  });
});
