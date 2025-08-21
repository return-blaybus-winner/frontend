"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronUp, Heart, Search } from "lucide-react";

const mockProjects = [
  {
    id: 1,
    title: "브랜드 협업 작가 모집",
    description: "진품과 컬렉션 아이템의 동시 어토 디자인 — 도메 어토 프로젝트",
    company: "GreenWave Studio",
    category: "시각디자인",
    budget: "모집 마감 D-10",
    duration: "2일 전",
    location: "서울",
    tags: ["브랜딩", "그래픽"],
    deadline: "2024-09-01",
    image: "/api/placeholder/400/200",
    isLiked: false,
    companyType: "studio"
  },
  {
    id: 2,
    title: "공예 협업 참여자 모집",
    description: "일상을 돌봐주는 재주는 실새 — 브랜드 아트 플러그먼트디자인",
    company: "Echo Electronics",
    category: "시각디자인",
    budget: "모집 마감 D-11",
    duration: "2일 전", 
    location: "서울",
    tags: ["공예", "협업"],
    deadline: "2024-09-15",
    image: "/api/placeholder/400/200",
    isLiked: false,
    companyType: "company"
  },
  {
    id: 3,
    title: "아트 브랜드 협업 작가 모집",
    description: "짚은 순간이 완성되는 많이까지 — 공예 협업 프로젝트",
    company: "기업 회사 A",
    category: "시각디자인", 
    budget: "모집 마감 D-9",
    duration: "2일 전",
    location: "경기",
    tags: ["아트", "브랜드"],
    deadline: "2024-08-30",
    image: "/api/placeholder/400/200",
    isLiked: false,
    companyType: "company"
  },
  {
    id: 4,
    title: "도예/공예 협업 작가 모집",
    description: "시각적 영향 쥐, 실험 탈은 그냥 — 도메 협업 프로젝트",
    company: "기업 회사 A",
    category: "시각디자인",
    budget: "모집 마감 D-18",
    duration: "2일 전",
    location: "경기",
    tags: ["도예", "공예"],
    deadline: "2024-10-01",
    image: "/api/placeholder/400/200", 
    isLiked: false,
    companyType: "company"
  },
  {
    id: 5,
    title: "도예/공예 작가님들 구합니다.",
    description: "출하적 바이니스는 성갈 에쟁 — 도메 & 공예 협업 프로젝트",
    company: "Studio JKD",
    category: "시각디자인",
    budget: "모집 마감 D-13",
    duration: "2일 전",
    location: "경우주",
    tags: ["도예", "공예"],
    deadline: "2024-09-20",
    image: "/api/placeholder/400/200",
    isLiked: false,
    companyType: "studio"
  },
  {
    id: 6,
    title: "헨드크래프트 작가 모집",
    description: "순간에서 만들어내는 일상의 가치 — 공예의 브랜드크래프트 아듬",
    company: "기업 회사 A", 
    category: "시각디자인",
    budget: "모집 마감 D-12",
    duration: "2일 전",
    location: "경우주",
    tags: ["핸드크래프트"],
    deadline: "2024-09-25",
    image: "/api/placeholder/400/200",
    isLiked: false,
    companyType: "company"
  }
];

