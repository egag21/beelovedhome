import { useEffect, useRef, useState } from 'react';
import HeadingDisplay from '../components/layouts/HeadingDisplay';
import C2CCaseStudy from '../features/portfolio/C2CCaseStudy';
import EditingCaseStudy from '../features/portfolio/EditingCaseStudy';
import GrnCaseStudy from '../features/portfolio/GrnCaseStudy';
import { editingProjects, portfolioProjects } from '../content/portfolio';

export default function PortfolioPage() {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [projectNavStuck, setProjectNavStuck] = useState(false);
  const projectNavRef = useRef(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries.find((entry) => entry.isIntersecting);
        if (activeEntry) setActiveProjectId(activeEntry.target.id);
      },
      {
        rootMargin: '-160px 0px -62% 0px',
        threshold: 0,
      },
    );

    portfolioProjects.forEach((project) => {
      const section = document.getElementById(project.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frameId = null;

    const updateStickyState = () => {
      frameId = null;
      const navTop = projectNavRef.current?.getBoundingClientRect().top;
      setProjectNavStuck(navTop !== undefined && navTop <= 72.5);
    };

    const requestStickyUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateStickyState);
    };

    updateStickyState();
    window.addEventListener('scroll', requestStickyUpdate, { passive: true });
    window.addEventListener('resize', requestStickyUpdate);

    return () => {
      window.removeEventListener('scroll', requestStickyUpdate);
      window.removeEventListener('resize', requestStickyUpdate);
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

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
      </section>

      <div
        className={`portfolio-jump${projectNavStuck ? ' is-stuck' : ''}`}
        ref={projectNavRef}
      >
        <p>Projects</p>
        <nav className="jump-nav" aria-label="Portfolio case studies">
          {portfolioProjects.map((project, index) => (
            <a
              aria-current={activeProjectId === project.id ? 'location' : undefined}
              className={`project-accent project-accent--${project.id}`}
              href={`#${project.id}`}
              key={project.id}
              onClick={() => setActiveProjectId(project.id)}
            >
              <span className="jump-nav__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>{project.shortTitle || project.title}</span>
            </a>
          ))}
        </nav>
      </div>

      <GrnCaseStudy />
      <EditingCaseStudy project={editingProjects.developmental} />
      <EditingCaseStudy project={editingProjects.line} />
      <C2CCaseStudy />
    </div>
  );
}
