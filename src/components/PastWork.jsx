import React from 'react';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import CardsGrid from './layouts/CardsGrid';
import FeatureList from './layouts/FeatureList';
import SplitColumns from './layouts/SplitColumns';
import VisualPlaceholder from './VisualPlaceholder';
import { imagePrompts, portfolioProjects } from '../data/resumeContent';

const grnSkills = [
  'Stakeholder collaboration',
  'Content strategy',
  'Information architecture',
  'UX writing',
  'Functional documentation',
  'Mobile-first design',
  'Communication of complex technical concepts',
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
      <section className="page-intro">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Portfolio"
          title="Selected Work"
          lead="Each sample reflects a common goal: helping organizations communicate clearly, engage their audiences, and advance their mission."
          beforeContext={null}
          afterContext={null}
        />
        <nav className="jump-nav" aria-label="Portfolio case studies">
          {portfolioProjects.map((project) => (
            <a href={`#${project.id}`} key={project.id}>{project.title}</a>
          ))}
        </nav>
      </section>

      <section className="section section--compact" aria-label="Portfolio overview">
        <CardsGrid cards={projectCards} className="content-card-grid--two" />
      </section>

      <article className="case-study section" id="grn-map-app">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Product analysis · UX design · technical communication · 2026"
          title="GRN Map App Redesign Proposal"
          lead="A 34-page stakeholder proposal for improving a complex language-resource mapping application across mobile and desktop."
          beforeContext={null}
          afterContext={null}
        />
        <div className="case-summary-grid">
          <div className="standard-copy">
            <h3>The challenge</h3>
            <p>
              The existing application contained extensive language-resource data but was difficult to use on
              smaller screens and divided important functions across competing workflows.
            </p>
            <h3>The contribution</h3>
            <p>
              Following an all-day stakeholder meeting, I synthesized feedback, established design priorities,
              reorganized the information architecture, consolidated search behavior, created mobile and desktop
              mockups, and documented interaction requirements, technical considerations, and edge cases.
            </p>
            <p className="proposal-note">
              These images represent a proposal for potential changes, not a shipped-product claim.
            </p>
          </div>
          <figure className="project-figure project-figure--large">
            <a href="/portfolio/grn/default-home-screen.png">
              <img
                src="/portfolio/grn/default-home-screen.png"
                alt="GRN Map App proposed mobile default home screen with explanatory notes"
              />
            </a>
            <figcaption>Proposal mockup · Default Home Screen · source portfolio excerpt</figcaption>
          </figure>
        </div>
        <div className="artifact-grid">
          {[
            ['Information, Multi Data', '/portfolio/grn/information-multi-data.png'],
            ['Search, Universal', '/portfolio/grn/search-universal.png'],
            ['Large Screen Search Results', '/portfolio/grn/large-screen-search-results.png'],
          ].map(([title, src]) => (
            <figure className="project-figure" key={title}>
              <a href={src}>
                <img src={src} alt={`GRN Map App proposal excerpt: ${title}`} />
              </a>
              <figcaption>Proposal mockup · {title}</figcaption>
            </figure>
          ))}
        </div>
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
          <VisualPlaceholder
            label="AI image prompt placeholder · decorative"
            prompt={imagePrompts.developmentalEditing}
          />
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
          <VisualPlaceholder
            label="AI image prompt placeholder · decorative"
            prompt={imagePrompts.c2c}
          />
        </div>
      </article>
    </div>
  );
}
