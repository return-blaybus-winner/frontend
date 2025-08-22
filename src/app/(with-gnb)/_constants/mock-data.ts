export const MOCK_PROJECT_DATA = {
  area: "디자인",
  deadline: "2025-12-31",
  description: "최신 디자인 트렌드를 반영한 프로젝트",
  id: "1",
  imageUrl: "/images/project1.jpg",
  numberOfPeople: 10,
  title: "Fusion Art Installation 2025",
};

export const CATEGORY_ITEMS = Array.from({ length: 7 }, (_, index) => ({
  id: index,
  imageUrl: `/images/home/${index}.png`,
  label: "전시 기획/참여",
  href: "/projects",
}));
