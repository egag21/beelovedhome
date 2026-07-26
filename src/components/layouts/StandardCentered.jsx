import React from 'react';

export default function StandardCentered({ eyebrow, title, paragraphs = [], children, className = '' }) {
  return (
    <section className={`standard-copy standard-copy--centered ${className}`.trim()}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {children}
    </section>
  );
}
