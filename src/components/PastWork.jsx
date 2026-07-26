import React from 'react';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import CardsGrid from './layouts/CardsGrid';
import FeatureList from './layouts/FeatureList';
import SplitColumns from './layouts/SplitColumns';
import { portfolioProjects } from '../data/resumeContent';

const grnSkills = [
  'Stakeholder collaboration',
  'Content strategy',
  'Information architecture',
  'UX writing',
  'Responsive front-end implementation',
  'Backend data integration collaboration',
  'Functional documentation',
  'Mobile-first design',
  'Communication of complex technical concepts',
];

const grnComparisons = [
  {
    title: 'Default Home Screen',
    description: 'The map-first redesign became a responsive prototype with persistent navigation, search, layer controls, and map tools.',
    redesign: '/portfolio/grn/redesign/default-home-screen.png',
    redesignAlt: 'Original GRN Map App mobile default home screen redesign',
    redesignWidth: 434,
    redesignHeight: 936,
    prototype: '/portfolio/grn/prototype/default-home-screen.png',
    prototypeAlt: 'Working GRN Map App mobile prototype showing the default home screen',
    prototypeWidth: 1179,
    prototypeHeight: 2556,
  },
  {
    title: 'Information Panel',
    description: 'The proposed information hierarchy became an interactive tray that keeps map context visible while presenting detailed language data.',
    redesign: '/portfolio/grn/redesign/information-panel.png',
    redesignAlt: 'Original GRN Map App mobile information panel redesign',
    redesignWidth: 434,
    redesignHeight: 936,
    prototype: '/portfolio/grn/prototype/information-panel.png',
    prototypeAlt: 'Working GRN Map App mobile prototype showing an open information panel',
    prototypeWidth: 1179,
    prototypeHeight: 2556,
  },
  {
    title: 'Universal Search',
    description: 'The unified search concept became a focused mobile workflow for finding languages, countries, places, and identifiers from one field.',
    redesign: '/portfolio/grn/redesign/universal-search.png',
    redesignAlt: 'Original GRN Map App universal search redesign',
    redesignWidth: 217,
    redesignHeight: 469,
    prototype: '/portfolio/grn/prototype/universal-search.png',
    prototypeAlt: 'Working GRN Map App mobile prototype showing universal search results',
    prototypeWidth: 1179,
    prototypeHeight: 2556,
  },
  {
    title: 'Desktop Search Results',
    description: 'The large-screen redesign became a spacious desktop experience that keeps detailed results, the selected geography, and the active legend visible together.',
    redesign: '/portfolio/grn/redesign/desktop-search-results.png',
    redesignAlt: 'Original GRN Map App large-screen search results redesign',
    redesignWidth: 470,
    redesignHeight: 265,
    prototype: '/portfolio/grn/prototype/desktop-search-results.png',
    prototypeAlt: 'Working GRN Map App desktop prototype showing search results beside the map',
    prototypeWidth: 3018,
    prototypeHeight: 1656,
    wide: true,
  },
];

const developmentalDecisions = [
  'Unified three disconnected topics around “expanding our tent”',
  'Reorganized the article around calling rather than chronology',
  'Added ministry and Code-a-Thon context',
  'Shifted informational reporting toward participation',
  'Created a clearer foundation for the fundraising appeal',
  'Preserved the author’s voice',
];

const lineDecisions = [
  'Led with the announcement before explaining the transition',
  'Added context about LightSys and Jeffrey’s role',
  'Strengthened the emotional transition from leaving Germany to embracing a new calling',
  'Clarified ongoing responsibilities and the GEM seconding agreement',
  'Improved sentence flow, readability, and consistency',
];

