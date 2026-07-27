import { createElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import AboutPage from '../pages/AboutPage';
import CvContactPage from '../pages/CvContactPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import PortfolioPage from '../pages/PortfolioPage';

const publicPages = [
  ['home', HomePage],
  ['portfolio', PortfolioPage],
  ['about', AboutPage],
  ['CV and contact', CvContactPage],
  ['not found', NotFoundPage],
];

const unsupportedFramingPatterns = [
  /Typical content (before|after)/i,
  /This H[1-6]-style block/i,
  /Use this H[1-6]-style block/i,
  /Use this as a robust H2/i,
  /The PDF describes/i,
  /from the current CV/i,
  /source-backed CV details/i,
  /comes directly from the current CV/i,
];

afterEach(cleanup);

describe('public page content', () => {
  for (const [name, Page] of publicPages) {
    it(`does not render component-library guidance on the ${name} page`, () => {
      const { container } = render(
        <MemoryRouter>
          {createElement(Page)}
        </MemoryRouter>,
      );

      for (const pattern of unsupportedFramingPatterns) {
        expect(container).not.toHaveTextContent(pattern);
      }
    });
  }
});
