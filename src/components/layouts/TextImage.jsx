import React from 'react';
import ImageTextSplit from './ImageTextSplit';

const defaultImageItem = {
  src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3',
  alt: 'Dashboard metrics on a desktop screen',
  href: '/past-work',
  cornerText: 'Performance Snapshot',
};

const defaultTextContent = {
  heading: 'Text-led explanation',
  paragraphs: [
    'Start with the narrative when context or decision framing should come before visual proof.',
    'Use the adjacent image to reinforce the copy with a concrete, fast-scannable signal.',
  ],
};

export default function TextImage({ headerStyle, bodyStyle, imageItem = defaultImageItem, textContent = defaultTextContent }) {
  return (
    <ImageTextSplit
      headerStyle={headerStyle}
      bodyStyle={bodyStyle}
      title="Text-Image"
      intro="Left column text + right column image. Best when readers need context before the visual."
      imageItem={imageItem}
      textContent={textContent}
      imageFirst={false}
    />
  );
}
