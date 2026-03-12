import React from 'react';
import './WorkInProgress.css';
import StandardCentered from './layouts/StandardCentered';
import Standard from './layouts/Standard';
import SplitColumns from './layouts/SplitColumns';
import CardsGrid from './layouts/CardsGrid';
import SidebarLeft from './layouts/SidebarLeft';
import SidebarRight from './layouts/SidebarRight';
import TwoColumnTable from './layouts/TwoColumnTable';
import ThreeColumnTable from './layouts/ThreeColumnTable';
import HeroBanner from './layouts/HeroBanner';
import HeroFullWidth from './layouts/HeroFullWidth';
import TestimonialCards from './layouts/TestimonialCards';
import FeatureList from './layouts/FeatureList';
import FaqAccordion from './layouts/FaqAccordion';
import ImageSingle from './layouts/ImageSingle';
import ImageTwoUp from './layouts/ImageTwoUp';
import ImageGridFour from './layouts/ImageGridFour';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import HeadingSubsection from './layouts/HeadingSubsection';
import HeadingDetail from './layouts/HeadingDetail';
import HeadingMicro from './layouts/HeadingMicro';

const AboutJeff = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  const catalog = [
    {
      id: 'layout-1',
      name: 'Standard Centered',
      useWhen: 'You need a concise mission or value statement with a balanced visual center.',
      how: 'Keep copy to 2-4 short paragraphs and use this near the top of a page.',
      preview: <StandardCentered headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-12',
      name: 'Standard',
      useWhen: 'You want straightforward left-aligned narrative content.',
      how: 'Use for body sections where clarity and readability matter most.',
      preview: <Standard headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-2',
      name: 'Split Columns',
      useWhen: 'You need side-by-side comparison: problem vs outcome, before vs after, option A vs B.',
      how: 'Keep each column parallel in structure so scanning is easy.',
      preview: <SplitColumns headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-4',
      name: 'Cards Grid',
      useWhen: 'You need modular chunks like services, packages, or features.',
      how: 'Use 2-4 cards with one clear idea per card and optional badges.',
      preview: <CardsGrid headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-5',
      name: 'Sidebar Left',
      useWhen: 'Primary narrative plus persistent supporting links or notes.',
      how: 'Put navigation or reference items in the left sidebar and core argument on the right.',
      preview: <SidebarLeft headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-6',
      name: 'Sidebar Right',
      useWhen: 'You want the narrative to appear first and reference content second.',
      how: 'Use right sidebar for proof points, quick stats, or links.',
      preview: <SidebarRight headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-7',
      name: 'Two-Column Table',
      useWhen: 'You need simple side-by-side tabular data (e.g., offer and price).',
      how: 'Keep labels short and use for quick scan decisions.',
      preview: <TwoColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-8',
      name: 'Three-Column Table',
      useWhen: 'You need process/status comparisons with one extra dimension.',
      how: 'Use consistent column meaning across rows (Phase, Goal, Output style).',
      preview: <ThreeColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-9',
      name: 'Hero Banner',
      useWhen: 'You need a high-impact page opener with headline, body, and CTA.',
      how: 'Use strong image contrast and keep body copy to one compact statement.',
      preview: <HeroBanner headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />,
    },
    {
      id: 'layout-14',
      name: 'Hero Full-Width',
      useWhen: 'You want a cinematic full-bleed first impression.',
      how: 'Reserve for top-of-page emphasis; avoid stacking multiple full-width heroes.',
      preview: <HeroFullWidth headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />,
    },
    {
      id: 'layout-10',
      name: 'Testimonial Cards',
      useWhen: 'You need social proof from clients in a skimmable format.',
      how: 'Use short quote + attribution; 3 cards is often enough.',
      preview: <TestimonialCards headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-11',
      name: 'Feature List',
      useWhen: 'You need a compact list of deliverables or benefits.',
      how: 'Lead each bullet with a bold noun phrase and keep each line outcome-focused.',
      preview: <FeatureList headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-13',
      name: 'FAQ Accordion',
      useWhen: 'You need to reduce objections without dumping all text at once.',
      how: 'Use direct questions and concise answers; prioritize decision-blocking questions first.',
      preview: <FaqAccordion headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-15',
      name: 'Single Image',
      useWhen: 'You need one strong visual break between text sections.',
      how: 'Pick one clear image concept and optional corner label for context.',
      preview: <ImageSingle headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-16',
      name: 'Two Images',
      useWhen: 'You need a paired visual comparison.',
      how: 'Use for before/after, capability A/B, or process stage contrasts.',
      preview: <ImageTwoUp headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-17',
      name: 'Image Grid (4)',
      useWhen: 'You need a portfolio-like snapshot with multiple visual proofs.',
      how: 'Keep image subjects distinct so each tile adds unique value.',
      preview: <ImageGridFour headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-18',
      name: 'Heading Block H1',
      useWhen: 'You need a robust page-level heading block.',
      how: 'Use once per page for the primary intent or thesis statement.',
      preview: <HeadingDisplay headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-19',
      name: 'Heading Block H2',
      useWhen: 'You need major section transitions under the page H1.',
      how: 'Use to separate core sections and maintain clear hierarchy.',
      preview: <HeadingSection headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-20',
      name: 'Heading Block H3',
      useWhen: 'You need subsection transitions inside an H2 section.',
      how: 'Use before grouped detail content or component clusters.',
      preview: <HeadingSubsection headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-21',
      name: 'Heading Block H4',
      useWhen: 'You need detailed but still visible sub-subsection headings.',
      how: 'Place right before tactical lists, cards, or process notes.',
      preview: <HeadingDetail headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'layout-22',
      name: 'Heading Block H5',
      useWhen: 'You need compact micro-transitions between dense elements.',
      how: 'Use sparingly for short context cues, notes, or inline guidance blocks.',
      preview: <HeadingMicro headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
  ];

  return (
    <div className="page-content about-catalog">
      <section className="sample-text layout-18 about-catalog__intro">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Layout Option Catalog"
          title="All Available Layout Options, With Usage Guidance"
          lead="This page is intentionally structured as a visual + textual catalog. Each section below includes: Layout ID, name, when to use it, how to use it, and a live preview."
          beforeContext="Screenshot goal: make each option easy to identify in one long full-page capture."
          afterContext="If you share a full-page screenshot in another thread, each block is labeled so the model can map visual structure to layout IDs."
        />
      </section>

      {catalog.map((item) => (
        <section key={item.id} className="about-catalog__item" id={`catalog-${item.id}`}>
          <div className="about-catalog__meta">
            <h2 style={headerStyle}>{`Layout ID: ${item.id}`}</h2>
            <p style={bodyStyle}><strong>Name:</strong> {item.name}</p>
            <p style={bodyStyle}><strong>Use when:</strong> {item.useWhen}</p>
            <p style={bodyStyle}><strong>How to use:</strong> {item.how}</p>
          </div>

          <div className={`sample-text ${item.id} about-catalog__preview`}>
            {item.preview}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutJeff;
