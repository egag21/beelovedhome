import React from 'react';
import ImageTile from './ImageTile';

const defaultItems = [
  {
    src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Consulting meeting with a team',
    href: '/services',
    cornerText: 'Discovery Workshop',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Colleagues collaborating in office',
    cornerText: 'Implementation',
  },
];

export default function ImageTwoUp({ headerStyle, bodyStyle, items = defaultItems }) {
  return (
    <section className="image-layout image-layout--two-up">
      <h3 style={headerStyle}>Two Image Comparison</h3>
      <p className="sample-intro" style={bodyStyle}>
        Great for showing before/after states, paired capabilities, or two related proof points.
      </p>
      <div className="image-grid image-grid--two">
        {items.slice(0, 2).map((item) => (
          <ImageTile key={item.src} item={item} />
        ))}
      </div>
    </section>
  );
}
