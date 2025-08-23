import { BASE_URL } from "@/app/_constants/api";
import { Category } from "@/app/_models/category";

export async function getArtCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories/art/tree`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
