import React from 'react';
import ImageTile from './ImageTile';
import LayoutOptionHeading from './LayoutOptionHeading';

const defaultContent = {
  heading: 'Pair A visual with supporting context',
  paragraphs: [
    'Use this pattern when one image should carry the emotional signal and the copy should explain what the viewer is looking at.',
    'Keep the text concise and specific so the image and message reinforce each other.',
  ],
};

export default function ImageTextSplit({
  headerStyle,
  bodyStyle,
  title,
  intro,
  imageItem,
  textContent = defaultContent,
  imageFirst = true,
}) {
  const content = textContent || defaultContent;
  const paragraphs = Array.isArray(content.paragraphs) ? content.paragraphs : [];

  return (
    <section className={`image-layout image-layout--split ${imageFirst ? 'image-layout--image-first' : 'image-layout--text-first'}`}>
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title={title}
        intro={intro}
      />
      <div className="image-text-layout">
        <ImageTile item={imageItem} className="image-text-layout__media" />
        <article className="image-text-layout__content" style={bodyStyle}>
          <h4 style={headerStyle}>{content.heading}</h4>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </div>
    </section>
  );
}
