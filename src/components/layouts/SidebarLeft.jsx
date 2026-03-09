import React from 'react';

export default function SidebarLeft({ headerStyle, bodyStyle }) {
  return (
    <section className="sidebar-layout">
      <aside className="sidebar" style={bodyStyle}>
        <h4 style={headerStyle}>Quick Links</h4>
        <ul className="sidebar-links">
          <li>Services</li>
          <li>Process</li>
          <li>Case Studies</li>
          <li>Book a Call</li>
        </ul>
      </aside>
      <div className="main">
        <h3 style={headerStyle}>Use Left Sidebar for Site Navigation + Context</h3>
        <p className="sample-intro" style={bodyStyle}>
          This pattern works well on longer pages where readers need persistent wayfinding.
        </p>
        <p style={bodyStyle}>
          Keep supporting navigation in the sidebar and reserve the main column for persuasive copy, outcomes,
          and proof points.
        </p>
      </div>
    </section>
  );
}
