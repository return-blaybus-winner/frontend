"use client";

import ProjectCard from "./project-card";
import SectionHeader from "./section-header";
import { SECTIONS } from "../_constants/home";
import { useProjects } from "@/app/_hooks/use-projects";
import { ProjectStatus } from "@/app/_models/project";

export default function ProjectRecommendationsSection() {
  const { title, description, buttonText, buttonWidth } =
    SECTIONS.PROJECT_RECOMMENDATIONS;

  const project = useProjects({
    projectStatus: ProjectStatus.RECRUITING,
  });

  return (
    <section className="pt-[137px] w-full">
      <SectionHeader
        title={title}
        description={description}
        buttonText={buttonText}
        buttonWidth={buttonWidth}
      />
      <div className="grid grid-cols-3 gap-5">
        {project.data?.content.slice(0, 3).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            className="shadow-card"
          />
        ))}
      </div>
    </section>
  );
}
