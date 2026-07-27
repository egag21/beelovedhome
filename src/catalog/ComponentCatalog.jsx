import { MemoryRouter } from 'react-router-dom';
import CareerAccordion from '../components/site/CareerAccordion';
import EditorialPortfolioHero from '../components/site/EditorialPortfolioHero';
import LandscapeMediaImage from '../components/site/LandscapeMediaImage';
import PortfolioComparison from '../components/site/PortfolioComparison';
import ResponsiveImage from '../components/site/ResponsiveImage';
import SquareProfileImage from '../components/site/SquareProfileImage';
import './ComponentCatalog.css';

const sampleCareer = [
  {
    title: 'Content Designer · Example Organization',
    meta: 'Remote · 2024–Present',
    summary: 'A neutral example showing the career-focused accordion option.',
    items: ['Clarified complex information', 'Collaborated across disciplines'],
  },
  {
    title: 'Technical Writer · Example Company',
    meta: '2019–2024',
    summary: 'A second role demonstrates collapsed and expanded states.',
    items: ['Created task-focused documentation', 'Maintained editorial standards'],
  },
];

const sampleComparison = [
  {
    title: 'Mobile Home Screen',
    description: 'A neutral before-and-after product comparison.',
    redesign: '/portfolio/grn/redesign/default-home-screen.png',
    redesignAlt: 'Example mobile redesign',
    redesignWidth: 434,
    redesignHeight: 936,
    prototype: '/portfolio/grn/prototype/default-home-screen.png',
    prototypeAlt: 'Example mobile prototype',
    prototypeWidth: 1179,
    prototypeHeight: 2556,
  },
];

export default function ComponentCatalog() {
  return (
    <div className="component-catalog">
      <header className="component-catalog__intro">
        <p className="eyebrow">Development catalog</p>
        <h1>Reusable site components</h1>
        <p>
          Original layout options remain available alongside the newer
          portfolio-oriented variants.
        </p>
        <nav aria-label="Catalog sections">
          <a href="/layout-catalog.html">Original layout selector</a>
          <a href="/services-example.html">Original services example</a>
        </nav>
      </header>

      <section aria-labelledby="catalog-editorial-hero">
        <h2 id="catalog-editorial-hero">EditorialPortfolioHero</h2>
        <p>A content-driven full-width hero with router-aware internal actions.</p>
        <MemoryRouter>
          <EditorialPortfolioHero
            eyebrow="Example location"
            headline="A clear editorial headline"
            descriptor="Reusable portfolio hero"
            body="Use this option for editorial, communications, and portfolio sites."
            micro="Optional supporting note"
            imageSrc="/images/hero-editorial-background.png"
            imageAlt=""
            actions={[
              { label: 'Internal action', href: '/about' },
              { label: 'Download action', href: '/cover.pdf' },
            ]}
          />
        </MemoryRouter>
      </section>

      <section aria-labelledby="catalog-career-accordion">
        <h2 id="catalog-career-accordion">CareerAccordion</h2>
        <p>An accessible résumé-oriented variant of the generic FAQ accordion.</p>
        <CareerAccordion items={sampleCareer} />
      </section>

      <section aria-labelledby="catalog-comparison">
        <h2 id="catalog-comparison">PortfolioComparison</h2>
        <p>A paired artifact comparison for product and case-study pages.</p>
        <PortfolioComparison comparisons={sampleComparison} />
      </section>

      <section aria-labelledby="catalog-responsive-image">
        <h2 id="catalog-responsive-image">ResponsiveImage</h2>
        <p>A reusable figure that standardizes dimensions, loading, and captions.</p>
        <ResponsiveImage
          className="component-catalog__image"
          src="/images/international-collaboration.png"
          alt=""
          width="1536"
          height="1024"
          caption="Example decorative image with a visible caption"
        />
      </section>

      <section aria-labelledby="catalog-landscape-media">
        <h2 id="catalog-landscape-media">LandscapeMediaImage</h2>
        <p>A ratio-controlled landscape image with an optional subtitle.</p>
        <LandscapeMediaImage
          src="/images/optimized/international-768.jpg"
          alt=""
          width="1536"
          height="1024"
          subtitle="Optional subtitle text"
        />
      </section>

      <section aria-labelledby="catalog-square-profile">
        <h2 id="catalog-square-profile">SquareProfileImage</h2>
        <p>A profile portrait that always keeps a square frame and centered crop.</p>
        <SquareProfileImage
          src="/images/optimized/headshot-480.jpg"
          srcSet="/images/optimized/headshot-480.jpg 480w, /images/optimized/headshot-960.jpg 960w"
          sizes="390px"
          alt="Example square profile portrait"
        />
      </section>
    </div>
  );
}
