import React from 'react';
import ImageTile from './ImageTile';
import LayoutOptionHeading from './LayoutOptionHeading';

const defaultItems = [
  {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3',
    alt: 'Modern office building exterior',
    href: '/contact',
    cornerText: 'Headquarters',
  },
];

export default function ImageSingle({ headerStyle, bodyStyle, items = defaultItems }) {
  return (
    <section className="image-layout image-layout--single">
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="Single Image Focus"
        intro="Use one strong image when you want a clean visual break between text-heavy sections."
      />
      <ImageTile item={items[0]} />
    </section>
  );
}
