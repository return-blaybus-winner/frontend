"use client";

import { useState } from "react";

export function useProjectUI() {
  const [currentPage, setCurrentPage] = useState(1);
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
    기간: false,
  });

  const toggleFilter = (filterName: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName as keyof typeof prev],
    }));
  };

  const toggleLike = (projectId: number) => {
    setLikedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const resetPage = () => setCurrentPage(1);

  return {
    currentPage,
    likedProjects,
    expandedFilters,
    setCurrentPage,
    toggleFilter,
    toggleLike,
    resetPage,
  };
}
