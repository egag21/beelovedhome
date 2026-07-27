import { createElement } from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import HeadingDetail from '../components/layouts/HeadingDetail';
import HeadingDisplay from '../components/layouts/HeadingDisplay';
import HeadingMicro from '../components/layouts/HeadingMicro';
import HeadingSection from '../components/layouts/HeadingSection';
import HeadingSubsection from '../components/layouts/HeadingSubsection';

const headingComponents = [
  ['display', HeadingDisplay],
  ['section', HeadingSection],
  ['subsection', HeadingSubsection],
  ['detail', HeadingDetail],
  ['micro', HeadingMicro],
];

afterEach(cleanup);

describe('heading content defaults', () => {
  for (const [name, Heading] of headingComponents) {
    it(`does not expose catalog guidance in ${name} headings`, () => {
      render(createElement(Heading, { title: 'Public heading' }));

      expect(screen.getByText('Public heading')).toBeInTheDocument();
      expect(screen.queryByText(/Typical content/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Use this H[1-6]-style/i)).not.toBeInTheDocument();
    });
  }
});
