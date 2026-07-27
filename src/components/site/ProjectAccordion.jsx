import { useId, useState } from 'react';
import HeadingSection from '../layouts/HeadingSection';

export default function ProjectAccordion({
  id,
  accentClass,
  heading,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const baseId = useId().replaceAll(':', '');
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;
  const titleId = `${baseId}-title`;

  return (
    <article
      className={`case-study project-accordion section project-accent ${accentClass} ${isOpen ? 'is-open' : ''}`}
      id={id}
    >
      <div className="project-accordion__header">
        <HeadingSection {...heading} titleId={titleId} />
        <button
          type="button"
          className="project-accordion__trigger"
          id={triggerId}
          aria-controls={panelId}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? 'Close' : 'View'} case study: ${heading.title}`}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="project-accordion__affordance" aria-hidden="true">
            <span>{isOpen ? 'Close' : 'View project'}</span>
            <svg viewBox="0 0 20 20" focusable="false">
              <path d="m5 7.5 5 5 5-5" />
            </svg>
          </span>
        </button>
      </div>
      {isOpen && (
        <div
          className="project-accordion__panel"
          id={panelId}
          role="region"
          aria-labelledby={titleId}
        >
          {children}
        </div>
      )}
    </article>
  );
}
