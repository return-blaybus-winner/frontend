import { getProject } from "@/app/_api/project";
import { useQuery } from "@tanstack/react-query";

export const PROJECTS_QUERY_KEY = ["project"] as const;

export function useProject(id: string) {
  return useQuery({
    queryKey: [...PROJECTS_QUERY_KEY, id],
    queryFn: () => getProject(id),
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    enabled: !!id,
  });
}
