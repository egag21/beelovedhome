import React from 'react';

export default function TwoColumnTable({ headers = [], rows = [], caption }) {
  return (
      <div className="table-scroll" tabIndex="0">
        <table className="sample-table">
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
