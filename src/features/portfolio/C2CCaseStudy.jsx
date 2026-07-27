import FeatureList from '../../components/layouts/FeatureList';
import LandscapeMediaImage from '../../components/site/LandscapeMediaImage';
import ProjectAccordion from '../../components/site/ProjectAccordion';
import { c2cProject } from '../../content/portfolio';

export default function C2CCaseStudy() {
  return (
    <ProjectAccordion
      id={c2cProject.id}
      accentClass={`project-accent--${c2cProject.id}`}
      heading={{
        number: c2cProject.number,
        eyebrow: c2cProject.eyebrow,
        title: c2cProject.title,
        lead: c2cProject.lead,
      }}
    >
      <div className="media-text">
        <div className="standard-copy">
          <h3>Campaign approach</h3>
          <p>
            The campaign identified a common barrier to starting a meaningful conversation, introduced the
            application as a practical visual aid, used humor to build rapport, and closed with a clear download
            action.
          </p>
          <div className="button-row">
            <a
              className="button-link button-link--secondary"
              href="https://www.c2cstory.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the C2C Story website
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
          <blockquote>“Could I show you a story that changed my life?”</blockquote>
          <h3>Communication goals</h3>
          <FeatureList items={c2cProject.goals} />
        </div>
        <LandscapeMediaImage
          src={c2cProject.image.src}
          alt=""
          width={c2cProject.image.width}
          height={c2cProject.image.height}
          aspectRatio="4 / 3"
        />
      </div>
    </ProjectAccordion>
  );
}
