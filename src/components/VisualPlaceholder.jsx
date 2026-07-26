import React from 'react';

export default function VisualPlaceholder({
  label = 'Image placeholder',
  prompt,
  square = false,
  compact = false,
}) {
  return (
    <aside
      className={`visual-placeholder ${square ? 'visual-placeholder--square' : ''} ${compact ? 'visual-placeholder--compact' : ''}`.trim()}
      aria-label={label}
    >
      <span className="visual-placeholder__label">{label}</span>
      {prompt && <p>{prompt}</p>}
    </aside>
  );
}
