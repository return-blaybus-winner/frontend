import { Separator } from "@/components/ui/separator";
import ProjectDetailSection from "./project-detail-section";
import ProjectGallery from "./project-gallery";
import { Project } from "@/app/_models/project";

interface ProjectDetailsListProps {
  project: Project;
}

export default function ProjectDetailsList({
  project,
}: ProjectDetailsListProps) {
  return (
    <div className="space-y-[50px] mt-[120px]">
      <ProjectDetailSection title={"프로젝트 제목"} content={project.title} />
      <ProjectDetailSection
        title={"프로젝트 유형"}
        content={project.categories[0]}
      />
      <ProjectDetailSection title={"상세 설명"} content={project.description} />

      <Separator />

      <ProjectDetailSection
        title={"의뢰인 유형"}
        content={project.projectProceedType}
      />
      <ProjectDetailSection
        title={"필요 예술 분야"}
        content={project.collaborationCategoriesLevel1.join(", ")}
      />
      <ProjectDetailSection
        title={"희망 경력"}
        content={project.experienceLevel}
      />
      <ProjectDetailSection
        title={"모집 인원"}
        content={`${project.maxRecruitNumber}명`}
      />

      <Separator />

      <ProjectDetailSection
        title={"프로젝트 기간"}
        content={`${project.projectStartDate} - ${project.projectEndDate}`}
      />
      <ProjectDetailSection
        title={"활동 지역"}
        content={project.projectRegion[0]}
      />
      <ProjectDetailSection title={"예상 예산"} content={`${project.budget}`} />

      <Separator />

      <ProjectGallery images={project.referenceImages} />
    </div>
  );
}
