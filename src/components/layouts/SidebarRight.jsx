import React from 'react';
import LayoutOptionHeading from './LayoutOptionHeading';

export default function SidebarRight({ headerStyle, bodyStyle }) {
  return (
    <section className="sidebar-layout">
      <div className="main">
        <LayoutOptionHeading
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Use Right Sidebar for Supporting Proof"
          intro="Keep the narrative uninterrupted while placing proof items beside it."
        />
        <p style={bodyStyle}>
          This layout is effective for service descriptions where you want trust indicators visible without
          breaking the reading flow.
        </p>
      </div>
      <aside className="sidebar" style={bodyStyle}>
        <h4 style={headerStyle}>At a Glance</h4>
        <ul className="sidebar-links">
          <li>20+ years experience</li>
          <li>Cross-industry consulting</li>
          <li>Transparent engagement model</li>
          <li>Fast implementation cycles</li>
        </ul>
      </aside>
    </section>
  );
}
