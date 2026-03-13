import React from 'react';
import LayoutOptionHeading from './LayoutOptionHeading';

export default function CardsGrid({ headerStyle, bodyStyle }) {
  return (
    <section className="cards-grid">
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="Consulting Service Packages"
        intro="Use cards to present offers with clear scope, timelines, and outcomes so visitors can choose a starting point quickly."
      />

      <div className="cards-grid__items">
        <article className="cards-grid__card">
          <p className="cards-grid__badge">Most Common Start</p>
          <h4 style={headerStyle}>Website + Messaging Audit</h4>
          <p style={bodyStyle}>A focused review of positioning, structure, and calls-to-action.</p>
          <ul className="cards-grid__list" style={bodyStyle}>
            <li>60-minute strategy call</li>
            <li>Prioritized action plan</li>
            <li>7-day follow-up support</li>
          </ul>
          <p className="cards-grid__meta" style={bodyStyle}>Timeline: 1 week</p>
        </article>

        <article className="cards-grid__card">
          <h4 style={headerStyle}>Conversion-Focused Brochure Site</h4>
          <p style={bodyStyle}>Design and build a clear, credible site that drives qualified inquiries.</p>
          <ul className="cards-grid__list" style={bodyStyle}>
            <li>Homepage + core service pages</li>
            <li>Lead capture and contact flow</li>
            <li>Analytics + SEO baseline setup</li>
          </ul>
          <p className="cards-grid__meta" style={bodyStyle}>Timeline: 2 to 4 weeks</p>
        </article>

        <article className="cards-grid__card">
          <h4 style={headerStyle}>Monthly Advisory Retainer</h4>
          <p style={bodyStyle}>Ongoing strategic guidance to improve content, messaging, and performance.</p>
          <ul className="cards-grid__list" style={bodyStyle}>
            <li>Biweekly planning sessions</li>
            <li>Page and funnel improvements</li>
            <li>Priority async support</li>
          </ul>
          <p className="cards-grid__meta" style={bodyStyle}>Best for growth-stage teams</p>
        </article>

        <article className="cards-grid__card cards-grid__card--cta">
          <h4 style={headerStyle}>Not Sure Which Option Fits?</h4>
          <p style={bodyStyle}>Start with a short discovery call and leave with a recommended roadmap.</p>
          <button className="font-btn" style={{ width: 'auto', marginTop: '0.5rem' }}>
            Book a Discovery Call
          </button>
        </article>
      </div>
    </section>
  );
}
