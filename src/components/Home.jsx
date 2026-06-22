import React from 'react';
import HeroFullWidth from './layouts/HeroFullWidth';
import './WorkInProgress.css';

const Home = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="page-content home-page">
      <section className="sample-text LO-14-HrFllWdt">
        <HeroFullWidth
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          ctaUrl="/contact"
          regions={{
            headline: 'Modernizing Small Business Websites',
            body: 'Refresh outdated websites and create a clearer, more professional online presence.',
            cta: { label: 'Get in Touch' },
          }}
        />
      </section>

      <section className="sample-text LO-12-Stndrd" style={{ marginTop: '1rem' }}>
        <p style={bodyStyle}>
          Many small business websites were created years ago and no longer reflect the quality of the
          business behind them. Outdated design, poor mobile compatibility, and confusing layouts can make
          it difficult for customers to find the information they need.
        </p>
        <p style={bodyStyle}>
          I refresh existing websites, improve how businesses appear online, and create a clearer, more
          professional web presence.
        </p>
      </section>

    </div>
  );
};

export default Home;
