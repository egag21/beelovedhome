import React from 'react';

export default function HeadingMicro({
  headerStyle,
  bodyStyle,
  className = '',
  eyebrow = null,
  title = 'Quick Context Before Details',
  lead = 'Use this H5-style block for compact transitions when a full subsection heading would be too heavy.',
  beforeContext = 'Typical content before: a detail heading or short explanatory paragraph.',
  afterContext = 'Typical content after: FAQs, compact notes, or small supporting lists.',
}) {
  const isTitleOnly = !lead;

  return (
    <section className={`heading-layout heading-layout--micro ${isTitleOnly ? 'heading-layout--title-only' : ''} ${className}`.trim()}>
      {eyebrow && <p className="heading-layout__eyebrow" style={bodyStyle}>{eyebrow}</p>}
      {title && <h5 className="heading-layout__title" style={headerStyle}>{title}</h5>}
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
