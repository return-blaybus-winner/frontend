import { BASE_URL } from "@/app/_constants/api";
import { Category } from "../_models/category";

export async function getProjectCategories(): Promise<Category[]> {
  const response = await fetch(`${BASE_URL}/categories/project/tree`, {
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
