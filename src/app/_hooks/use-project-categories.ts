import { useQuery } from "@tanstack/react-query";
import { getProjectCategories } from "../_api/project-category";

export const PROJECT_CATEGORIES_QUERY_KEY = ["project-categories"] as const;

export function useProjectCategories() {
  return useQuery({
    queryKey: PROJECT_CATEGORIES_QUERY_KEY,
    queryFn: getProjectCategories,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
}
