import { useThirdLevelCategories } from "@/app/_hooks/use-art-categories";
import CategoryButtons from "./category-buttons";
import { useRouter, useSearchParams } from "next/navigation";

export default function FiltersBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") || "";
  const categoryParams = categoryParam ? categoryParam.split(",") : [];
  const thirdLevelCategories = useThirdLevelCategories(categoryParams);

  const handleCategoryChange = (code: string) => {
    const params = new URLSearchParams(searchParams);

    if (categoryParams.includes(code)) {
      const updatedCategories = categoryParams.filter((cat) => cat !== code);
      if (updatedCategories.length > 0) {
        params.set("category", updatedCategories.join(","));
      } else {
        params.delete("category");
      }
    } else {
      const updatedCategories = [...categoryParams, code];
      params.set("category", updatedCategories.join(","));
    }

    const url = `?${params.toString()}`.replace(/%2C/g, ",");
    router.push(url);
  };

  if (thirdLevelCategories.length === 0) {
    return null;
  }

  return (
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-4 mt-2">
        <CategoryButtons
          categories={thirdLevelCategories}
          activeCategories={categoryParams}
          onCategoryChange={(category) => {
            handleCategoryChange(category.code);
          }}
        />
      </div>
    </div>
  );
}
