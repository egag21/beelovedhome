import { Link } from 'react-router-dom';
import FeatureList from '../components/layouts/FeatureList';
import HeadingDisplay from '../components/layouts/HeadingDisplay';
import HeadingSection from '../components/layouts/HeadingSection';
import SplitColumns from '../components/layouts/SplitColumns';
import ThreeColumnTable from '../components/layouts/ThreeColumnTable';
import LandscapeMediaImage from '../components/site/LandscapeMediaImage';
import SquareProfileImage from '../components/site/SquareProfileImage';
import { resumePdfPath } from '../content/site';
import { education, experience, workingApproach } from '../content/resume';

export default function AboutPage() {
  return (
    <div className="resume-page">
      <section className="page-intro page-intro--no-divider">
        <HeadingDisplay
          eyebrow="About"
          title="I enjoy bringing clarity to complexity."
          lead="My career has developed at the intersection of communications, technology, and publishing."
          beforeContext={null}
          afterContext={null}
        />
        <div className="button-row page-intro__actions">
          <Link className="button-link button-link--primary" to="/portfolio">
            View my work
          </Link>
          <a
            className="button-link button-link--secondary"
            href={resumePdfPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download my CV
          </a>
        </div>
      </section>

      <section className="section section--compact about-profile">
        <SquareProfileImage
          src="/images/optimized/headshot-480.jpg"
          srcSet="/images/optimized/headshot-480.jpg 480w, /images/optimized/headshot-960.jpg 960w"
          sizes="(max-width: 820px) 70vw, 280px"
          alt="Jeffrey Gage"
        />
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
          eyebrow="Career"
          title="A career connecting content, systems, and people"
          lead="The roles changed over time; the focus on accessible information and practical solutions did not."
        />
        <ThreeColumnTable
          caption="Career timeline"
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
          eyebrow="Working approach"
          title="Audience-centered, collaborative, and practical"
          lead="I connect audience needs, organizational goals, and practical constraints to shape clear, workable solutions."
        />
        <FeatureList items={workingApproach} className="check-list--columns" />
      </section>

      <section className="section media-text">
        <div className="standard-copy">
          <p className="eyebrow">International collaboration</p>
          <h2>Eleven years living and working in Germany</h2>
          <p>
            Work with Greater Europe Mission involved developing digital products and communications for
            diverse audiences while collaborating with distributed teams and organizational partners.
          </p>
        </div>
        <LandscapeMediaImage
          src="/images/optimized/international-768.jpg"
          alt=""
          width="1536"
          height="1024"
        />
      </section>

      <section className="section">
        <HeadingSection
          eyebrow="Education"
          title="Two complementary fields of study"
        />
        <SplitColumns
          columns={education.map((item) => ({
            eyebrow: 'Bachelor of Arts',
            title: item.degree.replace('BA, ', ''),
            paragraphs: [
              <a
                className="education-link"
                href={item.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.institution}
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>,
            ],
          }))}
        />
      </section>
    </div>
  );
}
