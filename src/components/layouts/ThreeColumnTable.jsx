import React from 'react';
import LayoutOptionHeading from './LayoutOptionHeading';

export default function ThreeColumnTable({ headerStyle, bodyStyle }) {
  return (
    <section>
      <LayoutOptionHeading
        headerStyle={headerStyle}
        bodyStyle={bodyStyle}
        title="Typical Consulting Process"
        intro="A three-column table works well for showing phase, objective, and tangible output."
      />
      <div className="table-scroll table-scroll--wide">
        <table className="sample-table three-col" style={bodyStyle}>
          <thead>
            <tr><th>Phase</th><th>Goal</th><th>Deliverable</th></tr>
          </thead>
          <tbody>
            <tr><td>Discovery</td><td>Clarify audience and offer</td><td>Positioning brief</td></tr>
            <tr><td>Strategy</td><td>Define content and page priorities</td><td>Site blueprint + copy plan</td></tr>
            <tr><td>Implementation</td><td>Launch and improve conversion flow</td><td>Action checklist + KPI baseline</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
