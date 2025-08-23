import { useQuery } from "@tanstack/react-query";
import { getArtCategories } from "../_api/art-category";

export const ART_CATEGORIES_QUERY_KEY = ["art-categories"] as const;

export function useArtCategories() {
  return useQuery({
    queryKey: ART_CATEGORIES_QUERY_KEY,
    queryFn: getArtCategories,
    staleTime: 30 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });
}

export function useThirdLevelCategories(parentIds: string[]) {
  const { data: artCategories } = useArtCategories();

  const thirdLevelCategories = artCategories?.flatMap((category) =>
    category.children.flatMap((child) => child.children)
  );

  return (
    thirdLevelCategories?.filter(
      (category) =>
        category.parentCode && parentIds.includes(category.parentCode)
    ) || []
  );
}
