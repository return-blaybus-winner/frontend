"use client";

import { useState, useMemo } from "react";
import { Project } from "../_constants/mock-data";
import { ITEMS_PER_PAGE } from "../_constants/projects";

interface UseProjectFiltersProps {
  projects: Project[];
}

export function useProjectFilters({ projects }: UseProjectFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("최신순");
  const [activeTab, setActiveTab] = useState("모집 중");
  const [activeCategory, setActiveCategory] = useState("전체");
  const [likedProjects, setLikedProjects] = useState<Set<number>>(new Set());
  
  const [expandedFilters, setExpandedFilters] = useState({
    분야: true,
    시각디자인: true,
    공예: false,
    문학창작: false,
    파포먼스: false,
    유형: false,
    모집인원: false,
    예산: false,
    지역: false,
    기간: false
  });
  
  const [selectedFilters, setSelectedFilters] = useState({
    시각디자인: true,
    회화: false,
    조소: false,
    한지: false,
    사진: false,
    디지털아트: false,
    도예: false,
    금속공예: false,
    목공예: false,
    섬유공예: false,
    시: false,
    소설: false,
    수필: false,
    연극: false,
    무용: false,
    음악: false
  });

  const filteredAndSortedProjects = useMemo(() => {
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
  }, [projects, searchTerm, activeCategory, selectedFilters, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProjects.length / ITEMS_PER_PAGE);
  const currentProjects = filteredAndSortedProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleFilter = (filterName: string) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName as keyof typeof prev]
    }));
  };

  const toggleLike = (projectId: number) => {
    setLikedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const handleFilterChange = (filterKey: string, checked: boolean) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: checked
    }));
  };

  return {
    // State
    searchTerm,
    currentPage,
    sortBy,
    activeTab,
    activeCategory,
    likedProjects,
    expandedFilters,
    selectedFilters,
    
    // Computed
    currentProjects,
    totalPages,
    
    // Actions
    setSearchTerm,
    setCurrentPage,
    setSortBy,
    setActiveTab,
    setActiveCategory,
    toggleFilter,
    toggleLike,
    handleFilterChange
  };
}