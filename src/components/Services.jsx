import React from 'react';
import './Services.css';
import './WorkInProgress.css';
import ImageTile from './layouts/ImageTile';
import abstractDesignImage from '../../abstract design.png';

const Services = () => {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="page-content services-page">
      <section className="services-page__section sample-text LO-01-Stnd">
        <h2 style={headerStyle}>Modernizing Small Business Websites and Improving Their Online Presence</h2>
        <p style={bodyStyle}>
          Many small business websites were created years ago and no longer reflect the quality of the
          business behind them. Outdated design, poor mobile compatibility, and confusing layouts can make
          it difficult for customers to find the information they need.
        </p>
        <p style={bodyStyle}>
          I work with small businesses to refresh existing websites, improve how they appear online, and
          create a clearer, more professional presence on the web.
        </p>
      </section>

      <section className="services-page__section sample-text LO-24-ImgText LO-07-ImgText">
        <div className="image-layout image-layout--split image-layout--image-first services-image-text-hero">
          <div className="image-text-layout">
            <ImageTile
              className="image-text-layout__media"
              item={{
                src: abstractDesignImage,
                alt: 'Abstract design',
              }}
            />
            <article className="image-text-layout__content" style={bodyStyle}>
              <h2 style={headerStyle}>Website Refresh &amp; Modernization</h2>
              <p>
                Many small business websites were created years ago and have not kept pace with current design
                standards or customer expectations. A website refresh updates the look, improves usability, and
                ensures that visitors can quickly find the information they need.
              </p>
              <p>
                Rather than starting from scratch, many websites can be significantly improved by refining the
                existing structure and updating the presentation.
              </p>
              <h4 style={headerStyle}>Improvements List</h4>
              <p>A refresh may include improvements such as:</p>
              <ul className="services-standard-list">
                <li>Updated layout and visual design</li>
                <li>Improved mobile compatibility</li>
                <li>Clearer organization of information</li>
                <li>Updating outdated or incorrect content</li>
                <li>Creating a more professional and consistent appearance</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="services-page__section sample-text LO-04-CrdsGrid">
        <div className="cards-grid">
          <h2 style={headerStyle}>Additional Services</h2>
          <div className="cards-grid__items">
            <article className="cards-grid__card">
              <h4 style={headerStyle}>New Website Creation</h4>
              <p style={bodyStyle}>
                If your business needs a website from the ground up, I can design and build a clean, modern
                site tailored to your needs. The goal is a professional online presence that clearly
                communicates what your business offers and how customers can connect with you.
              </p>
            </article>
            <article className="cards-grid__card">
              <h4 style={headerStyle}>Business Visibility Setup</h4>
              <p style={bodyStyle}>
                Many businesses are missing or underutilizing their listings on services like Google Maps and
                Apple Maps. I can assist with setting up or refining these listings so customers can easily
                find your business, see accurate information, and connect with you online.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
