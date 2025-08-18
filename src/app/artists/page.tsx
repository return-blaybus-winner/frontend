"use client";

import { useState } from "react";
import Link from "next/link";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockArtists = [
  {
    id: 1,
    name: "김아트",
    category: "일러스트",
    location: "서울",
    experience: "5년",
    rating: 4.8,
    projects: 23,
    specialties: ["브랜딩", "캐릭터", "디지털"],
    bio: "모던하고 감각적인 일러스트를 전문으로 하는 아티스트입니다.",
    avatar: "/avatars/artist1.jpg",
    portfolio: [
      "/portfolio/work1.jpg",
      "/portfolio/work2.jpg",
      "/portfolio/work3.jpg",
    ],
  },
  {
    id: 2,
    name: "박도예",
    category: "도예",
    location: "부산",
    experience: "8년",
    rating: 4.9,
    projects: 35,
    specialties: ["전통도예", "현대도예", "인테리어"],
    bio: "전통과 현대를 아우르는 독창적인 도예 작품을 만듭니다.",
    avatar: "/avatars/artist2.jpg",
    portfolio: [
      "/portfolio/pottery1.jpg",
      "/portfolio/pottery2.jpg",
      "/portfolio/pottery3.jpg",
    ],
  },
  {
    id: 3,
    name: "이공예",
    category: "공예",
    location: "대구",
    experience: "6년",
    rating: 4.7,
    projects: 18,
    specialties: ["목공예", "가죽공예", "친환경"],
    bio: "자연 친화적인 소재로 실용적이고 아름다운 공예품을 제작합니다.",
    avatar: "/avatars/artist3.jpg",
    portfolio: [
      "/portfolio/craft1.jpg",
      "/portfolio/craft2.jpg",
      "/portfolio/craft3.jpg",
    ],
  },
  {
    id: 4,
    name: "최회화",
    category: "회화",
    location: "서울",
    experience: "10년",
    rating: 5.0,
    projects: 42,
    specialties: ["유화", "수채화", "초상화"],
    bio: "감정을 섬세하게 표현하는 회화 작품으로 많은 사랑을 받고 있습니다.",
    avatar: "/avatars/artist4.jpg",
    portfolio: [
      "/portfolio/painting1.jpg",
      "/portfolio/painting2.jpg",
      "/portfolio/painting3.jpg",
    ],
  },
];

export default function ArtistsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");

  const filteredArtists = mockArtists.filter((artist) => {
    return (
      (artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )) &&
      (categoryFilter === "" || artist.category === categoryFilter) &&
      (locationFilter === "" || artist.location === locationFilter) &&
      (experienceFilter === "" ||
        (experienceFilter === "1-3년" && parseInt(artist.experience) <= 3) ||
        (experienceFilter === "4-7년" &&
          parseInt(artist.experience) >= 4 &&
          parseInt(artist.experience) <= 7) ||
        (experienceFilter === "8년 이상" && parseInt(artist.experience) >= 8))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">아티스트 찾기</h1>
          <p className="text-gray-600">재능있는 아티스트들을 만나보세요</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Input
                placeholder="아티스트 검색..."
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
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select
                value={experienceFilter}
                onValueChange={setExperienceFilter}
              >
                <SelectTrigger>
                  <SelectValue placeholder="경력" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">전체</SelectItem>
                  <SelectItem value="1-3년">1-3년</SelectItem>
                  <SelectItem value="4-7년">4-7년</SelectItem>
                  <SelectItem value="8년 이상">8년 이상</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarImage src={artist.avatar} alt={artist.name} />
                  <AvatarFallback>{artist.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{artist.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Badge variant="secondary">{artist.category}</Badge>
                    <span>•</span>
                    <span>{artist.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm">{artist.bio}</p>

              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium">경력:</span> {artist.experience}
                </div>
                <div>
                  <span className="font-medium">평점:</span> ⭐ {artist.rating}
                </div>
                <div>
                  <span className="font-medium">프로젝트:</span>{" "}
                  {artist.projects}건
                </div>
              </div>

              <div className="mb-4">
                <div className="text-sm font-medium mb-2">전문 분야</div>
                <div className="flex flex-wrap gap-1">
                  {artist.specialties.map((specialty, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Portfolio Preview */}
              <div className="mb-4">
                <div className="text-sm font-medium mb-2">포트폴리오</div>
                <div className="grid grid-cols-3 gap-2">
                  {artist.portfolio.slice(0, 3).map((work, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-gray-200 rounded"
                    ></div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <Link href={`/artists/${artist.id}`}>프로필 보기</Link>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <Link href={`/artists/${artist.id}/contact`}>연락하기</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              검색 조건에 맞는 아티스트가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
