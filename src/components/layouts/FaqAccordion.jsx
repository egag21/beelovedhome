import React, { useState } from 'react';
import LayoutOptionHeading from './LayoutOptionHeading';

const faqItems = [
  {
    question: 'How long does a typical engagement take?',
    answer:
      'Most projects run 2 to 6 weeks depending on scope, with quick wins usually identified in the first week.',
  },
  {
    question: 'Do you only help with websites?',
    answer:
      'Website strategy is the core, but recommendations also include positioning, messaging, and conversion flow across your funnel.',
  },
  {
    question: 'What if I already have a developer or designer?',
    answer:
      'That is ideal. I provide strategic direction and prioritized actions your existing team can execute immediately.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Start with a discovery call. We align on goals, constraints, and the fastest path to meaningful business outcomes.',
  },
];

export default function FaqAccordion({ headerStyle, bodyStyle }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-accordion">
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="Frequently Asked Questions"
        intro="Use an accordion to address common objections without overwhelming the page."
      />
      <div className="faq-accordion__items">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={item.question} className={`faq-accordion__item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-accordion__trigger"
                aria-expanded={isOpen}
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                <span className="faq-accordion__icon" aria-hidden="true">
                  {isOpen ? '-' : '+'}
                </span>
              </button>
              {isOpen && (
                <div className="faq-accordion__content">
                  <p style={bodyStyle}>{item.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
