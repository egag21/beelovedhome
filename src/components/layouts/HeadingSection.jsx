import React from 'react';

export default function HeadingSection({
  headerStyle,
  bodyStyle,
  className = '',
  eyebrow = null,
  title = 'What We Improve in Your Site Architecture',
  lead = 'Use this as a robust H2 between major layout blocks. It gives enough structure for readers scanning long pages without overwhelming adjacent sections.',
  beforeContext = 'Typical content before: testimonial cards, feature grid, or proof points.',
  afterContext = 'Typical content after: bullets, comparison table, FAQ, or scoped call to action.',
}) {
  const isTitleOnly = !lead;

  return (
    <section className={`heading-layout heading-layout--section ${isTitleOnly ? 'heading-layout--title-only' : ''} ${className}`.trim()}>
      {eyebrow && <p className="heading-layout__eyebrow" style={bodyStyle}>{eyebrow}</p>}
      {title && <h2 className="heading-layout__title" style={headerStyle}>{title}</h2>}
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
