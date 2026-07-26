import React from 'react';
import HeroFullWidth from './layouts/HeroFullWidth';
import HeadingSection from './layouts/HeadingSection';
import { competencyGroups, contact, imagePrompts, portfolioProjects, professionalSummary, proofPoints, resumePdfPath } from '../data/resumeContent';

const Home = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="resume-page home-page">
      <div className="full-bleed">
        <HeroFullWidth
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          promptText={imagePrompts.hero}
          regions={{
            eyebrow: contact.location,
            headline: contact.name,
            descriptor: 'Editorial, Communications & Digital Product Professional',
            body: professionalSummary,
            micro: 'Open to opportunities in Colorado Springs and to remote and hybrid positions.',
          }}
          actions={[
            { label: 'View Portfolio', href: '/portfolio' },
            { label: 'Download CV', href: resumePdfPath },
          ]}
        />
      </div>

      <section className="section section--centered through-line">
        <p className="eyebrow">A consistent thread across varied roles</p>
        <h2>Bringing clarity to complexity</h2>
        <p className="statement">
          Helping organizations communicate more clearly, work more effectively, and turn ideas into reality.
        </p>
        <p>
          That work has included software, websites, documentation, educational content, publishing projects,
          communications, mentoring, and user experiences.
        </p>
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Core competencies"
          title="Editorial judgment, technical fluency, practical leadership"
          lead="Three connected areas of experience support work from first idea through publication, launch, and ongoing improvement."
          beforeContext={null}
          afterContext={null}
        />
        <div className="content-card-grid content-card-grid--three">
          {competencyGroups.map((group) => (
            <article className="content-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="check-list">
                {group.items.slice(0, 6).map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Selected work"
          title="Complex information, made usable"
          lead="The portfolio spans product analysis, UX design, technical communication, editorial work, and strategic communications."
          beforeContext={null}
          afterContext={null}
        />
        <article className="featured-case">
          <div>
            <p className="eyebrow">Featured project · 2026</p>
            <h3>GRN Map App Redesign Proposal</h3>
            <p>
              Following an all-day stakeholder meeting, I synthesized feedback into a 34-page product
              analysis and redesign proposal for a complex language-resource mapping application.
            </p>
            <ul className="check-list">
              <li>Reorganized the information architecture</li>
              <li>Consolidated competing search behavior</li>
              <li>Created mobile and desktop mockups</li>
              <li>Documented interactions, technical considerations, and edge cases</li>
            </ul>
            <a className="text-link" href="/portfolio#grn-map-app">Read the case study <span aria-hidden="true">→</span></a>
          </div>
          <figure className="project-figure">
            <img
              src="/portfolio/grn/default-home-screen.png"
              alt="GRN Map App proposed mobile default home screen with explanatory notes"
            />
            <figcaption>Proposal mockup · Default Home Screen</figcaption>
          </figure>
        </article>
        <div className="project-link-grid">
          {portfolioProjects.slice(1).map((project) => (
            <a href={`/portfolio#${project.id}`} key={project.id}>
              <span>{project.discipline}</span>
              <strong>{project.title}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Evidence at a glance"
          title="Experience measured in real work"
          lead="Each proof point comes directly from the current CV."
          beforeContext={null}
          afterContext={null}
        />
        <ul className="proof-grid">
          {proofPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="section closing-panel">
        <p className="eyebrow">Next step</p>
        <h2>Looking for someone who can bring clarity to complex work?</h2>
        <p>Review the complete CV or get in touch to discuss how this experience could contribute to your organization.</p>
        <div className="button-row">
          <a className="button-link button-link--primary" href="/cv-contact">View CV & Contact</a>
          <a className="button-link button-link--secondary" href={contact.emailHref}>Email Jeffrey</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
