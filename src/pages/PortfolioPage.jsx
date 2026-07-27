import CardsGrid from '../components/layouts/CardsGrid';
import HeadingDisplay from '../components/layouts/HeadingDisplay';
import C2CCaseStudy from '../features/portfolio/C2CCaseStudy';
import EditingCaseStudy from '../features/portfolio/EditingCaseStudy';
import GrnCaseStudy from '../features/portfolio/GrnCaseStudy';
import { editingProjects, portfolioProjects } from '../content/portfolio';

export default function PortfolioPage() {
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
          className="portfolio-intro__heading"
          eyebrow="Portfolio"
          title={(
            <>
              Ideas made clear.
              <span>Complex work made useful.</span>
            </>
          )}
          lead="Selected projects spanning editorial strategy, UX design, technical communication, and front-end implementation—each shaped to help organizations communicate clearly and move their mission forward."
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

      <GrnCaseStudy />
      <EditingCaseStudy project={editingProjects.developmental} />
      <EditingCaseStudy project={editingProjects.line} />
      <C2CCaseStudy />
    </div>
  );
}
