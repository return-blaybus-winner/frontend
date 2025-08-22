"use client";

import ProjectsHeader from "./_components/projects-header";
import ProjectsSidebar from "./_components/projects-sidebar";
import ProjectsGrid from "./_components/projects-grid";
import { mockProjects } from "./_constants/mock-data";
import { useProjectFilters } from "./_hooks/use-project-filters";

export default function ProjectsPage() {
  const {
    searchTerm,
    currentPage,
    sortBy,
    activeTab,
    activeCategory,
    likedProjects,
    expandedFilters,
    selectedFilters,
    currentProjects,
    totalPages,
    setSearchTerm,
    setCurrentPage,
    setSortBy,
    setActiveTab,
    setActiveCategory,
    toggleFilter,
    toggleLike,
    handleFilterChange
  } = useProjectFilters({ projects: mockProjects });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <ProjectsHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

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
      </div>
    </div>
  );
}