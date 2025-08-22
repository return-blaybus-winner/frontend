import { Project } from "../_constants/mock-data";
import { ProjectSearchFilters } from "./use-project-search";

export function filterAndSortProjects(
  projects: Project[],
  filters: ProjectSearchFilters
): Project[] {
  const { searchTerm, activeCategory, selectedFilters, sortBy } = filters;

  const filtered = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "전체" || 
      (activeCategory === "작조" && project.category === "시각디자인") ||
      (activeCategory === "업조" && project.companyType === "company") ||
      (activeCategory === "글쓰" && project.tags.some(tag => tag.includes("문학"))) ||
      (activeCategory === "성디바술" && project.tags.some(tag => tag.includes("디지털")));
    
    const matchesFilter = Object.entries(selectedFilters).some(([key, isSelected]) => {
      if (!isSelected) return false;
      return project.category === key || project.tags.some(tag => tag.includes(key));
    });
    
    return matchesSearch && matchesCategory && (Object.values(selectedFilters).every(v => !v) || matchesFilter);
  });

  return filtered.sort((a, b) => {
    if (sortBy === "최신순") {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    } else if (sortBy === "인기순") {
      return b.id - a.id;
    } else if (sortBy === "마감순") {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
    return 0;
  });
}

export function paginateProjects<T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number
): {
  paginatedItems: T[];
  totalPages: number;
} {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    paginatedItems,
    totalPages
  };
}