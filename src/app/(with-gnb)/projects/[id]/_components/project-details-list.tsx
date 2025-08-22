import ProjectDetailSection from "./project-detail-section";
import ProjectGallery from "./project-gallery";
import { PROJECT_DETAIL_SECTIONS } from "../_constants/project-detail";

interface ProjectDetailsListProps {
  project: any;
}

export default function ProjectDetailsList({ project }: ProjectDetailsListProps) {
  return (
    <div className="space-y-6">
      {PROJECT_DETAIL_SECTIONS.map((sectionKey) => {
        const section = project[sectionKey];
        return (
          <ProjectDetailSection
            key={sectionKey}
            title={section.title}
            content={section.content}
          />
        );
      })}
      <ProjectGallery images={project.images} />
    </div>
  );
}