export default function ProjectsPage() {
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
    // 시각디자인 하위
    시각디자인: true,
    회화: false,
    조소: false,
    한지: false,
    사진: false,
    디지털아트: false,
    // 공예 하위
    도예: false,
    금속공예: false,
    목공예: false,
    섬유공예: false,
    // 문학창작 하위
    시: false,
    소설: false,
    수필: false,
    // 파포먼스 하위
    연극: false,
    무용: false,
    음악: false
  });

  const filterCategories = {
    시각디자인: ['시각디자인', '회화', '조소', '한지', '사진', '디지털아트'],
    공예: ['도예', '금속공예', '목공예', '섬유공예'],
    문학창작: ['시', '소설', '수필'],
    파포먼스: ['연극', '무용', '음악']
  };

  const itemsPerPage = 6;
  const categories = ["전체", "작조", "업조", "글쓰", "성디바술"];

  const filteredProjects = mockProjects.filter((project) => {
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

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "최신순") {
      return new Date(b.deadline).getTime() - new Date(a.deadline).getTime();
    } else if (sortBy === "인기순") {
      return b.id - a.id; // Mock: higher ID = more popular
    } else if (sortBy === "마감순") {
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
    return 0;
  });

  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const currentProjects = sortedProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">프로젝트 찾기</h1>
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setActiveTab("모집 중")}
                className={`px-4 py-2 ${activeTab === "모집 중" 
                  ? "bg-white border-b-2 border-orange-500 text-black font-medium" 
                  : "text-gray-500"}`}
              >
                모집 중
              </button>
              <button 
                onClick={() => setActiveTab("진행")}
                className={`px-4 py-2 ${activeTab === "진행" 
                  ? "bg-white border-b-2 border-orange-500 text-black font-medium" 
                  : "text-gray-500"}`}
              >
                진행
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-80 bg-white rounded-lg p-6 h-fit">
            {/* Search */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">필터</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="검색어를 입력해주세요"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            {/* 분야 */}
            <div className="mb-6">
              <button 
                onClick={() => toggleFilter('분야')}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                분야
                {expandedFilters.분야 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedFilters.분야 && (
                <div className="mt-3">
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 pl-4">
                      <Checkbox 
                        checked={Object.values(selectedFilters).every(v => !v)}
                        onCheckedChange={() => {
                          const newFilters = Object.keys(selectedFilters).reduce((acc, key) => {
                            acc[key as keyof typeof selectedFilters] = false;
                            return acc;
                          }, {} as typeof selectedFilters);
                          setSelectedFilters(newFilters);
                        }}
                      />
                      <span className="text-sm">전체</span>
                    </label>
                    
                    {/* 시각디자인 섭션 */}
                    <div className="pl-4">
                      <button 
                        onClick={() => toggleFilter('시각디자인')}
                        className="flex items-center justify-between w-full py-2 font-medium text-orange-500"
                      >
                        시각디자인
                        {expandedFilters.시각디자인 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {expandedFilters.시각디자인 && (
                        <div className="mt-2 pl-4">
                          <div className="space-y-2">
                            {filterCategories.시각디자인.map((category) => (
                              <label key={category} className="flex items-center space-x-2">
                                <Checkbox 
                                  checked={selectedFilters[category as keyof typeof selectedFilters]}
                                  onCheckedChange={(checked) => handleFilterChange(category, !!checked)}
                                />
                                <span className="text-sm">{category}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* 공예 섭션 */}
                    <div className="pl-4">
                      <button 
                        onClick={() => toggleFilter('공예')}
                        className="flex items-center justify-between w-full py-2 font-medium"
                      >
                        공예
                        {expandedFilters.공예 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {expandedFilters.공예 && (
                        <div className="mt-2 pl-4">
                          <div className="space-y-2">
                            {filterCategories.공예.map((category) => (
                              <label key={category} className="flex items-center space-x-2">
                                <Checkbox 
                                  checked={selectedFilters[category as keyof typeof selectedFilters]}
                                  onCheckedChange={(checked) => handleFilterChange(category, !!checked)}
                                />
                                <span className="text-sm">{category}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* 문학창작 섭션 */}
                    <div className="pl-4">
                      <button 
                        onClick={() => toggleFilter('문학창작')}
                        className="flex items-center justify-between w-full py-2 font-medium"
                      >
                        문학창작
                        {expandedFilters.문학창작 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {expandedFilters.문학창작 && (
                        <div className="mt-2 pl-4">
                          <div className="space-y-2">
                            {filterCategories.문학창작.map((category) => (
                              <label key={category} className="flex items-center space-x-2">
                                <Checkbox 
                                  checked={selectedFilters[category as keyof typeof selectedFilters]}
                                  onCheckedChange={(checked) => handleFilterChange(category, !!checked)}
                                />
                                <span className="text-sm">{category}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* 파포먼스 섭션 */}
                    <div className="pl-4">
                      <button 
                        onClick={() => toggleFilter('파포먼스')}
                        className="flex items-center justify-between w-full py-2 font-medium"
                      >
                        파포먼스
                        {expandedFilters.파포먼스 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {expandedFilters.파포먼스 && (
                        <div className="mt-2 pl-4">
                          <div className="space-y-2">
                            {filterCategories.파포먼스.map((category) => (
                              <label key={category} className="flex items-center space-x-2">
                                <Checkbox 
                                  checked={selectedFilters[category as keyof typeof selectedFilters]}
                                  onCheckedChange={(checked) => handleFilterChange(category, !!checked)}
                                />
                                <span className="text-sm">{category}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>





            {/* 유형 */}
            <div className="mb-6">
              <button 
                onClick={() => toggleFilter('유형')}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                유형
                {expandedFilters.유형 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedFilters.유형 && (
                <div className="mt-3 pl-4">
                  <div className="space-y-2">
                    {['개인', '팀', '기업'].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 모집인원 */}
            <div className="mb-6">
              <button 
                onClick={() => toggleFilter('모집인원')}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                모집인원
                {expandedFilters.모집인원 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedFilters.모집인원 && (
                <div className="mt-3 pl-4">
                  <div className="space-y-2">
                    {['1명', '2-5명', '6-10명', '10명 이상'].map((count) => (
                      <label key={count} className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">{count}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 예산 */}
            <div className="mb-6">
              <button 
                onClick={() => toggleFilter('예산')}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                예산
                {expandedFilters.예산 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedFilters.예산 && (
                <div className="mt-3 pl-4">
                  <div className="space-y-2">
                    {['100만원 이하', '100-300만원', '300-500만원', '500-1000만원', '1000만원 이상'].map((budget) => (
                      <label key={budget} className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">{budget}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 지역 */}
            <div className="mb-6">
              <button 
                onClick={() => toggleFilter('지역')}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                지역
                {expandedFilters.지역 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedFilters.지역 && (
                <div className="mt-3 pl-4">
                  <div className="space-y-2">
                    {['서울', '경기', '부산', '대구', '인천', '광주', '대전', '울산', '온라인'].map((location) => (
                      <label key={location} className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 기간 */}
            <div className="mb-6">
              <button 
                onClick={() => toggleFilter('기간')}
                className="flex items-center justify-between w-full py-2 font-medium"
              >
                기간
                {expandedFilters.기간 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              {expandedFilters.기간 && (
                <div className="mt-3 pl-4">
                  <div className="space-y-2">
                    {['1주 이내', '1주-1개월', '1-3개월', '3-6개월', '6개월 이상'].map((duration) => (
                      <label key={duration} className="flex items-center space-x-2">
                        <Checkbox />
                        <span className="text-sm">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top bar with sorting */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  {categories.map((category) => (
                    <button 
                      key={category}
                      onClick={() => setActiveCategory(category)}
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
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="최신순">최신순</SelectItem>
                    <SelectItem value="인기순">인기순</SelectItem>
                    <SelectItem value="마감순">마감순</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {currentProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400"></div>
                    <button 
                      onClick={() => toggleLike(project.id)}
                      className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                    >
                      <Heart 
                        className={`w-4 h-4 ${
                          likedProjects.has(project.id) 
                            ? "fill-red-500 text-red-500" 
                            : "text-gray-600"
                        }`} 
                      />
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          project.companyType === 'studio' ? 'bg-red-500' : 'bg-gray-400'
                        }`}></div>
                        <span className="text-sm text-gray-600">{project.company}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-red-500 font-medium">{project.budget}</span>
                      <div className="flex items-center gap-4 text-gray-500">
                        <span>{project.duration}</span>
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              {/* Previous button */}
              {currentPage > 1 && (
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="text-gray-500 hover:text-gray-700 px-2"
                >
                  &lt;
                </button>
              )}
              
              {/* Page numbers */}
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded ${
                      currentPage === pageNum 
                        ? 'bg-orange-500 text-white' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              {/* Next button */}
              {currentPage < totalPages && (
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="text-gray-500 hover:text-gray-700 px-2"
                >
                  &gt;
                </button>
              )}
            </div>

            {currentProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  검색 조건에 맞는 프로젝트가 없습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
