import React, { useState } from 'react';
import './Services.css';
import './WorkInProgress.css';
import HeroBanner from './layouts/HeroBanner';
import HeadingSection from './layouts/HeadingSection';
import HeadingSubsection from './layouts/HeadingSubsection';
import HeadingDetail from './layouts/HeadingDetail';
import HeadingMicro from './layouts/HeadingMicro';

const faqs = [
  {
    question: 'What type of businesses do you work with?',
    answer: 'I work primarily with service businesses and consultancies that need clearer messaging and stronger lead conversion from their website.',
  },
  {
    question: 'How fast can we start seeing results?',
    answer: 'Most clients see early clarity and actionable improvements in the first week, with stronger conversion gains typically following after implementation.',
  },
  {
    question: 'Can you collaborate with our existing designer or developer?',
    answer: 'Yes. Engagements are designed to fit into your current team so strategy translates directly into execution.',
  },
  {
    question: 'Do you offer one-time projects and ongoing support?',
    answer: 'Yes. You can start with a focused strategy sprint and then continue with monthly advisory support as needed.',
  },
];

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="page-content services-page">
      <section className="services-page__hero sample-text LO-09-HeroBnnr">
        <HeroBanner
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          ctaUrl="/contact"
          regions={{
            headline: 'Turn Your Website Into a Qualified-Lead Engine',
            body: 'Strategic consulting for service businesses that need clearer messaging and stronger conversion paths.',
            cta: { label: 'Schedule a Strategy Call' },
          }}
        />
      </section>

      <section className="services-page__section sample-text LO-01-StndCnt">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Clarity, Confidence, and Consistent Inquiries"
          lead="Your website should make it obvious what you do, who you help, and why clients should trust you. My consulting process turns scattered ideas into a focused online presence that supports growth."
          beforeContext={null}
          afterContext="From here, we break down your current friction points and target outcomes."
        />
      </section>

      <section className="services-page__section sample-text LO-02-SpltClmn">
        <HeadingSubsection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="How We Improve Your Online Presence"
          lead="Each engagement starts by mapping current friction against measurable business goals."
          beforeContext={null}
          afterContext={null}
        />
        <HeadingDetail
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Where We Usually Find Friction First"
          lead="These two lenses quickly identify whether your messaging problem is strategic, structural, or both."
          beforeContext={null}
          afterContext={null}
        />
        <div className="split-columns">
          <div className="split-columns__panel">
            <h4 style={headerStyle}>Current Challenges</h4>
            <ul className="split-columns__list" style={bodyStyle}>
              <li>Visitors are not sure what makes your offer different</li>
              <li>Pages are content-heavy but conversion-light</li>
              <li>Internal teams spend time without clear priorities</li>
            </ul>
          </div>
          <div className="split-columns__panel">
            <h4 style={headerStyle}>Target Outcomes</h4>
            <ul className="split-columns__list" style={bodyStyle}>
              <li>Sharper positioning for your ideal buyer</li>
              <li>Pages designed for clear next-step actions</li>
              <li>Roadmap aligned with practical execution</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="services-page__section sample-text LO-04-CrdsGrid">
        <div className="cards-grid">
          <h2 style={headerStyle}>Ways We Can Work Together</h2>
          <div className="cards-grid__items">
            <article className="cards-grid__card">
              <p className="cards-grid__badge">Quick Start</p>
              <h4 style={headerStyle}>Website + Messaging Audit</h4>
              <p style={bodyStyle}>A focused review with prioritized recommendations you can act on immediately.</p>
              <p className="cards-grid__meta" style={bodyStyle}>Typical timeline: 1 week</p>
            </article>
            <article className="cards-grid__card">
              <h4 style={headerStyle}>Strategy Sprint</h4>
              <p style={bodyStyle}>A complete plan for messaging, page structure, and conversion pathways.</p>
              <p className="cards-grid__meta" style={bodyStyle}>Typical timeline: 2 to 4 weeks</p>
            </article>
            <article className="cards-grid__card cards-grid__card--cta">
              <h4 style={headerStyle}>Ongoing Advisory</h4>
              <p style={bodyStyle}>Monthly guidance to keep momentum, optimize pages, and improve performance.</p>
              <p className="cards-grid__meta" style={bodyStyle}>Best for teams in active growth mode</p>
            </article>
          </div>
        </div>
      </section>

      <section className="services-page__section sample-text LO-12-Stndrd">
        <h2 style={headerStyle}>What You Receive</h2>
        <ul className="feature-list" style={bodyStyle}>
          <li><strong>Strategic Positioning</strong> tailored to your highest-value audience</li>
          <li><strong>Conversion-Focused Structure</strong> for core service pages and calls to action</li>
          <li><strong>Implementation Roadmap</strong> with prioritized next steps</li>
          <li><strong>Decision Support</strong> that helps you invest in the right improvements first</li>
        </ul>
      </section>

      <section className="services-page__section sample-text LO-05-SdbrLeft">
        <div className="sidebar-layout">
          <aside className="sidebar" style={bodyStyle}>
            <h4 style={headerStyle}>Focus Areas</h4>
            <ul className="sidebar-links">
              <li>Messaging</li>
              <li>Page Structure</li>
              <li>Lead Flow</li>
              <li>Measurement</li>
            </ul>
          </aside>
          <div className="main">
            <h2 style={headerStyle}>Built Around Business Goals</h2>
            <p style={bodyStyle}>
              Every recommendation is tied to outcomes that matter: stronger lead quality, clearer value
              communication, and less friction between your content and your sales conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="services-page__section sample-text LO-06-SdbrRght">
        <div className="sidebar-layout">
          <div className="main">
            <h2 style={headerStyle}>Execution-Friendly by Design</h2>
            <p style={bodyStyle}>
              You receive strategy in a format your team can use right away, whether implementation happens
              internally or with external partners.
            </p>
          </div>
          <aside className="sidebar" style={bodyStyle}>
            <h4 style={headerStyle}>Deliverables</h4>
            <ul className="sidebar-links">
              <li>Positioning brief</li>
              <li>Page-by-page priorities</li>
              <li>Copy guidance</li>
              <li>Conversion recommendations</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="services-page__section sample-text LO-08-ThrColTb">
        <h2 style={headerStyle}>Project Flow</h2>
        <div className="table-scroll table-scroll--wide">
          <table className="sample-table three-col" style={bodyStyle}>
            <thead>
              <tr><th>Phase</th><th>Goal</th><th>Output</th></tr>
            </thead>
            <tbody>
              <tr><td>Discovery</td><td>Understand goals and constraints</td><td>Strategic brief</td></tr>
              <tr><td>Planning</td><td>Prioritize high-impact changes</td><td>Execution roadmap</td></tr>
              <tr><td>Support</td><td>Refine and optimize in-market</td><td>Iteration plan</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="services-page__section sample-text LO-07-TwoColTb">
        <h2 style={headerStyle}>Investment Snapshot</h2>
        <div className="table-scroll">
          <table className="sample-table" style={bodyStyle}>
            <thead>
              <tr><th>Engagement</th><th>Starting At</th></tr>
            </thead>
            <tbody>
              <tr><td>Audit</td><td>$1,200</td></tr>
              <tr><td>Strategy Sprint</td><td>$2,800</td></tr>
              <tr><td>Monthly Advisory</td><td>Custom</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="services-page__section sample-text LO-10-TstmCrd">
        <h2 style={headerStyle}>What Clients Say</h2>
        <div className="testimonial-grid" style={bodyStyle}>
          <article className="card">
            <strong>"Our site finally sounds like us and converts better."</strong>
            <p>Founder, Professional Services Firm</p>
          </article>
          <article className="card">
            <strong>"The roadmap gave our team immediate direction."</strong>
            <p>Operations Lead, Growth Agency</p>
          </article>
          <article className="card">
            <strong>"Clear, practical recommendations with measurable impact."</strong>
            <p>Managing Partner, Advisory Practice</p>
          </article>
        </div>
      </section>

      <section className="services-page__section sample-text LO-13-FaqAccrd">
        <HeadingSubsection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Frequently Asked Questions"
          lead="These are the most common questions teams ask before starting."
          beforeContext={null}
          afterContext={null}
        />
        <HeadingMicro
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="These Answers Cover Typical Pre-Engagement Questions"
          lead="If your question is not listed, include it in your first message and I will address it directly."
          beforeContext={null}
          afterContext={null}
        />
        <div className="faq-accordion__items">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <article key={item.question} className={`faq-accordion__item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-accordion__trigger"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-accordion__icon" aria-hidden="true">
                    {isOpen ? '-' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="faq-accordion__content">
                    <p style={bodyStyle}>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
