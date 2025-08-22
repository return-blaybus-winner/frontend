"use client";

import { useMemo, useEffect } from "react";
import { Project } from "../_constants/mock-data";
import { ITEMS_PER_PAGE } from "../_constants/projects";
import { useProjectSearch } from "./use-project-search";
import { useProjectUI } from "./use-project-ui";
import { filterAndSortProjects, paginateProjects } from "./project-filters.utils";

interface UseProjectFiltersProps {
  projects?: Project[];
  isLoading?: boolean;
  error?: Error | null;
}

export function useProjectFilters({ 
  projects = [], 
  isLoading = false, 
  error = null 
}: UseProjectFiltersProps) {
  const searchHook = useProjectSearch();
  const uiHook = useProjectUI();
  
  const searchParams = searchHook.getSearchParams();
  
  const filteredAndSortedProjects = useMemo(() => {
    if (!projects.length || isLoading || error) return [];
    
    return filterAndSortProjects(projects, searchParams);
  }, [projects, searchParams, isLoading, error]);

  const { paginatedItems: currentProjects, totalPages } = useMemo(() => {
    return paginateProjects(filteredAndSortedProjects, uiHook.currentPage, ITEMS_PER_PAGE);
  }, [filteredAndSortedProjects, uiHook.currentPage]);

  useEffect(() => {
    uiHook.resetPage();
  }, [searchHook.searchTerm, searchHook.activeCategory, searchHook.selectedFilters, uiHook]);

  return {
    // Search state and actions
    ...searchHook,
    
    // UI state and actions  
    ...uiHook,
    
    // Computed data
    currentProjects,
    totalPages,
    filteredCount: filteredAndSortedProjects.length,
    
    // Loading states (for react-query integration)
    isLoading,
    error
  };
}