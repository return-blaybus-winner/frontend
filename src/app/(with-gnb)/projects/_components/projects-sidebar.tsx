import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import FilterSection, { FilterOption } from "./filter-section";
import CategoryFilter from "./category-filter";
import {
  TYPE_OPTIONS,
  RECRUIT_COUNT_OPTIONS,
  BUDGET_OPTIONS,
  LOCATION_OPTIONS,
  DURATION_OPTIONS,
  FILTER_SECTIONS
} from "../_constants/projects";

interface ProjectsSidebarProps {
  searchTerm: string;
  expandedFilters: Record<string, boolean>;
  selectedFilters: Record<string, boolean>;
  onSearchChange: (value: string) => void;
  onToggleFilter: (filterName: string) => void;
  onFilterChange: (filterKey: string, checked: boolean) => void;
}

export default function ProjectsSidebar({
  searchTerm,
  expandedFilters,
  selectedFilters,
  onSearchChange,
  onToggleFilter,
  onFilterChange
}: ProjectsSidebarProps) {
  return (
    <div className="w-80 bg-white rounded-lg p-6 h-fit">
      {/* Search */}
      <div className="mb-6">
        <h3 className="font-semibold mb-3">필터</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="검색어를 입력해주세요"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* 분야 */}
      <div className="mb-6">
        <button 
          onClick={() => onToggleFilter('분야')}
          className="flex items-center justify-between w-full py-2 font-medium"
        >
          {FILTER_SECTIONS.분야}
          {expandedFilters.분야 ? 
            <span className="w-4 h-4">▲</span> : 
            <span className="w-4 h-4">▼</span>
          }
        </button>
        {expandedFilters.분야 && (
          <div className="mt-3">
            <CategoryFilter
              expandedFilters={expandedFilters}
              selectedFilters={selectedFilters}
              onToggleExpanded={onToggleFilter}
              onFilterChange={onFilterChange}
            />
          </div>
        )}
      </div>

      {/* 유형 */}
      <FilterSection
        title={FILTER_SECTIONS.유형}
        isExpanded={expandedFilters.유형}
        onToggle={() => onToggleFilter('유형')}
      >
        {TYPE_OPTIONS.map((type) => (
          <FilterOption key={type} label={type} />
        ))}
      </FilterSection>

      {/* 모집인원 */}
      <FilterSection
        title={FILTER_SECTIONS.모집인원}
        isExpanded={expandedFilters.모집인원}
        onToggle={() => onToggleFilter('모집인원')}
      >
        {RECRUIT_COUNT_OPTIONS.map((count) => (
          <FilterOption key={count} label={count} />
        ))}
      </FilterSection>

      {/* 예산 */}
      <FilterSection
        title={FILTER_SECTIONS.예산}
        isExpanded={expandedFilters.예산}
        onToggle={() => onToggleFilter('예산')}
      >
        {BUDGET_OPTIONS.map((budget) => (
          <FilterOption key={budget} label={budget} />
        ))}
      </FilterSection>

      {/* 지역 */}
      <FilterSection
        title={FILTER_SECTIONS.지역}
        isExpanded={expandedFilters.지역}
        onToggle={() => onToggleFilter('지역')}
      >
        {LOCATION_OPTIONS.map((location) => (
          <FilterOption key={location} label={location} />
        ))}
      </FilterSection>

      {/* 기간 */}
      <FilterSection
        title={FILTER_SECTIONS.기간}
        isExpanded={expandedFilters.기간}
        onToggle={() => onToggleFilter('기간')}
      >
        {DURATION_OPTIONS.map((duration) => (
          <FilterOption key={duration} label={duration} />
        ))}
      </FilterSection>
    </div>
  );
}