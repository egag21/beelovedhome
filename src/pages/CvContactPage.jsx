import { Link } from 'react-router-dom';
import CardsGrid from '../components/layouts/CardsGrid';
import HeadingDisplay from '../components/layouts/HeadingDisplay';
import HeadingSection from '../components/layouts/HeadingSection';
import SplitColumns from '../components/layouts/SplitColumns';
import StandardCentered from '../components/layouts/StandardCentered';
import CareerAccordion from '../components/site/CareerAccordion';
import { contact, professionalSummary, resumePdfPath } from '../content/site';
import { competencyGroups, education, experience } from '../content/resume';

export default function CvContactPage() {
  return (
    <div className="resume-page">
      <section className="page-intro cv-intro">
        <HeadingDisplay
          eyebrow="Curriculum vitae"
          title="CV & Contact"
          lead={professionalSummary}
        />
        <div className="button-row">
          <a className="button-link button-link--primary" href={resumePdfPath}>Download PDF CV</a>
          <a className="button-link button-link--secondary" href={contact.emailHref}>Email Jeffrey</a>
          <a className="button-link button-link--secondary" href={contact.phoneHref}>Call {contact.phone}</a>
        </div>
      </section>

      <section className="section">
        <HeadingSection
          eyebrow="Core competencies"
          title="Editorial, leadership, technology, and data"
          lead="A broad skill set spanning editorial leadership, technical communication, product design, and implementation."
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
          eyebrow="Professional experience"
          title="Experience from 1998 to the present"
          lead="Explore the responsibilities, outcomes, and contributions that shaped each role."
        />
        <CareerAccordion
          items={experience.map((role) => ({
            title: `${role.title} · ${role.organization}`,
            meta: role.location ? `${role.location} · ${role.period}` : role.period,
            summary: role.summary,
            items: role.bullets,
          }))}
        />
      </section>

      <section className="section">
        <HeadingSection eyebrow="Education" title="Academic background" />
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
            <Link to="/portfolio">View Portfolio <span aria-hidden="true">→</span></Link>
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
