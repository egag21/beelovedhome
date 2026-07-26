import React from 'react';
import VisualPlaceholder from '../VisualPlaceholder';

export default function HeroBanner({
  headerStyle,
  bodyStyle,
  fullWidth = false,
  imageSrc,
  imageAlt = '',
  promptText,
  regions = {},
  actions = [],
}) {
  const headline = regions.headline || '';
  const eyebrow = regions.eyebrow || null;
  const descriptor = regions.descriptor || null;
  const body = regions.body || '';
  const micro = regions.micro || null;

  return (
    <section className={`hero ${fullWidth ? 'hero--fullwidth' : ''} ${imageSrc ? 'hero--with-image' : ''}`}>
      {imageSrc && <img className="hero__img" src={imageSrc} alt={imageAlt} />}
      <div className="hero__content">
        <div className="hero__copy">
          {eyebrow && <p className="hero__eyebrow" style={bodyStyle}>{eyebrow}</p>}
          <h1 className="hero__heading" style={headerStyle}>{headline}</h1>
          {descriptor && <p className="hero__descriptor" style={headerStyle}>{descriptor}</p>}
          <p className="hero__body" style={bodyStyle}>{body}</p>
          <div className="button-row">
            {actions.map((action, index) => (
              <a
                className={`button-link ${index === 0 ? 'button-link--primary' : 'button-link--secondary'}`}
                href={action.href}
                key={`${action.label}-${action.href}`}
              >
                {action.label}
              </a>
            ))}
          </div>
          {micro && <p className="hero__micro" style={bodyStyle}>{micro}</p>}
        </div>
        {promptText && (
          <VisualPlaceholder
            label="AI hero image prompt placeholder"
            prompt={promptText}
            compact
          />
        )}
      </div>
    </section>
  );
}
