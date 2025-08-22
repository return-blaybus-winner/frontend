import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProjectCard from "./project-card";
import Pagination from "./pagination";
import { Project } from "../_constants/mock-data";
import { CATEGORIES, SORT_OPTIONS, TABS } from "../_constants/projects";
import { useState } from "react";

interface ProjectsGridProps {
  projects: Project[];
  currentPage: number;
  totalPages: number;
  activeCategory: string;
  sortBy: string;
  likedProjects: Set<number>;
  onPageChange: (page: number) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  onToggleLike: (projectId: number) => void;
}

export default function ProjectsGrid({
  projects,
  currentPage,
  totalPages,
  activeCategory,
  sortBy,
  likedProjects,
  onPageChange,
  onCategoryChange,
  onSortChange,
  onToggleLike,
}: ProjectsGridProps) {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
  return (
    <div className="flex-1">
      <div className="flex items-center gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 ${
              activeTab === tab
                ? "bg-white border-b-2 border-orange-500 text-black font-medium"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Top bar with sorting */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`px-3 py-1 text-sm rounded ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isLiked={likedProjects.has(project.id)}
            onToggleLike={onToggleLike}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      {projects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            검색 조건에 맞는 프로젝트가 없습니다.
          </p>
        </div>
      )}
    </div>
  );
}
