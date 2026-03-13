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
import CatalogCard from './layouts/CatalogCard';

const AboutJeff = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  const catalog = [
    {
      id: 'LO-23-CtlgCard',
      pattern: 'Catalog Card',
      fit: 'Section-level context framing before a layout preview.',
      notes: 'Ideal when readers need orientation before scanning a visual block.',
      preview: <CatalogCard headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-01-StndCnt',
      pattern: 'Standard Centered',
      fit: 'Concise mission or value statements with a balanced visual center.',
      notes: 'Works best with 2-4 short paragraphs near the top of a page.',
      preview: <StandardCentered headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-12-Stndrd',
      pattern: 'Standard',
      fit: 'Straightforward left-aligned narrative content.',
      notes: 'Ideal for body sections where clarity and readability lead.',
      preview: <Standard headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-02-SpltClmn',
      pattern: 'Split Columns',
      fit: 'Side-by-side comparisons: problem/outcome, before/after, option A/B.',
      notes: 'Keep columns parallel in structure for easy scanning.',
      preview: <SplitColumns headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-04-CrdsGrid',
      pattern: 'Cards Grid',
      fit: 'Modular chunks such as services, packages, or features.',
      notes: 'Use 2-4 cards with one clear idea per card.',
      preview: <CardsGrid headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-05-SdbrLeft',
      pattern: 'Sidebar Left',
      fit: 'Primary narrative plus persistent supporting links or notes.',
      notes: 'Place navigation/reference in the left sidebar and core argument on the right.',
      preview: <SidebarLeft headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-06-SdbrRght',
      pattern: 'Sidebar Right',
      fit: 'Narrative-first flow with supporting reference content second.',
      notes: 'Use right sidebar for proof points, quick stats, or links.',
      preview: <SidebarRight headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-07-TwoColTb',
      pattern: 'Two-Column Table',
      fit: 'Simple side-by-side tabular data such as offer vs price.',
      notes: 'Keep labels short for quick-scan decisions.',
      preview: <TwoColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-08-ThrColTb',
      pattern: 'Three-Column Table',
      fit: 'Process/status comparisons with one extra dimension.',
      notes: 'Keep column meaning consistent across rows.',
      preview: <ThreeColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-09-HeroBnnr',
      pattern: 'Hero Banner',
      fit: 'High-impact page openers with headline, body, and CTA.',
      notes: 'Use strong image contrast and compact body copy.',
      preview: <HeroBanner headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />,
    },
    {
      id: 'LO-14-HrFllWdt',
      pattern: 'Hero Full-Width',
      fit: 'Cinematic full-bleed first impressions.',
      notes: 'Reserve for top-of-page emphasis; avoid stacking multiples.',
      preview: <HeroFullWidth headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />,
    },
    {
      id: 'LO-10-TstmCrd',
      pattern: 'Testimonial Cards',
      fit: 'Social proof in a skimmable format.',
      notes: 'Use short quote + attribution; three cards is usually enough.',
      preview: <TestimonialCards headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-11-FtrList',
      pattern: 'Feature List',
      fit: 'Compact lists of deliverables or benefits.',
      notes: 'Lead bullets with bold noun phrases and outcome-focused lines.',
      preview: <FeatureList headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-13-FaqAccrd',
      pattern: 'FAQ Accordion',
      fit: 'Objection handling without showing all text at once.',
      notes: 'Use direct questions and concise answers.',
      preview: <FaqAccordion headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-15-SnglImg',
      pattern: 'Single Image',
      fit: 'One strong visual break between text sections.',
      notes: 'Use one clear image concept with optional corner label.',
      preview: <ImageSingle headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-16-TwoImgs',
      pattern: 'Two Images',
      fit: 'Paired visual comparisons.',
      notes: 'Use for before/after, capability A/B, or stage contrasts.',
      preview: <ImageTwoUp headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-17-ImgGrd4',
      pattern: 'Image Grid (4)',
      fit: 'Portfolio-style snapshots with multiple visual proofs.',
      notes: 'Keep image subjects distinct so each tile adds unique value.',
      preview: <ImageGridFour headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-18-HdngH1',
      pattern: 'Heading Block H1',
      fit: 'Robust page-level heading blocks.',
      notes: 'Use once per page for primary intent/thesis.',
      preview: <HeadingDisplay headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-19-HdngH2',
      pattern: 'Heading Block H2',
      fit: 'Major section transitions under the page H1.',
      notes: 'Separate core sections and maintain clear hierarchy.',
      preview: <HeadingSection headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-20-HdngH3',
      pattern: 'Heading Block H3',
      fit: 'Subsection transitions inside an H2 section.',
      notes: 'Use before grouped detail content or component clusters.',
      preview: <HeadingSubsection headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-21-HdngH4',
      pattern: 'Heading Block H4',
      fit: 'Detailed sub-subsection headings.',
      notes: 'Place before tactical lists, cards, or process notes.',
      preview: <HeadingDetail headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
    {
      id: 'LO-22-HdngH5',
      pattern: 'Heading Block H5',
      fit: 'Compact micro-transitions between dense elements.',
      notes: 'Use sparingly for short context cues and inline guidance.',
      preview: <HeadingMicro headerStyle={headerStyle} bodyStyle={bodyStyle} />,
    },
  ];

  return (
    <div className="page-content about-catalog">
      <section className="sample-text LO-18-HdngH1 about-catalog__intro">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="All Available Layout Options, With Usage Guidance"
          lead="This page is intentionally structured as a visual + textual catalog. Each section below includes: Layout ID, pattern, best-fit context, implementation notes, and a live preview."
          beforeContext="Screenshot goal: make each option easy to identify in one long full-page capture."
          afterContext="If you share a full-page screenshot in another thread, each block is labeled so the model can map visual structure to layout IDs."
        />
      </section>

      {catalog.map((item) => (
        <section key={item.id} className="about-catalog__item" id={`catalog-${item.id}`}>
          <CatalogCard
            headerStyle={headerStyle}
            bodyStyle={bodyStyle}
            layoutId={item.id}
            pattern={item.pattern}
            fit={item.fit}
            notes={item.notes}
          />

          <div className={`sample-text ${item.id} about-catalog__preview`}>
            {item.preview}
          </div>
        </section>
      ))}
    </div>
  );
};

export default AboutJeff;
