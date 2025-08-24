"use client";

import Container from "@/app/_components/container";
import { mockProject } from "./mock";
import CompanyInfo from "./_components/company-info";
import ProjectDetailsList from "./_components/project-details-list";
import ProjectSidebar from "./_components/project-sidebar";
import { useParams } from "next/navigation";
import { useProject } from "@/app/_hooks/use-project";
import { Heart } from "lucide-react";
import Image from "next/image";

export default function ProjectDetailPage() {
  const { id } = useParams() as { id: string };
  const { data: project } = useProject(id);

  if (!project) return null;

  return (
    <Container className="mt-10">
      <div className="flex gap-[60px] items-start">
        <div className="flex-1">
          <div className="relative  rounded-lg overflow-hidden h-96">
            <Image
              src={project.thumbnail}
              alt={project.title}
              className="object-cover absolute"
              fill
            />
            <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Heart className="w-6 h-6 text-white" />
            </button>
          </div>

          <CompanyInfo company={mockProject.company} />
          <ProjectDetailsList project={project} />
        </div>
        <ProjectSidebar project={project} />
      </div>
    </Container>
  );
}
