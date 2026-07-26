import React from 'react';

export default function Standard({ paragraphs = [], children, className = '' }) {
  return (
    <section className={`standard-copy ${className}`.trim()}>
      {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {children}
    </section>
  );
}
