import React from 'react';

export default function FeatureList({ items = [], className = '' }) {
  return (
      <ul className={`check-list ${className}`.trim()}>
        {items.map((item) => (
          <li key={typeof item === 'string' ? item : item.label}>
            {typeof item === 'string' ? item : (
              <>
                <strong>{item.label}</strong>
                {item.detail && <> — {item.detail}</>}
              </>
            )}
          </li>
        ))}
      </ul>
  );
}
