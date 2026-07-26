import React from 'react';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import CardsGrid from './layouts/CardsGrid';
import FaqAccordion from './layouts/FaqAccordion';
import SplitColumns from './layouts/SplitColumns';
import StandardCentered from './layouts/StandardCentered';
import { competencyGroups, contact, education, experience, professionalSummary, resumePdfPath } from '../data/resumeContent';

export default function CvContact() {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="resume-page">
      <section className="page-intro cv-intro">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Curriculum vitae"
          title="CV & Contact"
          lead={professionalSummary}
          beforeContext={null}
          afterContext={null}
        />
        <div className="button-row">
          <a className="button-link button-link--primary" href={resumePdfPath}>Download PDF CV</a>
          <a className="button-link button-link--secondary" href={contact.emailHref}>Email Jeffrey</a>
          <a className="button-link button-link--secondary" href={contact.phoneHref}>Call {contact.phone}</a>
        </div>
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Core competencies"
          title="Editorial, leadership, technology, and data"
          lead="The complete competency groups from the current CV."
          beforeContext={null}
          afterContext={null}
        />
        <CardsGrid
          className="content-card-grid--three"
          cards={competencyGroups.map((group) => ({
            title: group.title,
            items: group.items,
          }))}
        />
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Professional experience"
          title="Experience from 1998 to the present"
          lead="Expand each role to read the complete source-backed CV details."
          beforeContext={null}
          afterContext={null}
        />
        <FaqAccordion
          initialOpenIndex={0}
          items={experience.map((role) => ({
            title: `${role.title} · ${role.organization}`,
            meta: [role.location, role.period].filter(Boolean).join(' · '),
            summary: role.summary,
            items: role.bullets,
          }))}
        />
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Education"
          title="Academic background"
          lead={null}
          beforeContext={null}
          afterContext={null}
        />
        <SplitColumns
          columns={education.map((item) => ({
            eyebrow: 'Degree',
            title: item.degree,
            paragraphs: [item.institution],
          }))}
        />
      </section>

      <section className="section contact-panel">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>{contact.name}</h2>
          <address>
            <span>{contact.location}</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
            <a href={contact.emailHref}>{contact.email}</a>
            <span>{contact.website}</span>
          </address>
        </div>
        <div>
          <p className="eyebrow">Direct links</p>
          <div className="contact-actions">
            <a href={contact.emailHref}>Email Jeffrey <span aria-hidden="true">→</span></a>
            <a href={contact.phoneHref}>Call Jeffrey <span aria-hidden="true">→</span></a>
            <a href={resumePdfPath}>Download PDF CV <span aria-hidden="true">→</span></a>
            <a href="/portfolio">View Portfolio <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <StandardCentered
        className="section closing-statement"
        eyebrow="A conversation"
        title="I welcome the opportunity to learn more about your work."
        paragraphs={['I would be glad to discuss how my experience might contribute to your organization.']}
      />
    </div>
  );
}
