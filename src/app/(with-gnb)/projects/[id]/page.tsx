"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

const mockProject = {
  id: 1,
  title: "브랜드 일러스트 제작",
  description:
    "신제품 론칭을 위한 일러스트 디자인 작업입니다. 모던하고 세련된 스타일로 브랜드 아이덴티티를 표현할 수 있는 일러스트를 제작해주세요.",
  detailedDescription: `
    이번 프로젝트는 새로운 테크 제품의 론칭을 위한 브랜딩 일러스트 제작 프로젝트입니다.
    
    주요 요구사항:
    • 모던하고 미니멀한 디자인 스타일
    • 브랜드 컬러 (#2563EB, #F59E0B, #10B981) 활용
    • 다양한 사이즈 (웹, 모바일, 인쇄물) 대응
    • 벡터 형태로 제작 (AI, SVG 포맷)
    
    제공 자료:
    • 브랜드 가이드라인
    • 제품 사진 및 설명서
    • 참고 디자인 레퍼런스
  `,
  company: {
    name: "테크 스타트업 A",
    description: "혁신적인 IoT 솔루션을 개발하는 스타트업",
    employees: "10-50명",
    industry: "기술/IT",
  },
  category: "일러스트",
  budget: "300-500만원",
  duration: "2주",
  location: "서울",
  tags: ["일러스트", "브랜딩", "디지털", "벡터"],
  deadline: "2024-09-01",
  requirements: [
    "일러스트 분야 3년 이상 경험",
    "브랜딩 프로젝트 포트폴리오 보유",
    "Adobe Illustrator 숙련도",
    "커뮤니케이션 원활한 분",
  ],
  deliverables: [
    "메인 브랜드 일러스트 (3-5개 컨셉)",
    "웹/모바일용 사이즈별 파일",
    "인쇄물용 고해상도 파일",
    "사용 가이드라인 문서",
  ],
};

export default function ProjectDetailPage() {
  const params = useParams();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              프로젝트 목록으로
            </Link>
          </Button>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{mockProject.title}</h1>
                <p className="text-gray-600 text-lg mb-4">
                  {mockProject.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>by {mockProject.company.name}</span>
                  <Badge variant="secondary">{mockProject.category}</Badge>
                </div>
              </div>
              <Button size="lg" asChild>
                <Link href={`/projects/${params.id}/apply`}>지원하기</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">프로젝트 정보</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">예산:</span>
                    <span>{mockProject.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">기간:</span>
                    <span>{mockProject.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">지역:</span>
                    <span>{mockProject.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">마감일:</span>
                    <span>{mockProject.deadline}</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">기업 정보</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-medium">{mockProject.company.name}</h3>
                    <p className="text-gray-600 text-sm">
                      {mockProject.company.description}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">직원 수:</span>
                    <span>{mockProject.company.employees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">업종:</span>
                    <span>{mockProject.company.industry}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">프로젝트 상세 설명</h2>
              <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                {mockProject.detailedDescription}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">지원 요구사항</h2>
                <ul className="space-y-2">
                  {mockProject.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">산출물</h2>
                <ul className="space-y-2">
                  {mockProject.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">태그</h2>
              <div className="flex flex-wrap gap-2">
                {mockProject.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <Link href="/projects">다른 프로젝트 보기</Link>
              </Button>
              <Button size="lg" asChild>
                <Link href={`/projects/${params.id}/apply`}>지원하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
