import { Category } from "@/app/_models/category";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CategoryButtonsProps {
  categories: Category[];
  activeCategories: string[];
  onCategoryChange: (category: Category) => void;
}

export default function CategoryButtons({
  categories,
  activeCategories,
  onCategoryChange,
}: CategoryButtonsProps) {
  return (
    <div className="flex gap-2 flex-wrap items-center">
      {categories.map((category) => (
        <Button
          key={category.code}
          onClick={() => onCategoryChange(category)}
          size={"sm"}
          variant={"outline"}
          className={cn(
            "px-5 py-1 rounded-full",
            activeCategories.includes(category.code) &&
              "bg-black text-white hover:bg-black"
          )}
        >
          {category.description}
        </Button>
      ))}
    </div>
  );
}
