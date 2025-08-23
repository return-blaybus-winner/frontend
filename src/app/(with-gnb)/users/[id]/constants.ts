import { UserProfile } from "./types";

export const MOCK_USER: UserProfile = {
  id: "1",
  name: "Baek Doyeon",
  avatar: "/profile.png",
  nickname: "백도연",
  introduction: "소개글을 작성해주세요",
  collaborationField: "관예 > 무대 > 서울뮤지컬",
  activityArea: "서울특별시",
  projectMethod: "직접 진행 방식을 입력주세요",
  workableTime: "미입력",
  portfolioSection: "미입력",
  career: {
    title: "경력",
    items: ["경력 업데이트 하기"]
  },
  portfolio: {
    title: "포트폴리오",
    items: ["포트폴리오 업데이트 하기"]
  },
  stats: {
    projects: 40,
    techStack: 50,
    collaborations: "브랜딩디자인",
    rating: 5.0
  }
};

export const USER_TYPE = {
  ARTIST: "예술가",
  COMPANY: "회사"
} as const;