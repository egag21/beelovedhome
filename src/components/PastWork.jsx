import React from 'react';
import './WorkInProgress.css';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import HeadingSubsection from './layouts/HeadingSubsection';
import HeadingDetail from './layouts/HeadingDetail';
import HeadingMicro from './layouts/HeadingMicro';

const PastWork = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="page-content">
      <section className="sample-text LO-18-HdngH1">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Selected Work and Strategic Outcomes"
          lead="Examples of consulting engagements where clearer positioning and page architecture improved lead quality, conversion flow, and team execution clarity."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text LO-19-HdngH2" style={{ marginTop: '1rem' }}>
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Three Common Engagement Types"
          lead="Most projects fall into one of these tracks depending on urgency, scope, and internal resourcing."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text LO-20-HdngH3" style={{ marginTop: '1rem' }}>
        <HeadingSubsection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Audit, Sprint, and Ongoing Advisory"
          lead="Audit engagements identify quick wins, strategy sprints define a complete plan, and advisory partnerships support iterative optimization over time."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text LO-21-HdngH4" style={{ marginTop: '1rem' }}>
        <HeadingDetail
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Most Wins Come From Better Message-to-CTA Alignment"
          lead="Projects that clarified offer language and next-step intent saw the fastest quality gains in inbound leads."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text LO-22-HdngH5" style={{ marginTop: '1rem' }}>
        <HeadingMicro
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          title="Case Studies Balance Strategy and Execution Context"
          lead="Each example highlights what changed, why it mattered, and how teams implemented it."
          beforeContext={null}
          afterContext={null}
        />
      </section>
    </div>
  );
};

export default PastWork;
