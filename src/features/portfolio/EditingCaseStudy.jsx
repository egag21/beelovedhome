import FeatureList from '../../components/layouts/FeatureList';
import SplitColumns from '../../components/layouts/SplitColumns';
import LandscapeMediaImage from '../../components/site/LandscapeMediaImage';
import ProjectAccordion from '../../components/site/ProjectAccordion';

export default function EditingCaseStudy({ project }) {
  return (
    <ProjectAccordion
      id={project.id}
      accentClass={`project-accent--${project.id}`}
      heading={{
        number: project.number,
        eyebrow: project.eyebrow,
        title: project.title,
        lead: project.lead,
      }}
    >
      {project.image && (
        <div className="media-text media-text--prompt">
          <LandscapeMediaImage
            src={project.image.src}
            alt=""
            width={project.image.width}
            height={project.image.height}
          />
          <div className="standard-copy">
            <h3>Editorial approach</h3>
            <p>{project.approach}</p>
          </div>
        </div>
      )}
      <SplitColumns className="editing-comparison" columns={project.excerpts} />
      <div className="case-detail">
        <h3>Editorial decisions</h3>
        <FeatureList items={project.decisions} className="check-list--columns" />
      </div>
    </ProjectAccordion>
  );
}
