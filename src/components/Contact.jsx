import React from 'react';
import './WorkInProgress.css';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import HeadingSubsection from './layouts/HeadingSubsection';
import HeadingDetail from './layouts/HeadingDetail';
import HeadingMicro from './layouts/HeadingMicro';

const Contact = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="page-content">
      <section className="sample-text layout-18">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Contact"
          title="Start With a Focused Strategy Conversation"
          lead="If your website is not clearly communicating value or generating the right inquiries, we can map practical next steps in a single call."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text layout-19" style={{ marginTop: '1rem' }}>
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Reach Out"
          title="Best Way To Connect"
          lead="Use email for project details and timelines, or connect on LinkedIn if you prefer to start with a quick message."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text layout-20" style={{ marginTop: '1rem' }}>
        <HeadingSubsection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Contact Details"
          title="Email, Phone, and LinkedIn"
          lead="Email: jeff@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/jeffgage"
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text layout-21" style={{ marginTop: '1rem' }}>
        <HeadingDetail
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Before Contacting"
          title="Helpful Details to Include in Your Message"
          lead="Share your current goal, where leads are dropping off, and any immediate timeline constraints."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="sample-text layout-22" style={{ marginTop: '1rem' }}>
        <HeadingMicro
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Response Time"
          title="Initial Replies Typically Arrive Within Two Business Days"
          lead="If the project is urgent, mention that in your first note so prioritization is clear."
          beforeContext={null}
          afterContext={null}
        />
      </section>
    </div>
  );
};

export default Contact;
