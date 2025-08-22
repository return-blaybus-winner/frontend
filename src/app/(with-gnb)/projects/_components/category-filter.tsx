import { ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { FILTER_CATEGORIES } from "../_constants/projects";

interface CategoryFilterProps {
  expandedFilters: Record<string, boolean>;
  selectedFilters: Record<string, boolean>;
  onToggleExpanded: (category: string) => void;
  onFilterChange: (filterKey: string, checked: boolean) => void;
}

export default function CategoryFilter({
  expandedFilters,
  selectedFilters,
  onToggleExpanded,
  onFilterChange
}: CategoryFilterProps) {
  const handleSelectAll = () => {
    const newFilters = Object.keys(selectedFilters).reduce((acc, key) => {
      acc[key as keyof typeof selectedFilters] = false;
      return acc;
    }, {} as typeof selectedFilters);
    Object.keys(newFilters).forEach(key => {
      onFilterChange(key, false);
    });
  };

  return (
    <div className="space-y-2">
      <label className="flex items-center space-x-2 pl-4">
        <Checkbox 
          checked={Object.values(selectedFilters).every(v => !v)}
          onCheckedChange={handleSelectAll}
        />
        <span className="text-sm">전체</span>
      </label>
      
      {Object.entries(FILTER_CATEGORIES).map(([categoryKey, subcategories]) => (
        <div key={categoryKey} className="pl-4">
          <button 
            onClick={() => onToggleExpanded(categoryKey)}
            className={`flex items-center justify-between w-full py-2 font-medium ${
              categoryKey === '시각디자인' ? 'text-orange-500' : ''
            }`}
          >
            {categoryKey}
            {expandedFilters[categoryKey] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          {expandedFilters[categoryKey] && (
            <div className="mt-2 pl-4">
              <div className="space-y-2">
                {subcategories.map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      checked={selectedFilters[category as keyof typeof selectedFilters]}
                      onCheckedChange={(checked) => onFilterChange(category, !!checked)}
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}