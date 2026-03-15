import React from 'react';
import ImageTextSplit from './ImageTextSplit';

const defaultImageItem = {
  src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
  alt: 'Team collaborating around a table',
  href: '/services',
  cornerText: 'Strategy Session',
};

const defaultTextContent = {
  heading: 'Image-led storytelling',
  paragraphs: [
    'Lead with the image when visual proof is the strongest opening move for the section.',
    'Use adjacent text to add context, constraints, or outcome details without competing with the visual.',
  ],
};

export default function ImageText({ headerStyle, bodyStyle, imageItem = defaultImageItem, textContent = defaultTextContent }) {
  return (
    <ImageTextSplit
      headerStyle={headerStyle}
      bodyStyle={bodyStyle}
      title="Image-Text"
      intro="Left column image + right column text. Best when visual context should be read first."
      imageItem={imageItem}
      textContent={textContent}
      imageFirst
    />
  );
}
