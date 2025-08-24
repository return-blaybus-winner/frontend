import { BASE_URL } from "@/app/_constants/api";
import { Page, Project } from "@/app/_models/project";

export async function getProject(id: string): Promise<Project> {
  const response = await fetch(`${BASE_URL}/v0/project${id}`, {
    headers: DEFAULT_HEADERS,
    next: CACHE_CONFIG,
  });

  if (!response.ok) {
    throw new Error("Failed to fetch project");
  }

  return response.json();
}

export type GetProjectsParams = {
  artCategories?: string[] | null;
  projectCategories?: string[] | null;
  projectRegion?: string[] | null;
  minRecruitNumber?: string | null;
  maxRecruitNumber?: string | null;
  period?: string | null;
  projectStatus?: string | null;
  corporateType?: string | null;
  corporateName?: string | null;
  page?: string | null;
  size?: string | null;
};

function buildSearchParams(params: GetProjectsParams) {
  const {
    artCategories,
    projectCategories,
    projectRegion,
    minRecruitNumber,
    maxRecruitNumber,
    period,
    projectStatus,
    corporateType,
    corporateName,
    page = "0",
    size = "6",
  } = params;

  const searchParams = new URLSearchParams();

  searchParams.set("page", page ?? "0");
  searchParams.set("size", size ?? "6");

  if (artCategories?.length)
    searchParams.set("artCategories", artCategories.join(","));
  if (projectCategories?.length)
    searchParams.set("projectCategories", projectCategories.join(","));
  if (projectRegion?.length)
    searchParams.set("projectRegion", projectRegion.join(","));
  if (minRecruitNumber !== undefined && minRecruitNumber !== null)
    searchParams.set("minRecruitNumber", minRecruitNumber);
  if (maxRecruitNumber !== undefined && maxRecruitNumber !== null)
    searchParams.set("maxRecruitNumber", maxRecruitNumber);
  if (period !== undefined && period !== null)
    searchParams.set("period", period);
  if (projectStatus !== undefined && projectStatus !== null)
    searchParams.set("projectStatus", projectStatus);
  if (corporateType !== undefined && corporateType !== null)
    searchParams.set("corporateType", corporateType);
  if (corporateName !== undefined && corporateName !== null)
    searchParams.set("corporateName", corporateName);

  return searchParams;
}

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
} as const;

const CACHE_CONFIG = { revalidate: 3600 } as const;

export async function getProjects(
  params: GetProjectsParams
): Promise<Page<Project>> {
  const searchParams = buildSearchParams(params);

  const response = await fetch(
    `${BASE_URL}/v2/projects?${searchParams.toString()}`,
    {
      headers: DEFAULT_HEADERS,
      next: CACHE_CONFIG,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

export async function createProject(
  project: Project,
  images: File[]
): Promise<Project> {
  const formData = new FormData();
  formData.append("project", JSON.stringify(project));
  images.forEach((image) => {
    formData.append("images", image);
  });

  const response = await fetch(`${BASE_URL}/v0/project`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to create project");
  }

  return response.json();
}

export async function updateProject(
  id: string,
  projectData: Partial<Project>
): Promise<Project> {
  const response = await fetch(`${BASE_URL}/v0/project/${id}`, {
    method: "PUT",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(projectData),
  });

  if (!response.ok) {
    throw new Error("Failed to update project");
  }

  return response.json();
}

export async function deleteProject(id: string): Promise<void> {
  const response = await fetch(`${BASE_URL}/v0/project/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete project");
  }
}
