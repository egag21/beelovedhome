import React from 'react';
import FeatureList from './FeatureList';

export default function SplitColumns({ columns = [], className = '' }) {
  return (
    <div className={`split-columns ${className}`.trim()}>
      {columns.map((column) => (
        <article className="split-columns__panel" key={column.title}>
          <p className="eyebrow">{column.eyebrow}</p>
          <h3>{column.title}</h3>
          {column.paragraphs?.map((paragraph, index) => (
            <p key={typeof paragraph === 'string' ? paragraph : index}>{paragraph}</p>
          ))}
          {column.items && <FeatureList items={column.items} />}
        </article>
      ))}
    </div>
  );
}
