import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  onFilterChange,
}: CategoryFilterProps) {
  const handleCategorySelectAll = (
    categoryKey: string,
    subcategories: readonly string[]
  ) => {
    const allSubcategoriesSelected = subcategories.every(
      (category) => selectedFilters[category as keyof typeof selectedFilters]
    );

    subcategories.forEach((category) => {
      onFilterChange(category, !allSubcategoriesSelected);
    });
  };

  const isCategoryAllSelected = (subcategories: readonly string[]) => {
    return subcategories.every(
      (category) => selectedFilters[category as keyof typeof selectedFilters]
    );
  };

  const expandedCategoryValues = Object.keys(expandedFilters).filter(
    (key) =>
      expandedFilters[key] &&
      FILTER_CATEGORIES[key as keyof typeof FILTER_CATEGORIES]
  );

  return (
    <Accordion type="multiple" value={expandedCategoryValues}>
      {Object.entries(FILTER_CATEGORIES).map(([categoryKey, subcategories]) => (
        <AccordionItem
          key={categoryKey}
          value={categoryKey}
          className="border-0"
        >
          <div className="inline-flex w-full items-center space-x-6 px-4">
            <Checkbox
              checked={isCategoryAllSelected(subcategories)}
              onCheckedChange={() => {
                handleCategorySelectAll(categoryKey, subcategories);
              }}
              onClick={(e) => e.stopPropagation()}
            />
            <AccordionTrigger
              onClick={() => onToggleExpanded(categoryKey)}
              className={`flex justify-between hover:no-underline`}
            >
              <span className="text-gray-800 flex-1">{categoryKey}</span>
            </AccordionTrigger>
          </div>
          <AccordionContent className="mt-2 bg-gray-200 pb-0">
            {subcategories.map((category) => (
              <label
                key={category}
                className="flex items-center space-x-6 h-12 px-4"
              >
                <Checkbox
                  checked={
                    selectedFilters[category as keyof typeof selectedFilters]
                  }
                  onCheckedChange={(checked) =>
                    onFilterChange(category, !!checked)
                  }
                  className="border-[#999999] data-[state=checked]:bg-[#999999] data-[state=checked]:text-white"
                />
                <span className="text-gray-700">{category}</span>
              </label>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
