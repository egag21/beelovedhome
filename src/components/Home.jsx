import React from 'react';
import HeroBanner from './layouts/HeroBanner';
import Standard from './layouts/Standard';
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

      <section className="sample-text layout-12" style={{ marginTop: '1rem' }}>
        <Standard headerStyle={headerStyle} bodyStyle={bodyStyle} />
      </section>
    </div>
  );
};

export default Home;
