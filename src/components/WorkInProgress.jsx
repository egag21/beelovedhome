import React, { useState, useEffect } from 'react';
import './WorkInProgress.css';
import StandardCentered from './layouts/StandardCentered';
import SplitColumns from './layouts/SplitColumns';
import CardsGrid from './layouts/CardsGrid';
import SidebarLeft from './layouts/SidebarLeft';
import SidebarRight from './layouts/SidebarRight';
import TwoColumnTable from './layouts/TwoColumnTable';
import ThreeColumnTable from './layouts/ThreeColumnTable';
import HeroBanner from './layouts/HeroBanner';
import HeroFullWidth from './layouts/HeroFullWidth';
import TestimonialCards from './layouts/TestimonialCards';
import FeatureList from './layouts/FeatureList';
import Standard from './layouts/Standard';
import FaqAccordion from './layouts/FaqAccordion';
import ImageSingle from './layouts/ImageSingle';
import ImageTwoUp from './layouts/ImageTwoUp';
import ImageGridFour from './layouts/ImageGridFour';
import ImageText from './layouts/ImageText';
import TextImage from './layouts/TextImage';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import HeadingSubsection from './layouts/HeadingSubsection';
import HeadingDetail from './layouts/HeadingDetail';
import HeadingMicro from './layouts/HeadingMicro';
import CatalogCard from './layouts/CatalogCard';

const colorFields = [
  { key: '--primary-color', label: 'Primary' },
  { key: '--secondary-color', label: 'Secondary' },
  { key: '--tertiary-color', label: 'Tertiary' },
  { key: '--dark-color', label: 'Dark' },
  { key: '--accent-color', label: 'Accent' },
  { key: '--background-color', label: 'Background' },
  { key: '--text-color', label: 'Text' },
  { key: '--body-text', label: 'Body Text' },
  { key: '--neutral-gray', label: 'Neutral Gray' },
  { key: '--sidebar-gray', label: 'Sidebar Gray' },
  { key: '--heading-display-color', label: 'Heading Display' },
  { key: '--heading-section-color', label: 'Heading Section' },
  { key: '--heading-subsection-color', label: 'Heading Subsection' },
  { key: '--heading-detail-color', label: 'Heading Detail' },
  { key: '--heading-micro-color', label: 'Heading Micro' },
  { key: '--heading-support-color', label: 'Heading Support' },
];

const normalizeToHex = (value) => {
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) return '#000000';

  if (trimmed.startsWith('#')) {
    if (trimmed.length === 4) {
      const r = trimmed[1];
      const g = trimmed[2];
      const b = trimmed[3];
      return `#${r}${r}${g}${g}${b}${b}`;
    }
    return trimmed.slice(0, 7);
  }

  const rgbMatch = trimmed.match(/^rgba?\(([^)]+)\)$/);
  if (!rgbMatch) return '#000000';

  const [r, g, b] = rgbMatch[1]
    .split(',')
    .slice(0, 3)
    .map(part => Math.max(0, Math.min(255, Number.parseInt(part.trim(), 10) || 0)));

  return `#${[r, g, b].map(channel => channel.toString(16).padStart(2, '0')).join('')}`;
};

const getThemeDefaultPaletteVars = () => {
  if (typeof window === 'undefined') {
    return Object.fromEntries(colorFields.map(field => [field.key, '#000000']));
  }

  const styles = getComputedStyle(document.documentElement);
  return Object.fromEntries(
    colorFields.map(field => [field.key, normalizeToHex(styles.getPropertyValue(field.key))]),
  );
};

