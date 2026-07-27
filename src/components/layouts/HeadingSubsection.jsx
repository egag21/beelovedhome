import React from 'react';

export default function HeadingSubsection({
  headerStyle,
  bodyStyle,
  className = '',
  eyebrow = null,
  title = null,
  lead = null,
  beforeContext = null,
  afterContext = null,
}) {
  const isTitleOnly = !lead;

  return (
    <section className={`heading-layout heading-layout--subsection ${isTitleOnly ? 'heading-layout--title-only' : ''} ${className}`.trim()}>
      {eyebrow && <p className="heading-layout__eyebrow" style={bodyStyle}>{eyebrow}</p>}
      {title && <h3 className="heading-layout__title" style={headerStyle}>{title}</h3>}
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
