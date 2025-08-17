"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, MapPin, Star, Briefcase } from "lucide-react";

const mockArtist = {
  id: 1,
  name: "김아트",
  category: "일러스트",
  location: "서울",
  experience: "5년",
  rating: 4.8,
  projects: 23,
  specialties: ["브랜딩", "캐릭터", "디지털", "모션그래픽"],
  bio: "모던하고 감각적인 일러스트를 전문으로 하는 아티스트입니다. 브랜딩부터 캐릭터 디자인까지 다양한 영역에서 활동하고 있습니다.",
  detailedBio: `
    안녕하세요, 일러스트레이터 김아트입니다.
    
    홍익대학교 시각디자인과를 졸업하고, 현재 프리랜서로 활동하며 다양한 브랜드와 기업의 일러스트 작업을 담당하고 있습니다.
    
    주요 경력:
    • 2019-2021: 디자인 에이전시 OOO 근무
    • 2021-현재: 프리랜서 일러스트레이터
    • 2022: 서울시 공공디자인 프로젝트 참여
    • 2023: 개인전 "모던 일러스트" 개최
    
    작업 철학:
    단순함 속에서 강력한 메시지를 전달하는 것을 추구합니다. 
    클라이언트와의 소통을 통해 브랜드의 본질을 파악하고, 
    이를 시각적으로 효과적으로 표현하는 것이 저의 강점입니다.
  `,
  avatar: "/avatars/artist1.jpg",
  portfolio: [
    {
      id: 1,
      title: "브랜드 로고 디자인",
      description: "스타트업 브랜드 아이덴티티 작업",
      image: "/portfolio/work1.jpg",
      year: "2023"
    },
    {
      id: 2,
      title: "캐릭터 일러스트",
      description: "모바일 앱 마스코트 캐릭터",
      image: "/portfolio/work2.jpg",
      year: "2023"
    },
    {
      id: 3,
      title: "웹사이트 일러스트",
      description: "IT 서비스 홈페이지 일러스트",
      image: "/portfolio/work3.jpg",
      year: "2022"
    },
    {
      id: 4,
      title: "패키지 디자인",
      description: "친환경 제품 패키지 일러스트",
      image: "/portfolio/work4.jpg",
      year: "2022"
    }
  ],
  tools: ["Adobe Illustrator", "Photoshop", "Figma", "Procreate"],
  education: [
    {
      school: "홍익대학교",
      major: "시각디자인학과",
      period: "2015-2019"
    }
  ],
  awards: [
    {
      title: "서울시 공공디자인 우수상",
      year: "2022"
    },
    {
      title: "한국일러스트레이션학회 신인상",
      year: "2020"
    }
  ],
  reviews: [
    {
      id: 1,
      client: "테크 스타트업 A",
      rating: 5,
      comment: "정말 만족스러운 작업이었습니다. 커뮤니케이션도 원활하고 결과물의 퀄리티가 뛰어났습니다.",
      project: "브랜드 일러스트 제작",
      date: "2023-08"
    },
    {
      id: 2,
      client: "마케팅 에이전시 B",
      rating: 5,
      comment: "창의적이고 트렌디한 디자인으로 클라이언트가 매우 만족했습니다.",
      project: "웹사이트 일러스트",
      date: "2023-06"
    }
  ]
};

export default function ArtistDetailPage() {
  const params = useParams();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/artists">
              <ArrowLeft className="w-4 h-4 mr-2" />
              아티스트 목록으로
            </Link>
          </Button>
          
          {/* Artist Header */}
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="w-32 h-32">
                <AvatarImage src={mockArtist.avatar} alt={mockArtist.name} />
                <AvatarFallback className="text-2xl">{mockArtist.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{mockArtist.name}</h1>
                    <div className="flex items-center gap-4 mb-2">
                      <Badge variant="secondary" className="text-sm">{mockArtist.category}</Badge>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        {mockArtist.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4 md:mt-0">
                    <Button variant="outline" asChild>
                      <Link href={`/artists/${params.id}/portfolio`}>포트폴리오</Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/artists/${params.id}/contact`}>연락하기</Link>
                    </Button>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{mockArtist.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2 text-gray-500" />
                    <span><strong>경력:</strong> {mockArtist.experience}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    <span><strong>평점:</strong> {mockArtist.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <span><strong>완료 프로젝트:</strong> {mockArtist.projects}건</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">소개</h2>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line">
                  {mockArtist.detailedBio}
                </div>
              </div>

              {/* Portfolio Preview */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">포트폴리오</h2>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/artists/${params.id}/portfolio`}>전체 보기</Link>
                  </Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockArtist.portfolio.slice(0, 4).map((work) => (
                    <div key={work.id} className="group cursor-pointer">
                      <div className="aspect-video bg-gray-200 rounded-lg mb-2 group-hover:shadow-md transition-shadow"></div>
                      <h3 className="font-medium">{work.title}</h3>
                      <p className="text-sm text-gray-600">{work.description}</p>
                      <span className="text-xs text-gray-500">{work.year}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">클라이언트 후기</h2>
                <div className="space-y-4">
                  {mockArtist.reviews.map((review) => (
                    <div key={review.id} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-medium">{review.client}</div>
                          <div className="text-sm text-gray-600">{review.project}</div>
                        </div>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Specialties */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">전문 분야</h2>
                <div className="flex flex-wrap gap-2">
                  {mockArtist.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline">{specialty}</Badge>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">사용 툴</h2>
                <div className="space-y-2">
                  {mockArtist.tools.map((tool, index) => (
                    <div key={index} className="text-sm">{tool}</div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">학력</h2>
                <div className="space-y-2">
                  {mockArtist.education.map((edu, index) => (
                    <div key={index}>
                      <div className="font-medium">{edu.school}</div>
                      <div className="text-sm text-gray-600">{edu.major}</div>
                      <div className="text-xs text-gray-500">{edu.period}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg font-semibold mb-4">수상 경력</h2>
                <div className="space-y-2">
                  {mockArtist.awards.map((award, index) => (
                    <div key={index}>
                      <div className="font-medium text-sm">{award.title}</div>
                      <div className="text-xs text-gray-500">{award.year}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}