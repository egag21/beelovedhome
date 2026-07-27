import { createElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, describe, expect, it } from 'vitest';
import SiteLayout from '../app/SiteLayout';
import { resumePdfPath } from '../content/site';
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

  it('pairs each portfolio jump link with its closed, color-keyed case study', () => {
    const { container } = render(
      <MemoryRouter>
        <PortfolioPage />
      </MemoryRouter>,
    );
    const links = Array.from(container.querySelectorAll('.portfolio-jump a'));

    expect(links).toHaveLength(4);

    links.forEach((link, index) => {
      const projectId = link.getAttribute('href').slice(1);
      const destination = container.querySelector(`#${projectId}`);
      const number = String(index + 1).padStart(2, '0');

      expect(link.querySelector('.jump-nav__number')).toHaveTextContent(number);
      expect(link).toHaveClass(`project-accent--${projectId}`);
      expect(destination.querySelector('.heading-layout__number')).toHaveTextContent(number);
      expect(destination.querySelector('.project-accordion__trigger')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
      expect(destination).toHaveClass(`project-accent--${projectId}`);
    });

    expect(container.querySelector('.portfolio-overview-grid')).not.toBeInTheDocument();
    expect(container.querySelector('#grn-map-app .project-featured-label')).toHaveTextContent(
      'Featured project',
    );
  });

  it('links both schools from the About page', () => {
    const { container } = render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );
    const educationLinks = Array.from(container.querySelectorAll('.education-link'));

    expect(educationLinks).toHaveLength(2);
    expect(educationLinks[0]).toHaveAttribute('href', 'https://www.fullerton.edu/');
    expect(educationLinks[1]).toHaveAttribute('href', 'https://calvarychapeluniversity.edu/');
  });

  it('links both schools from the CV page', () => {
    const { container } = render(
      <MemoryRouter>
        <CvContactPage />
      </MemoryRouter>,
    );
    const educationLinks = Array.from(container.querySelectorAll('.education-link'));

    expect(educationLinks).toHaveLength(2);
    expect(educationLinks[0]).toHaveAttribute('href', 'https://www.fullerton.edu/');
    expect(educationLinks[1]).toHaveAttribute('href', 'https://calvarychapeluniversity.edu/');
  });

  it('opens every CV PDF link in a new tab', () => {
    for (const Page of [HomePage, AboutPage, CvContactPage]) {
      const { container, unmount } = render(
        <MemoryRouter>
          <SiteLayout>
            {createElement(Page)}
          </SiteLayout>
        </MemoryRouter>,
      );
      const cvLinks = Array.from(container.querySelectorAll(`a[href="${resumePdfPath}"]`));

      expect(cvLinks.length).toBeGreaterThan(0);
      cvLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });

      unmount();
    }
  });
});
