import { Separator } from "@/components/ui/separator";
import ProjectDetailSection from "./project-detail-section";
import ProjectGallery from "./project-gallery";

interface ProjectDetailsListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  project: any;
}

export default function ProjectDetailsList({
  project,
}: ProjectDetailsListProps) {
  return (
    <div className="space-y-[50px] mt-[120px]">
      <ProjectDetailSection
        title={"프로젝트 제목"}
        content={project.details.content}
      />
      <ProjectDetailSection
        title={"프로젝트 유형"}
        content={project.projectContent.content}
      />
      <ProjectDetailSection
        title={"상세 설명"}
        content={project.detailedDescription.content}
      />

      <Separator />

      <ProjectDetailSection
        title={"의뢰인 유형"}
        content={project.designGuide.content}
      />
      <ProjectDetailSection
        title={"필요 예술 분야"}
        content={project.targetAudience.content}
      />
      <ProjectDetailSection
        title={"희망 경력"}
        content={project.workPeriod.content}
      />
      <ProjectDetailSection
        title={"모집 인원"}
        content={project.recruitNumber.content}
      />

      <Separator />

      <ProjectDetailSection
        title={"프로젝트 기간"}
        content={project.budget.content}
      />
      <ProjectDetailSection
        title={"활동 지역"}
        content={project.workScope.content}
      />
      <ProjectDetailSection
        title={"예상 예산"}
        content={project.expectedOutcome.content}
      />

      <Separator />

      <ProjectGallery images={project.images} />
    </div>
  );
}
