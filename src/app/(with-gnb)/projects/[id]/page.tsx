"use client";

import Container from "@/app/_components/container";
import { mockProject } from "./mock";
import ProjectImage from "./_components/project-image";
import CompanyInfo from "./_components/company-info";
import ProjectDetailsList from "./_components/project-details-list";
import ProjectSidebar from "./_components/project-sidebar";

export default function ProjectDetailPage() {
  return (
    <Container className="mt-10">
      <div className="flex gap-[50px] items-start">
        <div className="flex-1">
          <ProjectImage />
          <CompanyInfo company={mockProject.company} />
          <ProjectDetailsList project={mockProject} />
        </div>
        <ProjectSidebar project={mockProject} />
      </div>
    </Container>
  );
}
