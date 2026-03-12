import React from 'react';

export default function HeadingDisplay({
  headerStyle,
  bodyStyle,
  className = '',
  eyebrow = 'Homepage Hero / First Impression',
  title = 'Strategic Website Consulting That Moves Clients to Action',
  lead = 'This H1-style block is designed for page-open context with enough presence and breathing room to anchor the rest of your section stack.',
  beforeContext = 'Typical content before: top navigation or a compact trust ribbon.',
  afterContext = 'Typical content after: hero body copy, CTA row, or a two-column value proposition.',
}) {
  return (
    <section className={`heading-layout heading-layout--display ${className}`.trim()}>
      {eyebrow && <p className="heading-layout__eyebrow" style={bodyStyle}>{eyebrow}</p>}
      {title && <h1 className="heading-layout__title" style={headerStyle}>{title}</h1>}
      {lead && <p className="heading-layout__lead" style={bodyStyle}>{lead}</p>}
      {beforeContext && (
        <p className="heading-layout__context heading-layout__context--before" style={bodyStyle}>
          {beforeContext}
        </p>
      )}
      {afterContext && (
        <p className="heading-layout__context heading-layout__context--after" style={bodyStyle}>
          {afterContext}
        </p>
      )}
    </section>
  );
}
