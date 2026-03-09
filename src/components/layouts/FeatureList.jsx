import React from 'react';

export default function FeatureList({ headerStyle, bodyStyle }) {
  return (
    <section>
      <h3 style={headerStyle}>What You Get</h3>
      <p className="sample-intro" style={bodyStyle}>
        Feature lists work best when visitors need a fast understanding of deliverables.
      </p>
      <ul className="feature-list" style={bodyStyle}>
        <li><strong>Positioning Clarity</strong> — messaging tailored to your best-fit client</li>
        <li><strong>Conversion Structure</strong> — page flow designed for qualified inquiries</li>
        <li><strong>Actionable Roadmap</strong> — prioritized tasks with immediate next steps</li>
        <li><strong>Decision Support</strong> — strategic guidance before expensive implementation</li>
      </ul>
    </section>
  );
}
