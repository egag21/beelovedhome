import FeatureList from '../../components/layouts/FeatureList';
import HeadingSection from '../../components/layouts/HeadingSection';
import PortfolioComparison from '../../components/site/PortfolioComparison';
import { grnComparisons, grnSkills } from '../../content/portfolio';

export default function GrnCaseStudy() {
  return (
    <article className="case-study section" id="grn-map-app">
      <HeadingSection
        eyebrow="Product analysis · UX design · front-end prototyping · technical communication · 2026"
        title="GRN Map App Redesign & Front-End Prototype"
        lead="A 34-page stakeholder proposal translated into a working, responsive front-end prototype for a complex language-resource mapping application."
      />
      <div className="case-summary-grid case-summary-grid--single">
        <div className="standard-copy">
          <h3>The challenge</h3>
          <p>
            The existing application contained extensive language-resource data but was difficult to use on
            smaller screens and divided important functions across competing workflows.
          </p>
          <h3>The contribution</h3>
          <p>
            Following an all-day stakeholder meeting, I synthesized feedback, established design priorities,
            reorganized the information architecture, consolidated search behavior, and designed the mobile and
            desktop experiences. I then independently implemented the responsive prototype front end and
            documented its interaction requirements, technical considerations, and edge cases.
          </p>
          <p>
            I collaborated with a backend developer on access to and integration of the application&apos;s data;
            the front-end design and implementation were entirely my work.
          </p>
          <p className="proposal-note">
            The comparisons below pair my original redesign artifacts with the working front-end prototype I
            designed and implemented. Backend data access and integration were developed in collaboration with
            a backend developer.
          </p>
        </div>
      </div>
      <section className="design-evolution" aria-labelledby="design-evolution-title">
        <div className="design-evolution__intro">
          <p className="eyebrow">Design evolution</p>
          <h3 id="design-evolution-title">From redesign to working prototype</h3>
          <p>
            Each comparison shows how the proposed interaction and layout translated into the responsive
            front-end prototype. Select any image to view it at full resolution.
          </p>
        </div>
        <PortfolioComparison comparisons={grnComparisons} />
      </section>
      <div className="case-detail">
        <h3>Skills demonstrated</h3>
        <FeatureList items={grnSkills} className="check-list--columns" />
      </div>
    </article>
  );
}
