"use client";

import { User, UserRole } from "@/app/_models/user";
import Container from "@/app/_components/container";
import ArtistsSidebar from "@/app/(with-gnb)/artists/_components/artists-sidebar";
import FiltersBar from "@/app/(with-gnb)/projects/_components/filters-bar";
import ArtistCard from "@/app/(with-gnb)/artists/_components/artist-card";
import { Suspense } from "react";

export default function ArtistsPage() {
  return (
    <Container className="mt-10">
      <Suspense>
        <div className="flex gap-20">
          <ArtistsSidebar />
          <div className="flex-1">
            <FiltersBar />

            <div className="flex flex-col mt-10 gap-6">
              {mockArtists.map((artist) => (
                <ArtistCard key={artist.userId} artist={artist} />
              ))}
            </div>
          </div>
        </div>
      </Suspense>
    </Container>
  );
}

const mockArtists: User[] = [
  {
    userId: "artist_1",
    name: "김아트",
    email: "kim.art@example.com",
    phone: "010-1234-5678",
    role: UserRole.ARTIST,
    profile: {
      artistName: "김아트",
      totalProjects: 23,
      totalTransactions: 45,
      rating: 4.8,
      representativeField: "일러스트",
      introduction:
        "모던하고 감각적인 일러스트를 전문으로 하는 아티스트입니다.",
      mainActivityField: "디자인",
      subActivityField: "일러스트",
      detailActivityField: "브랜딩, 캐릭터, 디지털",
      activityLocation: "서울",
      workingMethod: "온라인/오프라인",
      availableContactTime: "평일 09:00-18:00",
      contact: "kim.art@example.com",
      portfolio: {
        representativeImages: [
          "/portfolio/work1.jpg",
          "/portfolio/work2.jpg",
          "/portfolio/work3.jpg",
        ],
        portfolioUrl: "https://kimArt.portfolio.com",
      },
    },
  },
  {
    userId: "artist_2",
    name: "박도예",
    email: "park.pottery@example.com",
    phone: "010-2345-6789",
    role: UserRole.ARTIST,
    profile: {
      artistName: "박도예",
      totalProjects: 35,
      totalTransactions: 68,
      rating: 4.9,
      representativeField: "도예",
      introduction: "전통과 현대를 아우르는 독창적인 도예 작품을 만듭니다.",
      mainActivityField: "공예",
      subActivityField: "도예",
      detailActivityField: "전통도예, 현대도예, 인테리어",
      activityLocation: "부산",
      workingMethod: "오프라인 위주",
      availableContactTime: "평일 10:00-17:00",
      contact: "park.pottery@example.com",
      portfolio: {
        representativeImages: [
          "/portfolio/pottery1.jpg",
          "/portfolio/pottery2.jpg",
          "/portfolio/pottery3.jpg",
        ],
        portfolioUrl: "https://parkpottery.portfolio.com",
      },
    },
  },
  {
    userId: "artist_3",
    name: "이공예",
    email: "lee.craft@example.com",
    phone: "010-3456-7890",
    role: UserRole.ARTIST,
    profile: {
      artistName: "이공예",
      totalProjects: 18,
      totalTransactions: 32,
      rating: 4.7,
      representativeField: "공예",
      introduction:
        "자연 친화적인 소재로 실용적이고 아름다운 공예품을 제작합니다.",
      mainActivityField: "공예",
      subActivityField: "목공예",
      detailActivityField: "목공예, 가죽공예, 친환경",
      activityLocation: "대구",
      workingMethod: "오프라인",
      availableContactTime: "평일 09:30-17:30",
      contact: "lee.craft@example.com",
      portfolio: {
        representativeImages: [
          "/portfolio/craft1.jpg",
          "/portfolio/craft2.jpg",
          "/portfolio/craft3.jpg",
        ],
        portfolioUrl: "https://leecraft.portfolio.com",
      },
    },
  },
  {
    userId: "artist_4",
    name: "최회화",
    email: "choi.painting@example.com",
    phone: "010-4567-8901",
    role: UserRole.ARTIST,
    profile: {
      artistName: "최회화",
      totalProjects: 42,
      totalTransactions: 85,
      rating: 5.0,
      representativeField: "회화",
      introduction:
        "감정을 섬세하게 표현하는 회화 작품으로 많은 사랑을 받고 있습니다.",
      mainActivityField: "순수예술",
      subActivityField: "회화",
      detailActivityField: "유화, 수채화, 초상화",
      activityLocation: "서울",
      workingMethod: "오프라인",
      availableContactTime: "평일 14:00-20:00",
      contact: "choi.painting@example.com",
      portfolio: {
        representativeImages: [
          "/portfolio/painting1.jpg",
          "/portfolio/painting2.jpg",
          "/portfolio/painting3.jpg",
        ],
        portfolioUrl: "https://choipainting.portfolio.com",
      },
    },
  },
];
