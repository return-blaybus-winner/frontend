"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const mockProjects = [
  {
    id: 1,
    title: "브랜드 일러스트 제작",
    description: "신제품 론칭을 위한 일러스트 디자인 작업",
    company: "테크 스타트업 A",
    category: "일러스트",
    budget: "300-500만원",
    duration: "2주",
    location: "서울",
    tags: ["일러스트", "브랜딩", "디지털"],
    deadline: "2024-09-01",
  },
  {
    id: 2,
    title: "도자기 작품 전시 기획",
    description: "카페 공간을 위한 도예 작품 제작 및 전시",
    company: "카페 브랜드 B",
    category: "도예",
    budget: "200-300만원",
    duration: "4주",
    location: "부산",
    tags: ["도예", "전시", "공간"],
    deadline: "2024-09-15",
  },
  {
    id: 3,
    title: "핸드메이드 제품 디자인",
    description: "친환경 라이프스타일 브랜드 제품 디자인",
    company: "친환경 브랜드 C",
    category: "공예",
    budget: "400-600만원",
    duration: "3주",
    location: "온라인",
    tags: ["공예", "친환경", "제품디자인"],
    deadline: "2024-08-30",
  },
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const filteredProjects = mockProjects.filter((project) => {
    return (
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (categoryFilter === "" || project.category === categoryFilter) &&
      (locationFilter === "" || project.location === locationFilter)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">프로젝트 찾기</h1>
          <p className="text-gray-600">당신에게 맞는 프로젝트를 찾아보세요</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Input
                placeholder="프로젝트 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="예술 분야" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="일러스트">일러스트</SelectItem>
                  <SelectItem value="도예">도예</SelectItem>
                  <SelectItem value="공예">공예</SelectItem>
                  <SelectItem value="회화">회화</SelectItem>
                  <SelectItem value="조각">조각</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={budgetFilter} onValueChange={setBudgetFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="예산 범위" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="100만원 이하">100만원 이하</SelectItem>
                  <SelectItem value="100-300만원">100-300만원</SelectItem>
                  <SelectItem value="300-500만원">300-500만원</SelectItem>
                  <SelectItem value="500만원 이상">500만원 이상</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="지역" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="서울">서울</SelectItem>
                  <SelectItem value="부산">부산</SelectItem>
                  <SelectItem value="대구">대구</SelectItem>
                  <SelectItem value="인천">인천</SelectItem>
                  <SelectItem value="온라인">온라인</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500">by {project.company}</p>
                </div>
                <Badge variant="secondary">{project.category}</Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium">예산:</span> {project.budget}
                </div>
                <div>
                  <span className="font-medium">기간:</span> {project.duration}
                </div>
                <div>
                  <span className="font-medium">지역:</span> {project.location}
                </div>
                <div>
                  <span className="font-medium">마감:</span> {project.deadline}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <Button variant="outline" asChild>
                  <Link href={`/projects/${project.id}`}>자세히 보기</Link>
                </Button>
                <Button asChild>
                  <Link href={`/projects/${project.id}/apply`}>지원하기</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              검색 조건에 맞는 프로젝트가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
