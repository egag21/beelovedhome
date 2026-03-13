import React from 'react';

export default function CatalogCard({
  headerStyle,
  bodyStyle,
  layoutId = 'LO-23-CtlgCard',
  pattern = 'Catalog Card',
  fit = 'Section-level framing for any content block that needs context before a preview.',
  notes = 'Use concise lines that explain the pattern and why it is relevant in the current page context.',
}) {
  return (
    <article className="catalog-card" style={bodyStyle}>
      <h2 style={headerStyle}>{`Layout ID: ${layoutId}`}</h2>
      <p><strong>Pattern:</strong> {pattern}</p>
      <p><strong>Best fit:</strong> {fit}</p>
      <p><strong>Implementation notes:</strong> {notes}</p>
    </article>
  );
}
