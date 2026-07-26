import React, { useState } from 'react';

export default function FaqAccordion({ items = [], initialOpenIndex = null }) {
  const [openIndex, setOpenIndex] = useState(initialOpenIndex);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="experience-accordion">
      <div className="faq-accordion__items">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={item.title} className={`faq-accordion__item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-accordion__trigger"
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
              >
                <span>
                  <strong>{item.title}</strong>
                  {item.meta && <small>{item.meta}</small>}
                </span>
                <span className="faq-accordion__icon" aria-hidden="true">
                  {isOpen ? '-' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-accordion__content">
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
