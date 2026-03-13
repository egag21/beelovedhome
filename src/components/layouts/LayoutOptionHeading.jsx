import React from 'react';
import HeadingSubsection from './HeadingSubsection';

export default function LayoutOptionHeading({ headerStyle, bodyStyle, title, intro }) {
  return (
    <HeadingSubsection
      headerStyle={headerStyle}
      bodyStyle={bodyStyle}
      className="layout-option-heading"
      title={title}
      lead={intro}
      beforeContext={null}
      afterContext={null}
    />
  );
}
