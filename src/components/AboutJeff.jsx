import React from 'react';
import HeadingDisplay from './layouts/HeadingDisplay';
import HeadingSection from './layouts/HeadingSection';
import FeatureList from './layouts/FeatureList';
import SplitColumns from './layouts/SplitColumns';
import ThreeColumnTable from './layouts/ThreeColumnTable';
import { education, experience } from '../data/resumeContent';

const workingApproach = [
  'Translate complexity for the intended audience',
  'Collaborate with subject matter experts',
  'Strengthen structure while preserving author voice',
  'Work across research, strategy, prototyping, implementation, launch, and improvement',
  'Collaborate across disciplines, organizations, cultures, and locations',
  'Use human-directed AI workflows with accuracy and quality review',
];

export default function AboutJeff() {
  const headerStyle = { fontFamily: 'var(--header-font, inherit)' };
  const bodyStyle = { fontFamily: 'var(--body-font, inherit)' };

  return (
    <div className="resume-page">
      <section className="page-intro">
        <HeadingDisplay
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="About"
          title="I enjoy bringing clarity to complexity."
          lead="My career has developed at the intersection of communications, technology, and publishing."
          beforeContext={null}
          afterContext={null}
        />
      </section>

      <section className="section section--compact about-profile">
        <figure className="headshot">
          <img
            src="/images/jeffrey-gage-headshot-square.png"
            alt="Jeffrey Gage"
          />
        </figure>
        <div className="standard-copy">
          <p>
            My titles have varied—from software developer and user experience designer to publishing director,
            technical writer, and missionary technologist—but the work itself has remained consistent: helping
            organizations communicate more clearly, work more effectively, and turn ideas into reality.
          </p>
          <p>
            Sometimes that has meant designing software, building websites, writing documentation, creating
            educational content, or improving user experiences. Other times it has meant leading publishing
            projects, producing communications, mentoring others, speaking at conferences, or helping teams align
            around a shared goal.
          </p>
          <p>
            Since 2010, I have worked with two international nonprofit organizations, including eleven years
            living in Germany from 2014 to 2025. Those experiences strengthened my adaptability, cross-cultural
            communication, and ability to understand complex needs and turn them into practical solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Career"
          title="A career connecting content, systems, and people"
          lead="The roles changed over time; the focus on accessible information and practical solutions did not."
          beforeContext={null}
          afterContext={null}
        />
        <ThreeColumnTable
          caption="Jeffrey Gage career timeline"
          headers={['Period', 'Role & organization', 'Primary contribution']}
          rows={experience.map((role) => [
            role.period,
            `${role.title} · ${role.organization}`,
            role.summary,
          ])}
        />
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Working approach"
          title="Audience-centered, collaborative, and practical"
          lead="The PDF describes a consistent way of working across editorial, technical, and product contexts."
          beforeContext={null}
          afterContext={null}
        />
        <FeatureList items={workingApproach} className="check-list--columns" />
      </section>

      <section className="section media-text">
        <div className="standard-copy">
          <p className="eyebrow">International collaboration</p>
          <h2>Eleven years living and working in Germany</h2>
          <p>
            Work with Greater Europe Mission and LightSys Technology Services involved developing digital
            products and communications for diverse audiences while collaborating with distributed teams and
            organizational partners.
          </p>
        </div>
        <figure className="supporting-visual">
          <img
            src="/images/international-collaboration.png"
            alt=""
          />
          <figcaption>Decorative artwork representing distributed collaboration</figcaption>
        </figure>
      </section>

      <section className="section">
        <HeadingSection
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
          eyebrow="Education"
          title="Two complementary fields of study"
          lead={null}
          beforeContext={null}
          afterContext={null}
        />
        <SplitColumns
          columns={education.map((item) => ({
            eyebrow: 'Bachelor of Arts',
            title: item.degree.replace('BA, ', ''),
            paragraphs: [item.institution],
          }))}
        />
      </section>
    </div>
  );
}
