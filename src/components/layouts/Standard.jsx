import React from 'react';
import LayoutOptionHeading from './LayoutOptionHeading';

export default function Standard({ headerStyle, bodyStyle }) {
  return (
    <section>
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="Strategic Website Consulting for Service Businesses"
        intro="Use this standard left-aligned layout for pages where clarity and trust are the goal."
      />
      <p style={bodyStyle}>
        I help business owners turn confusing websites into focused brochure sites that explain what they do,
        who they help, and what to do next.
      </p>
      <p style={bodyStyle}>
        Engagements typically include messaging refinement, page structure recommendations, and a prioritized
        implementation roadmap your team can execute immediately.
      </p>
      <p style={bodyStyle}>
        If you need a single source of strategic direction before investing in design and development, this
        format communicates that story cleanly.
      </p>
    </section>
  );
}
