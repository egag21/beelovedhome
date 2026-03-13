import React from 'react';
import LayoutOptionHeading from './LayoutOptionHeading';

export default function SplitColumns({ headerStyle, bodyStyle }) {
  return (
    <section>
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="When Split Columns Work Best"
        intro="Great for comparing two ideas: problem vs solution, current state vs future state, or service tiers."
      />
      <div className="split-columns">
        <div className="split-columns__panel">
          <h4 style={headerStyle}>Before Engagement</h4>
          <ul className="split-columns__list" style={bodyStyle}>
            <li>Website messaging is broad and unclear</li>
            <li>Traffic arrives but inquiries are inconsistent</li>
            <li>Internal teams disagree on priorities</li>
          </ul>
        </div>
        <div className="split-columns__panel">
          <h4 style={headerStyle}>After Engagement</h4>
          <ul className="split-columns__list" style={bodyStyle}>
            <li>Positioning is focused on your ideal buyer</li>
            <li>Service pages guide visitors to action</li>
            <li>Roadmap aligns content, design, and delivery</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
