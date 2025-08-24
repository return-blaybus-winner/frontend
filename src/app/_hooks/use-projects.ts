import { getProjects, GetProjectsParams } from "@/app/_api/project";
import { useQuery } from "@tanstack/react-query";

export const PROJECTS_QUERY_KEY = ["projects"] as const;

export function useProjects(params: GetProjectsParams) {
  return useQuery({
    queryKey: [...PROJECTS_QUERY_KEY, params],
    queryFn: () => getProjects(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}
