import { getQueryClient } from "./query-client";
import { getProjectCategories } from "../_api/project-category";
import { PROJECT_CATEGORIES_QUERY_KEY } from "../_hooks/use-project-categories";
import { ART_CATEGORIES_QUERY_KEY } from "@/app/_hooks/use-art-categories";
import { getArtCategories } from "@/app/_api/art-category";

export async function prefetchQueries() {
  const queryClient = getQueryClient();

  await Promise.all([
    await queryClient.prefetchQuery({
      queryKey: PROJECT_CATEGORIES_QUERY_KEY,
      queryFn: getProjectCategories,
      staleTime: 30 * 60 * 1000,
    }),
    await queryClient.prefetchQuery({
      queryKey: ART_CATEGORIES_QUERY_KEY,
      queryFn: getArtCategories,
      staleTime: 30 * 60 * 1000,
    }),
  ]);

  return queryClient;
}
