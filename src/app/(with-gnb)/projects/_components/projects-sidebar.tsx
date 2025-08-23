import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FilterOption } from "./filter-section";
import CategoryFilter from "./category-filter";
import {
  TYPE_OPTIONS,
  RECRUIT_COUNT_OPTIONS,
  BUDGET_OPTIONS,
  LOCATION_OPTIONS,
  DURATION_OPTIONS,
} from "../_constants/projects";

interface ProjectsSidebarProps {
  expandedFilters: Record<string, boolean>;
  selectedFilters: Record<string, boolean>;
  onToggleFilter: (filterName: string) => void;
  onFilterChange: (filterKey: string, checked: boolean) => void;
}

export default function ProjectsSidebar({
  expandedFilters,
  selectedFilters,
  onToggleFilter,
  onFilterChange,
}: ProjectsSidebarProps) {
  const expandedValues = Object.keys(expandedFilters).filter(
    (key) => expandedFilters[key]
  );

  return (
    <div className="w-[300px] bg-white rounded-lg h-fit">
      <h1 className="text-[24px] flex items-center h-20 font-semibold mb-12">
        프로젝트 찾기
      </h1>
      <div className="h-[44px] flex items-center font-semibold text-base">
        필터
      </div>

      <Accordion type="multiple" value={expandedValues} className="w-full">
        <AccordionItem value="분야" className="border-0">
          <AccordionTrigger
            onClick={() => onToggleFilter("분야")}
            className="py-2 font-medium hover:no-underline"
          >
            분야
          </AccordionTrigger>
          <AccordionContent>
            <CategoryFilter
              expandedFilters={expandedFilters}
              selectedFilters={selectedFilters}
              onToggleExpanded={onToggleFilter}
              onFilterChange={onFilterChange}
            />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="유형" className="border-0">
          <AccordionTrigger
            onClick={() => onToggleFilter("유형")}
            className="py-2 font-medium hover:no-underline"
          >
            유형
          </AccordionTrigger>
          <AccordionContent>
            {TYPE_OPTIONS.map((type) => (
              <FilterOption key={type} label={type} />
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="모집인원" className="border-0">
          <AccordionTrigger
            onClick={() => onToggleFilter("모집인원")}
            className="py-2 font-medium hover:no-underline"
          >
            모집인원
          </AccordionTrigger>
          <AccordionContent>
            {RECRUIT_COUNT_OPTIONS.map((count) => (
              <FilterOption key={count} label={count} />
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="예산" className="border-0">
          <AccordionTrigger
            onClick={() => onToggleFilter("예산")}
            className="py-2 font-medium hover:no-underline"
          >
            예산
          </AccordionTrigger>
          <AccordionContent>
            {BUDGET_OPTIONS.map((budget) => (
              <FilterOption key={budget} label={budget} />
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="지역" className="border-0">
          <AccordionTrigger
            onClick={() => onToggleFilter("지역")}
            className="py-2 font-medium hover:no-underline"
          >
            지역
          </AccordionTrigger>
          <AccordionContent>
            {LOCATION_OPTIONS.map((location) => (
              <FilterOption key={location} label={location} />
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="기간" className="border-0">
          <AccordionTrigger
            onClick={() => onToggleFilter("기간")}
            className="py-2 font-medium hover:no-underline"
          >
            기간
          </AccordionTrigger>
          <AccordionContent>
            {DURATION_OPTIONS.map((duration) => (
              <FilterOption key={duration} label={duration} />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
