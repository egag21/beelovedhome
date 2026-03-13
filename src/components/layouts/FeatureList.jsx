import React from 'react';
import LayoutOptionHeading from './LayoutOptionHeading';

export default function FeatureList({ headerStyle, bodyStyle }) {
  return (
    <section>
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="What You Get"
        intro="Feature lists work best when visitors need a fast understanding of deliverables."
      />
      <ul className="feature-list" style={bodyStyle}>
        <li><strong>Positioning Clarity</strong> — messaging tailored to your best-fit client</li>
        <li><strong>Conversion Structure</strong> — page flow designed for qualified inquiries</li>
        <li><strong>Actionable Roadmap</strong> — prioritized tasks with immediate next steps</li>
        <li><strong>Decision Support</strong> — strategic guidance before expensive implementation</li>
      </ul>
    </section>
  );
}
