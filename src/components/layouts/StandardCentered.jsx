import React from 'react';

export default function StandardCentered({ headerStyle, bodyStyle }) {
  return (
    <section className="centered-preview">
      <h3 style={headerStyle}>Consulting Built for Practical Outcomes</h3>
      <p className="sample-intro" style={bodyStyle}>
        Use this centered layout for mission statements, value propositions, and concise brand messages.
      </p>
      <p style={bodyStyle}>
        I partner with founders and small teams to sharpen positioning, simplify site architecture, and increase
        qualified inbound leads.
      </p>
      <p style={bodyStyle}>
        Every recommendation is tied to measurable outcomes: better clarity, stronger conversion paths, and less
        wasted effort.
      </p>
    </section>
  );
}
