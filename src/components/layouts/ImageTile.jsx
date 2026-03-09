import React from 'react';

export default function ImageTile({ item, className = '' }) {
  const hasLink = Boolean(item.href);
  const hasCornerText = Boolean(item.cornerText);
  const baseClass = `image-tile ${hasLink ? 'is-link' : 'is-static'} ${className}`.trim();

  if (hasLink) {
    return (
      <a className={baseClass} href={item.href} aria-label={item.alt || 'Image link'}>
        <img src={item.src} alt={item.alt || ''} loading="lazy" />
        {hasCornerText && <span className="image-tile__corner">{item.cornerText}</span>}
      </a>
    );
  }

  return (
    <div className={baseClass}>
      <img src={item.src} alt={item.alt || ''} loading="lazy" />
      {hasCornerText && <span className="image-tile__corner">{item.cornerText}</span>}
    </div>
  );
}