export default function Portfolio() {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  const projectCards = portfolioProjects.map((project) => ({
    id: `index-${project.id}`,
    eyebrow: `${project.discipline} · ${project.year}`,
    title: project.title,
    body: project.challenge,
    href: `#${project.id}`,
    linkLabel: 'View case study',
  }));

  return (
    <div className="resume-page">
      <section className="page-intro portfolio-intro">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          className="portfolio-intro__heading"
          eyebrow="Portfolio"
          title={(
            <>
              Ideas made clear.
              <span>Complex work made useful.</span>
            </>
          )}
          lead="Selected projects spanning editorial strategy, UX design, technical communication, and front-end implementation—each shaped to help organizations communicate clearly and move their mission forward."
          beforeContext={null}
          afterContext={null}
        />
        <div className="portfolio-jump">
          <p>Jump to a project</p>
          <nav className="jump-nav" aria-label="Portfolio case studies">
            {portfolioProjects.map((project) => (
              <a href={`#${project.id}`} key={project.id}>{project.title}</a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section section--compact" aria-label="Portfolio overview">
        <CardsGrid cards={projectCards} className="portfolio-overview-grid" />
      </section>

      <article className="case-study section" id="grn-map-app">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Product analysis · UX design · front-end prototyping · technical communication · 2026"
          title="GRN Map App Redesign & Front-End Prototype"
          lead="A 34-page stakeholder proposal translated into a working, responsive front-end prototype for a complex language-resource mapping application."
          beforeContext={null}
          afterContext={null}
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
          <div className="comparison-list">
            {grnComparisons.map((comparison) => (
              <article
                className={`comparison-card${comparison.wide ? ' comparison-card--wide' : ''}`}
                id={`comparison-${comparison.title.toLowerCase().replaceAll(' ', '-')}`}
                key={comparison.title}
              >
                <header className="comparison-card__header">
                  <h4>{comparison.title}</h4>
                  <p>{comparison.description}</p>
                </header>
                <div className="comparison-grid">
                  <figure className="comparison-frame comparison-frame--redesign">
                    <figcaption>
                      <span>01</span>
                      <strong>Original redesign</strong>
                    </figcaption>
                    <div className={`comparison-stage${comparison.wide ? ' comparison-stage--wide' : ''}`}>
                      <a href={comparison.redesign}>
                        <img
                          src={comparison.redesign}
                          alt={comparison.redesignAlt}
                          width={comparison.redesignWidth}
                          height={comparison.redesignHeight}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </figure>
                  <figure className="comparison-frame comparison-frame--prototype">
                    <figcaption>
                      <span>02</span>
                      <strong>Working prototype</strong>
                    </figcaption>
                    <div className={`comparison-stage${comparison.wide ? ' comparison-stage--wide' : ''}`}>
                      <a href={comparison.prototype}>
                        <img
                          src={comparison.prototype}
                          alt={comparison.prototypeAlt}
                          width={comparison.prototypeWidth}
                          height={comparison.prototypeHeight}
                          loading="lazy"
                        />
                      </a>
                    </div>
                  </figure>
                </div>
              </article>
            ))}
          </div>
        </section>
        <div className="case-detail">
          <h3>Skills demonstrated</h3>
          <FeatureList items={grnSkills} className="check-list--columns" />
        </div>
      </article>

      <article className="case-study section" id="developmental-editing">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Developmental editing · 2026"
          title="Strengthening Structure & Message"
          lead="Identifying the central theme, restructuring the narrative, adding context, and revising for clarity and impact while preserving the author’s voice."
          beforeContext={null}
          afterContext={null}
        />
        <div className="media-text media-text--prompt">
          <figure className="supporting-visual">
            <img
              src="/images/developmental-editing.png"
              alt=""
            />
            <figcaption>Decorative editorial artwork</figcaption>
          </figure>
          <div className="standard-copy">
            <h3>Editorial approach</h3>
            <p>
              The original newsletter draft moved among a practical Code-a-Thon announcement, a reflection on
              humility, and an update about returning to the United States. The published version connected the
              material around one central narrative and gave readers clearer context and an invitation to participate.
            </p>
          </div>
        </div>
        <SplitColumns
          className="editing-comparison"
          columns={[
            {
              eyebrow: 'Selected excerpt',
              title: 'Original draft',
              paragraphs: [
                '“We are gearing up for a busy spring. We will be hosting Code-A-Thon students soon. We will have over 50 students from various universities coming to Colorado to work on coding projects for various mission organizations.”',
              ],
            },
            {
              eyebrow: 'Selected excerpt',
              title: 'Published version',
              paragraphs: [
                '“We’re gearing up for a busy spring. Code-a-Thon season is just a few weeks away, and we’re getting ready to host college students and young professionals for the whole month of March.”',
              ],
            },
          ]}
        />
        <div className="case-detail">
          <h3>Editorial decisions</h3>
          <FeatureList items={developmentalDecisions} className="check-list--columns" />
        </div>
      </article>

      <article className="case-study section" id="line-editing">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Line editing · 2025"
          title="Improving Clarity & Readability"
          lead="Line editing focused on grammar, clarity, readability, flow, and consistency while preserving the writer’s voice and intended message."
          beforeContext={null}
          afterContext={null}
        />
        <SplitColumns
          className="editing-comparison"
          columns={[
            {
              eyebrow: 'Selected excerpt',
              title: 'Original rough draft',
              paragraphs: [
                '“We have big news! Jeff will be serving with a ministry called LightSys. It’s similar to eDOT. The difference is that instead of serving Europe based ministries. He will serve mission organizations globally from Colorado.”',
              ],
            },
            {
              eyebrow: 'Selected excerpt',
              title: 'Published version',
              paragraphs: [
                '“We have big news! Jeff has accepted a position with a different ministry and will begin serving with LightSys this coming September. This small ministry is similar to eDOT… However, instead of serving only Europe-based ministries, he will support global ministries from their offices in Colorado Springs.”',
              ],
            },
          ]}
        />
        <div className="case-detail">
          <h3>Editorial decisions</h3>
          <FeatureList items={lineDecisions} className="check-list--columns" />
        </div>
      </article>

      <article className="case-study section" id="c2c-story">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Strategic communications · 2019"
          title="C2C Story"
          lead="Concept development, UX design, website copy, scriptwriting, storyboarding, animation, and video production for a mobile application launch."
          beforeContext={null}
          afterContext={null}
        />
        <div className="media-text">
          <div className="standard-copy">
            <h3>Campaign approach</h3>
            <p>
              The campaign identified a common barrier to starting a meaningful conversation, introduced the
              application as a practical visual aid, used humor to build rapport, and closed with a clear download
              action.
            </p>
            <blockquote>
              “Could I show you a story that changed my life?”
            </blockquote>
            <h3>Communication goals</h3>
            <FeatureList
              items={[
                'Identify a common barrier to sharing the Gospel',
                'Introduce the app as a practical solution',
                'Use humor to build rapport before presenting the product',
                'Encourage immediate action through a clear call to download the app',
              ]}
            />
          </div>
          <figure className="supporting-visual">
            <img
              src="/images/c2c-story.png"
              alt=""
            />
            <figcaption>Decorative visual-storytelling artwork</figcaption>
          </figure>
        </div>
      </article>
    </div>
  );
}
