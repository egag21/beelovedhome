import React from 'react';

export default function HeadingDisplay({
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
    <section className={`heading-layout heading-layout--display ${isTitleOnly ? 'heading-layout--title-only' : ''} ${className}`.trim()}>
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
