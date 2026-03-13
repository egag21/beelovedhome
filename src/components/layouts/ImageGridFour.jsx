import React from 'react';
import ImageTile from './ImageTile';
import LayoutOptionHeading from './LayoutOptionHeading';

const defaultItems = [
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Analytics dashboard on monitor',
    href: '/past-work',
    cornerText: 'Analytics',
  },
  {
    src: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Open laptop with planning documents',
    cornerText: 'Strategy',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Business team in discussion',
    href: '/about',
    cornerText: 'Collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Presentation and planning wall',
    cornerText: 'Roadmapping',
  },
];

export default function ImageGridFour({ headerStyle, bodyStyle, items = defaultItems }) {
  return (
    <section className="image-layout image-layout--grid-four">
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="Four Image Gallery"
        intro="Use a compact image grid for case-study previews, portfolio snapshots, or visual trust signals."
      />
      <div className="image-grid image-grid--four">
        {items.slice(0, 4).map((item) => (
          <ImageTile key={item.src} item={item} />
        ))}
      </div>
    </section>
  );
}
