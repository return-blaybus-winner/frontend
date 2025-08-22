"use client";

import ProjectsSidebar from "./_components/projects-sidebar";
import ProjectsGrid from "./_components/projects-grid";
import { mockProjects } from "./_constants/mock-data";
import { useProjectFilters } from "./_hooks/use-project-filters";
import Container from "@/app/_components/container";

export default function ProjectsPage() {
  const {
    searchTerm,
    currentPage,
    sortBy,
    activeCategory,
    likedProjects,
    expandedFilters,
    selectedFilters,
    currentProjects,
    totalPages,
    setSearchTerm,
    setCurrentPage,
    setSortBy,
    setActiveCategory,
    toggleFilter,
    toggleLike,
    handleFilterChange,
  } = useProjectFilters({ projects: mockProjects });

  return (
    <Container className="mt-10">
      <div className="flex gap-8">
        <ProjectsSidebar
          searchTerm={searchTerm}
          expandedFilters={expandedFilters}
          selectedFilters={selectedFilters}
          onSearchChange={setSearchTerm}
          onToggleFilter={toggleFilter}
          onFilterChange={handleFilterChange}
        />

        <ProjectsGrid
          projects={currentProjects}
          currentPage={currentPage}
          totalPages={totalPages}
          activeCategory={activeCategory}
          sortBy={sortBy}
          likedProjects={likedProjects}
          onPageChange={setCurrentPage}
          onCategoryChange={setActiveCategory}
          onSortChange={setSortBy}
          onToggleLike={toggleLike}
        />
      </div>
    </Container>
  );
}
