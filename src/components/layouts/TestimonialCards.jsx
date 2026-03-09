import React from 'react';

export default function TestimonialCards({ headerStyle, bodyStyle }) {
  return (
    <section>
      <h3 style={headerStyle}>Client Outcomes</h3>
      <p className="sample-intro" style={bodyStyle}>
        Use testimonial cards to validate your claims with short, concrete wins.
      </p>
      <div className="testimonial-grid" style={bodyStyle}>
        <article className="card">
          <strong>"Our inquiries doubled in 60 days."</strong>
          <p>— Founder, Local Services Firm</p>
        </article>
        <article className="card">
          <strong>"Finally a website that explains what we actually do."</strong>
          <p>— Managing Partner, B2B Consultancy</p>
        </article>
        <article className="card">
          <strong>"The roadmap gave our team immediate direction."</strong>
          <p>— Operations Lead, Small Agency</p>
        </article>
      </div>
    </section>
  );
}
