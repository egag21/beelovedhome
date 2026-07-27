import React from 'react';

export default function CardsGrid({ cards = [], className = '' }) {
  return (
    <div className={`content-card-grid ${className}`.trim()}>
      {cards.map((card) => (
        <article
          className={`content-card ${card.className || ''}`.trim()}
          id={card.id}
          key={card.id || card.title}
        >
          {(card.number || card.badge) && (
            <div className="project-marker-row">
              {card.number && (
                <span className="content-card__number" aria-hidden="true">
                  {card.number}
                </span>
              )}
              {card.badge && <span className="project-featured-label">{card.badge}</span>}
            </div>
          )}
          {card.eyebrow && <p className="eyebrow">{card.eyebrow}</p>}
          <h3>{card.title}</h3>
          {card.body && <p>{card.body}</p>}
          {card.items && (
            <ul className="check-list">
              {card.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          {card.href && (
            <a className="text-link" href={card.href}>
              {card.linkLabel || 'Learn more'} <span aria-hidden="true">→</span>
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
