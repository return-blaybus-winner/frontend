"use client";

import { useState } from "react";

export interface ProjectSearchFilters {
  searchTerm: string;
  sortBy: string;
  activeCategory: string;
  selectedFilters: Record<string, boolean>;
}

export function useProjectSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("최신순");
  const [activeCategory, setActiveCategory] = useState("전체");
  
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

  const handleFilterChange = (filterKey: string, checked: boolean) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterKey]: checked
    }));
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSortBy("최신순");
    setActiveCategory("전체");
    setSelectedFilters({
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
  };

  const getSearchParams = (): ProjectSearchFilters => ({
    searchTerm,
    sortBy,
    activeCategory,
    selectedFilters
  });

  return {
    searchTerm,
    sortBy,
    activeCategory,
    selectedFilters,
    setSearchTerm,
    setSortBy,
    setActiveCategory,
    handleFilterChange,
    resetFilters,
    getSearchParams
  };
}