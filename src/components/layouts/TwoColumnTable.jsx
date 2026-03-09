import React from 'react';

export default function TwoColumnTable({ headerStyle, bodyStyle }) {
  return (
    <section>
      <h3 style={headerStyle}>Engagement Options Snapshot</h3>
      <p className="sample-intro" style={bodyStyle}>
        Use a two-column table when you want quick scanning across offers and pricing models.
      </p>
      <div className="table-scroll">
        <table className="sample-table" style={bodyStyle}>
          <thead>
            <tr><th>Service</th><th>Starting Investment</th></tr>
          </thead>
          <tbody>
            <tr><td>Website + Messaging Audit</td><td>$1,200</td></tr>
            <tr><td>Brochure Site Strategy Sprint</td><td>$2,800</td></tr>
            <tr><td>Conversion Review + Recommendations</td><td>$1,600</td></tr>
            <tr><td>Monthly Advisory Retainer</td><td>Custom</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
