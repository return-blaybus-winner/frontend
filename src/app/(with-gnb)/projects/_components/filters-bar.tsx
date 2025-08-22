import CategoryButtons from "./category-buttons";
import SortSelector from "./sort-selector";

interface FiltersBarProps {
  activeCategory: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export default function FiltersBar({ 
  activeCategory, 
  sortBy, 
  onCategoryChange, 
  onSortChange 
}: FiltersBarProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <CategoryButtons 
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
      <div>
        <SortSelector 
          sortBy={sortBy}
          onSortChange={onSortChange}
        />
      </div>
    </div>
  );
}