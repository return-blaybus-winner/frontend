"use client";

import { useMemo, useEffect } from "react";
import ProjectsSidebar from "./_components/projects-sidebar";
import ProjectTabs from "./_components/project-tabs";
import FiltersBar from "./_components/filters-bar";
import ResultsInfo from "./_components/results-info";
import ProjectList from "./_components/project-list";
import Pagination from "./_components/pagination";
import { mockProjects } from "./_constants/mock-data";
import { useProjectSearch } from "./_hooks/use-project-search";
import { useProjectUI } from "./_hooks/use-project-ui";
import {
  filterAndSortProjects,
  paginateProjects,
} from "./_hooks/project-filters.utils";
import { ITEMS_PER_PAGE } from "./_constants/projects";
import Container from "@/app/_components/container";
import { Project } from "@/app/_models/project";

export default function ProjectsPage() {
  // Individual hooks for different concerns
  const searchHook = useProjectSearch();
  const uiHook = useProjectUI();

  // Mock data (will be replaced with react-query later)
  const projects = mockProjects;
  const isLoading = false;
  const error = null;

  // Computed data
  const searchParams = searchHook.getSearchParams();

  const filteredAndSortedProjects = useMemo(() => {
    if (!projects.length || isLoading || error) return [];
    return filterAndSortProjects(projects, searchParams);
  }, [projects, searchParams, isLoading, error]);

  const { paginatedItems: currentProjects, totalPages } = useMemo(() => {
    return paginateProjects(
      filteredAndSortedProjects,
      uiHook.currentPage,
      ITEMS_PER_PAGE
    );
  }, [filteredAndSortedProjects, uiHook.currentPage]);

  const filteredCount = filteredAndSortedProjects.length;

  // Reset page when search params change
  const { resetPage } = uiHook;
  useEffect(() => {
    resetPage();
  }, [
    searchHook.searchTerm,
    searchHook.activeCategory,
    searchHook.selectedFilters,
    resetPage,
  ]);

  if (error) {
    return (
      <Container className="mt-10">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-red-600 mb-2">
              오류가 발생했습니다
            </h2>
            <p className="text-gray-600">
              프로젝트를 불러오는 중 문제가 발생했습니다.
            </p>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className="mt-10">
      <div className="flex gap-8">
        <ProjectsSidebar
          expandedFilters={uiHook.expandedFilters}
          selectedFilters={searchHook.selectedFilters}
          onToggleFilter={uiHook.toggleFilter}
          onFilterChange={searchHook.handleFilterChange}
        />

        <div className="flex-1">
          <ProjectTabs
            activeTab={uiHook.activeTab}
            onTabChange={uiHook.setActiveTab}
          />

          <FiltersBar
            activeCategory={searchHook.activeCategory}
            sortBy={searchHook.sortBy}
            onCategoryChange={searchHook.setActiveCategory}
            onSortChange={searchHook.setSortBy}
          />

          <div className="mt-4">
            <ResultsInfo filteredCount={filteredCount} />

            <ProjectList
              projects={currentProjects as Project[]}
              likedProjects={uiHook.likedProjects}
              onToggleLike={uiHook.toggleLike}
              isLoading={isLoading}
            />

            {!isLoading && totalPages > 1 && (
              <Pagination
                currentPage={uiHook.currentPage}
                totalPages={totalPages}
                onPageChange={uiHook.setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
