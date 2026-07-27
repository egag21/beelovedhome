import { Link } from 'react-router-dom';
import HeadingSection from '../components/layouts/HeadingSection';
import EditorialPortfolioHero from '../components/site/EditorialPortfolioHero';
import { contact, professionalSummary, resumePdfPath } from '../content/site';
import { competencyGroups, proofPoints } from '../content/resume';
import { portfolioProjects } from '../content/portfolio';

export default function HomePage() {
  return (
    <div className="resume-page home-page">
      <div className="full-bleed">
        <EditorialPortfolioHero
          eyebrow={contact.location}
          headline={contact.name}
          descriptor="Editorial, Communications & Digital Product Professional"
          body={professionalSummary}
          micro="Open to opportunities in Colorado Springs and to remote and hybrid positions."
          imageSrc="/images/optimized/hero-960.jpg"
          imageSrcSet="/images/optimized/hero-960.jpg 960w, /images/optimized/hero-1600.jpg 1600w"
          imageAlt=""
          actions={[
            { label: 'View Portfolio', href: '/portfolio' },
            { label: 'Download CV', href: resumePdfPath, target: '_blank' },
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
          eyebrow="Core competencies"
          title="Editorial judgment, technical fluency, practical leadership"
          lead="Three connected areas of experience support work from first idea through publication, launch, and ongoing improvement."
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
          eyebrow="Selected work"
          title="Complex information, made usable"
          lead="The portfolio spans product analysis, UX design, technical communication, editorial work, and strategic communications."
        />
        <article className="featured-case">
          <div>
            <p className="eyebrow">Featured project · 2026</p>
            <h3>GRN Map App Redesign & Front-End Prototype</h3>
            <p>
              Following an all-day stakeholder meeting, I synthesized feedback into a 34-page product
              analysis and redesign proposal, then independently implemented the responsive prototype
              front end.
            </p>
            <ul className="check-list">
              <li>Reorganized the information architecture</li>
              <li>Consolidated competing search behavior</li>
              <li>Designed the mobile and desktop experiences</li>
              <li>Implemented the complete responsive front end</li>
              <li>Collaborated with a backend developer on data integration</li>
              <li>Documented interactions, technical considerations, and edge cases</li>
            </ul>
            <Link className="text-link" to="/portfolio#grn-map-app">
              Read the case study <span aria-hidden="true">→</span>
            </Link>
          </div>
          <figure className="project-figure project-figure--featured">
            <img
              src="/portfolio/grn/previews/prototype-default-480.png"
              alt="GRN Map App mobile front-end prototype showing the default map home screen"
              width="1179"
              height="2556"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Front-end prototype · Default Home Screen</figcaption>
          </figure>
        </article>
        <div className="project-link-grid">
          {portfolioProjects.slice(1).map((project) => (
            <Link to={`/portfolio#${project.id}`} key={project.id}>
              <span>{project.discipline}</span>
              <strong>{project.title}</strong>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <HeadingSection
          eyebrow="Evidence at a glance"
          title="Experience measured in real work"
          lead="A few measures of the scope, longevity, and impact of my work."
        />
        <ul className="proof-grid">
          {proofPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="section closing-panel">
        <p className="eyebrow">Next step</p>
        <h2>Looking for someone who can bring clarity to complex work?</h2>
        <p>Explore the full breadth of my experience or get in touch to discuss how I could contribute to your organization.</p>
        <div className="button-row">
          <Link className="button-link button-link--primary" to="/cv-contact">View CV & Contact</Link>
          <a className="button-link button-link--secondary" href={contact.emailHref}>Email Jeffrey</a>
        </div>
      </section>
    </div>
  );
}
