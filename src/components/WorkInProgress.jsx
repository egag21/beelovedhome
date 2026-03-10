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

const defaultPaletteVars = {
  '--primary-color': '#17a2b8',
  '--secondary-color': '#6c757d',
  '--tertiary-color': '#5f9ea0',
  '--dark-color': '#2f4f4f',
  '--accent-color': '#ffffff',
  '--background-color': '#f8f9fa',
  '--text-color': '#212529',
  '--body-text': '#212529',
  '--neutral-gray': '#eaf7f9',
  '--sidebar-gray': '#f3fbfc',
};

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
];

const WorkInProgress = () => {
  const [selectedPalette] = useState(localStorage.getItem('palette') || 'palette-5');
  const [selectedDesign, setSelectedDesign] = useState(localStorage.getItem('design') || 'design-4');
  const [selectedFont, setSelectedFont] = useState(localStorage.getItem('font') || 'font-2');
  const [selectedLayout, setSelectedLayout] = useState(() => {
    const storedLayout = localStorage.getItem('layout');
    return storedLayout === 'layout-3' ? 'layout-9' : storedLayout || 'layout-5';
  });
  const [paletteVars, setPaletteVars] = useState(() => {
    const stored = localStorage.getItem('customPaletteVars');
    if (!stored) return defaultPaletteVars;
    try {
      return { ...defaultPaletteVars, ...JSON.parse(stored) };
    } catch {
      return defaultPaletteVars;
    }
  });

  useEffect(() => {
    // Apply the selected palette, design, font, and layout
    document.documentElement.className = `${selectedPalette} ${selectedDesign} ${selectedFont} ${selectedLayout}`;
    Object.entries(paletteVars).forEach(([name, value]) => {
      document.documentElement.style.setProperty(name, value);
    });
    localStorage.setItem('design', selectedDesign);
    localStorage.setItem('font', selectedFont);
    localStorage.setItem('layout', selectedLayout);
    localStorage.setItem('customPaletteVars', JSON.stringify(paletteVars));
  }, [selectedPalette, selectedDesign, selectedFont, selectedLayout, paletteVars]);

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
    { value: 'layout-1', label: 'Standard Centered' },
    { value: 'layout-12', label: 'Standard' },
    { value: 'layout-2', label: 'Split Columns' },
    { value: 'layout-4', label: 'Cards Grid' },
    { value: 'layout-5', label: 'Sidebar Left' },
    { value: 'layout-6', label: 'Sidebar Right' },
    { value: 'layout-7', label: 'Two-Column Table' },
    { value: 'layout-8', label: 'Three-Column Table' },
    { value: 'layout-9', label: 'Hero Banner' },
    { value: 'layout-14', label: 'Hero Full-Width' },
    { value: 'layout-10', label: 'Testimonial Cards' },
    { value: 'layout-11', label: 'Feature List' },
    { value: 'layout-13', label: 'FAQ Accordion' },
    { value: 'layout-15', label: 'Single Image' },
    { value: 'layout-16', label: 'Two Images' },
    { value: 'layout-17', label: 'Image Grid (4)' },
  ];
  // layout components now encapsulate any per-layout behavior (e.g. hero contrast)

  const handleColorChange = (key, value) => {
    setPaletteVars(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="page-content">
      <div className="wip-container">
        <h1>Work in Progress - Theme Selector</h1>
        <div className="selector">
          <div className="top-selectors">
            <div className="palette-selector">
              <h2>Color Palette</h2>
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
            </div>
            <div className="design-selector">
              <h2>Design Style</h2>
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
              <h2>Font Options</h2>
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
                case 'layout-1':
                  return <StandardCentered headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-2':
                  return <SplitColumns headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-12':
                  return <Standard headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-4':
                  return <CardsGrid headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-5':
                  return <SidebarLeft headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-6':
                  return <SidebarRight headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-7':
                  return <TwoColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-8':
                  return <ThreeColumnTable headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-9':
                  return <HeroBanner headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />;
                case 'layout-14':
                  return <HeroFullWidth headerStyle={headerStyle} bodyStyle={bodyStyle} ctaUrl="/contact" />;
                case 'layout-10':
                  return <TestimonialCards headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-11':
                  return <FeatureList headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-13':
                  return <FaqAccordion headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-15':
                  return <ImageSingle headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-16':
                  return <ImageTwoUp headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                case 'layout-17':
                  return <ImageGridFour headerStyle={headerStyle} bodyStyle={bodyStyle} />;
                default:
                  return <StandardCentered headerStyle={headerStyle} bodyStyle={bodyStyle} />;
              }
            })()}
          </div>

          <div className="layout-selector">
            <h2>Layout Options</h2>
            {layouts.map(layout => (
              <button
                key={layout.value}
                className={`layout-btn ${selectedLayout === layout.value ? 'active' : ''}`}
                onClick={() => setSelectedLayout(layout.value)}
              >
                {layout.label}
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
