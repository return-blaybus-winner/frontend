import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  category: string;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryButton({
  id,
  category,
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <Button
      key={category}
      onClick={() => onCategoryChange(category)}
      size={"sm"}
      variant={"outline"}
      className={cn(
        "px-5 py-1 rounded-full",
        activeCategory === id && "bg-black text-white hover:bg-black"
      )}
    >
      {category}
    </Button>
  );
}
