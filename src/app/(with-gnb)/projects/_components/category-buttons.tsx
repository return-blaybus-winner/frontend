import { Button } from "@/components/ui/button";
import { CATEGORIES } from "../_constants/projects";
import { cn } from "@/lib/utils";

interface CategoryButtonsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryButtons({
  activeCategory,
  onCategoryChange,
}: CategoryButtonsProps) {
  return (
    <div className="flex gap-2 flex-wrap items-center">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          size={"sm"}
          variant={"outline"}
          className={cn(
            "px-5 py-1 rounded-full",
            activeCategory === category && "bg-black text-white hover:bg-black"
          )}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