const WorkInProgress = () => {
  const [selectedDesign, setSelectedDesign] = useState(localStorage.getItem('design') || 'design-6');
  const [selectedFont, setSelectedFont] = useState(localStorage.getItem('font') || 'font-2');
  const [selectedLayout, setSelectedLayout] = useState(() => {
    const storedLayout = localStorage.getItem('layout');
    return /^LO-\d{2}-[A-Za-z0-9]+$/.test(storedLayout || '') ? storedLayout : 'LO-05-SdbrLeft';
  });
  const [paletteVars, setPaletteVars] = useState(() => getThemeDefaultPaletteVars());
  const [copyLabel, setCopyLabel] = useState('Copy Palette');

  useEffect(() => {
    // Apply the selected palette, design, font, and layout
    document.documentElement.className = `${selectedDesign} ${selectedFont} ${selectedLayout}`;
    Object.entries(paletteVars).forEach(([name, value]) => {
      document.documentElement.style.setProperty(name, value);
    });
    localStorage.setItem('design', selectedDesign);
    localStorage.setItem('font', selectedFont);
    localStorage.setItem('layout', selectedLayout);
  }, [selectedDesign, selectedFont, selectedLayout, paletteVars]);

  const designs = [
    { value: 'design-1', label: 'Horizontal Bar' },
    { value: 'design-2', label: 'Centered Logo' },
    { value: 'design-3', label: 'Button Active' },
    { value: 'design-4', label: 'Gradient Background' },
    { value: 'design-5', label: 'Sticky Header' },
    { value: 'design-6', label: 'Gradient + Sticky' },
  ];

  const fonts = [
    { value: 'font-1', label: 'Sans/Serif (Arial + Georgia)', header: 'Arial, sans-serif', body: 'Georgia, serif' },
    { value: 'font-2', label: 'Modern (Roboto + Open Sans)', header: 'Roboto, sans-serif', body: 'Open Sans, sans-serif' },
    { value: 'font-3', label: 'Elegant (Playfair Display + Lato)', header: 'Playfair Display, serif', body: 'Lato, sans-serif' },
    { value: 'font-4', label: 'Tech (Montserrat + Source Code Pro)', header: 'Montserrat, sans-serif', body: 'Source Code Pro, monospace' },
    { value: 'font-5', label: 'Clean (Helvetica + Merriweather)', header: 'Helvetica, sans-serif', body: 'Merriweather, serif' },
  ];

  const layouts = [
    { value: 'LO-01-StndCnt', label: 'Standard Centered' },
    { value: 'LO-12-Stndrd', label: 'Standard' },
    { value: 'LO-02-SpltClmn', label: 'Split Columns' },
    { value: 'LO-04-CrdsGrid', label: 'Cards Grid' },
    { value: 'LO-05-SdbrLeft', label: 'Sidebar Left' },
    { value: 'LO-06-SdbrRght', label: 'Sidebar Right' },
    { value: 'LO-07-TwoColTb', label: 'Two-Column Table' },
    { value: 'LO-08-ThrColTb', label: 'Three-Column Table' },
    { value: 'LO-09-HeroBnnr', label: 'Hero Banner' },
    { value: 'LO-14-HrFllWdt', label: 'Hero Full-Width' },
    { value: 'LO-10-TstmCrd', label: 'Testimonial Cards' },
    { value: 'LO-11-FtrList', label: 'Feature List' },
    { value: 'LO-13-FaqAccrd', label: 'FAQ Accordion' },
    { value: 'LO-15-SnglImg', label: 'Single Image' },
    { value: 'LO-16-TwoImgs', label: 'Two Images' },
    { value: 'LO-17-ImgGrd4', label: 'Image Grid (4)' },
    { value: 'LO-24-ImgText', label: 'Image-Text' },
    { value: 'LO-25-TextImg', label: 'Text-Image' },
    { value: 'LO-18-HdngH1', label: 'Heading Block H1' },
    { value: 'LO-19-HdngH2', label: 'Heading Block H2' },
    { value: 'LO-20-HdngH3', label: 'Heading Block H3' },
    { value: 'LO-21-HdngH4', label: 'Heading Block H4' },
    { value: 'LO-22-HdngH5', label: 'Heading Block H5' },
    { value: 'LO-23-CtlgCard', label: 'Catalog Card' },
  ];
  // layout components now encapsulate any per-layout behavior (e.g. hero contrast)

  const handleColorChange = (key, value) => {
    setPaletteVars(prev => ({ ...prev, [key]: value }));
  };

  const buildPaletteCss = () => {
    const lines = colorFields.map(field => `  ${field.key}: ${paletteVars[field.key]};`);
    return `:root {\n${lines.join('\n')}\n}`;
  };

  const handleCopyPalette = async () => {
    const paletteCss = buildPaletteCss();

    try {
      await navigator.clipboard.writeText(paletteCss);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = paletteCss;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'absolute';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }

    setCopyLabel('Copied');
    window.setTimeout(() => setCopyLabel('Copy Palette'), 1200);
  };

  return (
    <div className="page-content">
      <div className="wip-container">
        <HeadingDisplay
          headerStyle={{ fontFamily: 'var(--header-font, inherit)' }}
          bodyStyle={{ fontFamily: 'var(--body-font, inherit)' }}
          className="wip-page-heading"
          title="Work in Progress - Theme Selector"
          lead="Tune colors, layout patterns, and typography in one place. Changes apply immediately and persist in local storage."
          beforeContext={null}
          afterContext={null}
        />
        <div className="selector">
          <div className="top-selectors">
            <div className="palette-selector">
              <HeadingDetail
                headerStyle={{ fontFamily: 'var(--header-font, inherit)' }}
                bodyStyle={{ fontFamily: 'var(--body-font, inherit)' }}
                className="wip-inline-heading"
                title="Color Palette"
                lead={null}
                beforeContext={null}
                afterContext={null}
              />
              <div className="color-picker-grid">
                {colorFields.map(field => (
                  <label key={field.key} className="color-picker-row">
                    <span>{field.label}</span>
                    <input
                      type="color"
                      value={paletteVars[field.key]}
                      onChange={(event) => handleColorChange(field.key, event.target.value)}
                    />
                    <code>{paletteVars[field.key]}</code>
                  </label>
                ))}
              </div>
              <button type="button" className="palette-copy-btn" onClick={handleCopyPalette}>
                {copyLabel}
              </button>
            </div>
            <div className="design-selector">
              <HeadingMicro
                headerStyle={{ fontFamily: 'var(--header-font, inherit)' }}
                bodyStyle={{ fontFamily: 'var(--body-font, inherit)' }}
                className="wip-inline-heading"
                title="Design Style"
                lead={null}
                beforeContext={null}
                afterContext={null}
              />
              {designs.map(design => (
                <button
                  key={design.value}
                  className={`design-btn ${selectedDesign === design.value ? 'active' : ''}`}
                  onClick={() => setSelectedDesign(design.value)}
                >
                  {design.label}
                </button>
              ))}
            </div>
            <div className="font-selector">
              <HeadingMicro
                headerStyle={{ fontFamily: 'var(--header-font, inherit)' }}
                bodyStyle={{ fontFamily: 'var(--body-font, inherit)' }}
                className="wip-inline-heading"
                title="Font Options"
                lead={null}
                beforeContext={null}
                afterContext={null}
              />
              {fonts.map(font => (
                <button
                  key={font.value}
                  className={`font-btn ${selectedFont === font.value ? 'active' : ''}`}
                  onClick={() => setSelectedFont(font.value)}
                >
                  {font.label}
                </button>
              ))}
            </div>
          </div>
          <div className={`sample-text ${selectedLayout}`}>
            {(() => {
              const headerStyle = { fontFamily: fonts.find(f => f.value === selectedFont).header };
              const bodyStyle = { fontFamily: fonts.find(f => f.value === selectedFont).body };

              switch (selectedLayout) {
                case 'LO-01-StndCnt':
                  return <StandardCentered headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-02-SpltClmn':
                  return <SplitColumns headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-12-Stndrd':
                  return <Standard headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-04-CrdsGrid':
                  return <CardsGrid headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-05-SdbrLeft':
                  return <SidebarLeft headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-06-SdbrRght':
                  return <SidebarRight headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-07-TwoColTb':
                  return <TwoColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-08-ThrColTb':
                  return <ThreeColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-09-HeroBnnr':
                  return <HeroBanner headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />;
                case 'LO-14-HrFllWdt':
                  return <HeroFullWidth headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />;
                case 'LO-10-TstmCrd':
                  return <TestimonialCards headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-11-FtrList':
                  return <FeatureList headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-13-FaqAccrd':
                  return <FaqAccordion headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-15-SnglImg':
                  return <ImageSingle headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-16-TwoImgs':
                  return <ImageTwoUp headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-17-ImgGrd4':
                  return <ImageGridFour headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-24-ImgText':
                  return <ImageText headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-25-TextImg':
                  return <TextImage headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-18-HdngH1':
                  return <HeadingDisplay headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-19-HdngH2':
                  return <HeadingSection headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-20-HdngH3':
                  return <HeadingSubsection headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-21-HdngH4':
                  return <HeadingDetail headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-22-HdngH5':
                  return <HeadingMicro headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'LO-23-CtlgCard':
                  return <CatalogCard headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                default:
                  return <StandardCentered headerStyle={headerStyle} bodyStyle={bodyStyle} />;
              }
            })()}
          </div>

          <div className="layout-selector">
            <HeadingDetail
              headerStyle={{ fontFamily: 'var(--header-font, inherit)' }}
              bodyStyle={{ fontFamily: 'var(--body-font, inherit)' }}
              className="wip-inline-heading wip-inline-heading--layout"
              title="Layout Options"
              lead={null}
              beforeContext={null}
              afterContext={null}
            />
            {layouts.map(layout => (
              <button
                key={layout.value}
                className={`layout-btn ${selectedLayout === layout.value ? 'active' : ''}`}
                onClick={() => setSelectedLayout(layout.value)}
              >
                <span className="layout-btn__label">{layout.label}</span>
                <span className="layout-btn__code">{layout.value}</span>
              </button>
            ))}
          </div>
        </div>
        <p>Changes are applied immediately. Navigate back to see the effects.</p>
      </div>
    </div>
  );
};

export default WorkInProgress;
