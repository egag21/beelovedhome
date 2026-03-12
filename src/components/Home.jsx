import React from 'react';
import HeroBanner from './layouts/HeroBanner';
import Standard from './layouts/Standard';
import HeadingSection from './layouts/HeadingSection';
import HeadingSubsection from './layouts/HeadingSubsection';
import HeadingDetail from './layouts/HeadingDetail';
import HeadingMicro from './layouts/HeadingMicro';
import './WorkInProgress.css';

const Home = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="page-content">
      <section className="sample-text layout-9">
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

      <section className="sample-text layout-19" style={{ marginTop: '1rem' }}>
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Core Promise"
          title="Practical Strategy for Sites That Need Better Leads"
          lead="Most websites underperform because the message, page structure, and next-step path are out of sync. I align all three so qualified prospects know exactly why to contact you."
          beforeContext={null}
          afterContext="What follows is the baseline approach I use to turn that strategy into action."
        />
      </section>

      <section className="sample-text layout-12" style={{ marginTop: '1rem' }}>
        <Standard headerStyle={headerStyle} bodyStyle={bodyStyle} />
      </section>

      <section className="sample-text layout-20" style={{ marginTop: '1rem' }}>
        <HeadingSubsection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="What To Expect"
          title="Engagements Are Structured for Fast Momentum"
          lead="You receive clear priorities, documented decisions, and implementation-ready guidance so your team can execute without guesswork."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text layout-21" style={{ marginTop: '1rem' }}>
        <HeadingDetail
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Implementation Detail"
          title="Priority Order Matters More Than Volume"
          lead="Most teams improve outcomes fastest by fixing homepage message clarity, service-page flow, and CTA intent in sequence."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text layout-22" style={{ marginTop: '1rem' }}>
        <HeadingMicro
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Quick Note"
          title="Measure Lead Quality, Not Just Form Volume"
          lead="Better positioning usually reduces low-fit inquiries while improving close-ready conversations."
          beforeContext={null}
          afterContext={null}
        />
      </section>
    </div>
  );
};

export default Home;
