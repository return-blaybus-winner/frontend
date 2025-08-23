import { User, UserRole, CompanyType } from "@/app/_models/user";

export const MOCK_ARTIST_USER: User = {
  userId: "artist-001",
  name: "백도연",
  email: "doyeon.baek@example.com",
  phone: "010-1234-5678",
  role: UserRole.ARTIST,
  profile: {
    artistName: "백도연",
    totalProjects: 40,
    totalTransactions: 35,
    rating: 4.8,
    representativeField: "무대예술",
    introduction:
      "뮤지컬과 연극 분야에서 활동하는 아티스트입니다. 창의적인 무대 연출과 협업을 통해 관객들에게 감동을 전달하고자 합니다.",
    mainActivityField: "관예",
    subActivityField: "무대",
    detailActivityField: "서울뮤지컬",
    activityLocation: "서울특별시",
    workingMethod: "직접 만남 선호, 온라인 회의 가능",
    availableContactTime: "평일 10:00-18:00",
    contact: "doyeon.baek@example.com",
    portfolio: {
      representativeImages: [
        "/profile.png",
        "/portfolio-1.jpg",
        "/portfolio-2.jpg",
      ],
      portfolioUrl: "https://portfolio.example.com/doyeon-baek",
    },
  },
};

export const MOCK_CORPORATE_USER: User = {
  userId: "corp-001",
  name: "김영수",
  email: "youngsoo.kim@creativecorp.com",
  phone: "02-1234-5678",
  role: UserRole.CORPORATE,
  profile: {
    companyName: "크리에이티브 컴퍼니",
    totalProjects: 120,
    totalArtists: 85,
    rating: 4.7,
    companyType: CompanyType.Corporate,
    businessSize: "중견기업 (직원 50-200명)",
    introduction:
      "문화예술 콘텐츠 기획 및 제작 전문 기업입니다. 다양한 분야의 아티스트들과 협업하여 혁신적인 프로젝트를 진행하고 있습니다.",
    representativeImages: [
      "/company-logo.png",
      "/company-office.jpg",
      "/company-projects.jpg",
    ],
  },
};
