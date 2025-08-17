"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Calendar, DollarSign } from "lucide-react";

const mockUserProjects = {
  active: [
    {
      id: 1,
      title: "브랜드 일러스트 제작",
      status: "진행중",
      startDate: "2024-08-01",
      endDate: "2024-08-30",
      budget: "400만원",
      client: "테크 스타트업 A",
      progress: 60,
      category: "일러스트"
    },
    {
      id: 2,
      title: "카페 인테리어 도예 작품",
      status: "대기중",
      startDate: "2024-09-01",
      endDate: "2024-09-30",
      budget: "250만원",
      client: "카페 브랜드 B",
      progress: 0,
      category: "도예"
    }
  ],
  completed: [
    {
      id: 3,
      title: "웹사이트 일러스트 패키지",
      status: "완료",
      startDate: "2024-06-01",
      endDate: "2024-06-20",
      budget: "300만원",
      client: "IT 회사 C",
      progress: 100,
      category: "일러스트",
      rating: 4.8,
      review: "정말 만족스러운 작업이었습니다!"
    },
    {
      id: 4,
      title: "제품 패키지 디자인",
      status: "완료",
      startDate: "2024-05-15",
      endDate: "2024-06-05",
      budget: "180만원",
      client: "화장품 브랜드 D",
      progress: 100,
      category: "디자인",
      rating: 5.0,
      review: "창의적이고 완성도 높은 작업이었습니다."
    }
  ],
  applications: [
    {
      id: 5,
      title: "친환경 제품 브랜딩",
      appliedDate: "2024-08-15",
      status: "검토중",
      budget: "500만원",
      company: "친환경 스타트업 E",
      category: "브랜딩"
    },
    {
      id: 6,
      title: "모바일 앱 아이콘 디자인",
      appliedDate: "2024-08-12",
      status: "미선정",
      budget: "150만원",
      company: "게임 회사 F",
      category: "UI/UX"
    }
  ]
};

const StatusBadge = ({ status }: { status: string }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "진행중": return "bg-blue-100 text-blue-800";
      case "대기중": return "bg-yellow-100 text-yellow-800";
      case "완료": return "bg-green-100 text-green-800";
      case "검토중": return "bg-orange-100 text-orange-800";
      case "미선정": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};

export default function MyProjectsPage() {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">내 프로젝트</h1>
            <p className="text-gray-600">진행 중인 프로젝트와 완료된 작업을 관리하세요</p>
          </div>
          <Button asChild>
            <Link href="/projects">
              <Plus className="w-4 h-4 mr-2" />
              새 프로젝트 찾기
            </Link>
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active">진행중 ({mockUserProjects.active.length})</TabsTrigger>
            <TabsTrigger value="completed">완료 ({mockUserProjects.completed.length})</TabsTrigger>
            <TabsTrigger value="applications">지원현황 ({mockUserProjects.applications.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="mt-6">
            <div className="space-y-4">
              {mockUserProjects.active.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-2">클라이언트: {project.client}</p>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.startDate} ~ {project.endDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {project.budget}
                    </div>
                    <div className="text-sm text-gray-600">
                      진행률: {project.progress}%
                    </div>
                  </div>

                  {project.progress > 0 && (
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>상세보기</Link>
                    </Button>
                    {project.status === "진행중" && (
                      <Button size="sm" asChild>
                        <Link href={`/projects/${project.id}/workspace`}>작업공간</Link>
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="space-y-4">
              {mockUserProjects.completed.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-2">클라이언트: {project.client}</p>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                    <StatusBadge status={project.status} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {project.startDate} ~ {project.endDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {project.budget}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      ⭐ {project.rating}
                    </div>
                  </div>

                  {project.review && (
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="text-sm text-gray-700">&ldquo;{project.review}&rdquo;</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${project.id}`}>상세보기</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${project.id}/portfolio`}>포트폴리오 추가</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="applications" className="mt-6">
            <div className="space-y-4">
              {mockUserProjects.applications.map((application) => (
                <div key={application.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{application.title}</h3>
                      <p className="text-gray-600 mb-2">기업: {application.company}</p>
                      <Badge variant="secondary">{application.category}</Badge>
                    </div>
                    <StatusBadge status={application.status} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      지원일: {application.appliedDate}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-2" />
                      {application.budget}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/projects/${application.id}`}>프로젝트 보기</Link>
                    </Button>
                    {application.status === "검토중" && (
                      <Button variant="outline" size="sm">
                        지원 취소
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}