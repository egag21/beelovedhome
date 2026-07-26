import React from 'react';

export default function ThreeColumnTable({ headers = [], rows = [], caption }) {
  return (
      <div className="table-scroll table-scroll--wide" tabIndex="0">
        <table className="sample-table three-col">
          {caption && <caption>{caption}</caption>}
          <thead>
            <tr>{headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join('-')}>
                {row.map((cell) => <td key={cell}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
