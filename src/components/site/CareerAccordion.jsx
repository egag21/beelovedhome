import { useId, useState } from 'react';

export default function CareerAccordion({ items = [], initialOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);
  const baseId = useId().replaceAll(':', '');

  return (
    <section className="experience-accordion" aria-label="Professional experience">
      <div className="faq-accordion__items">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const triggerId = `${baseId}-trigger-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <article key={item.title} className={`faq-accordion__item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-accordion__trigger"
                id={triggerId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>
                  <strong>{item.title}</strong>
                  {item.meta && <small>{item.meta}</small>}
                </span>
                <span className="faq-accordion__icon" aria-hidden="true">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
              {isOpen && (
                <div
                  className="faq-accordion__content"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                >
                  {item.summary && <p>{item.summary}</p>}
                  {item.items && (
                    <ul className="check-list">
                      {item.items.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
