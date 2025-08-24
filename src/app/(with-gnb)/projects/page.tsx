"use client";

import { Suspense } from "react";
import ProjectsSidebar from "./_components/projects-sidebar";
import ProjectTabs from "./_components/project-tabs";
import FiltersBar from "./_components/filters-bar";
import ProjectList from "../_components/project-list";
import Pagination from "./_components/pagination";
import Container from "@/app/_components/container";
import { useProjects } from "@/app/_hooks/use-projects";
import { useSearchParams, useRouter } from "next/navigation";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const artCategories = searchParams.get("artCategories");
  const projectCategories = searchParams.get("projectCategories");
  const corporateType = searchParams.get("corporateType");
  const maxRecruitNumber = searchParams.get("maxRecruitNumber");
  const minRecruitNumber = searchParams.get("minRecruitNumber");
  const page = searchParams.get("page");
  const projectRegion = searchParams.get("projectRegion");
  const period = searchParams.get("period");
  const projectStatus = searchParams.get("projectStatus");

  const projects = useProjects({
    page,
    projectStatus,
    corporateType,
    maxRecruitNumber,
    minRecruitNumber,
    period,
    artCategories: artCategories ? artCategories.split(",") : [],
    projectCategories: projectCategories ? projectCategories.split(",") : [],
    projectRegion: projectRegion ? [projectRegion] : [],
  });

  return (
    <div className="flex gap-20">
      <ProjectsSidebar />

      <div className="flex-1">
        <ProjectTabs />
        <FiltersBar />

        <div className="mt-4">
          <ProjectList projects={projects.data?.content ?? []} />

          {projects.data && (
            <Pagination
              currentPage={Number(page)}
              totalPages={projects.data.page.totalPages}
              onPageChange={(newPage: number) => {
                const newParams = new URLSearchParams(searchParams);
                newParams.set("page", newPage.toString());
                router.push(`?${newParams.toString()}`, { scroll: false });
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Container className="mt-10">
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsContent />
      </Suspense>
    </Container>
  );
}
