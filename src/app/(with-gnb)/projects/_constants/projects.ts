export const PAGE_TITLE = "프로젝트 찾기";

export const TABS = [
  {
    id: "RECRUITING",
    label: "모집 중",
  },
  {
    id: "COMPLETED",
    label: "완료",
  },
] as const;

export const CATEGORIES = [
  { id: "all", label: "전체" },
  { id: "작조", label: "작조" },
  { id: "업조", label: "업조" },
  { id: "글쓰", label: "글쓰" },
  { id: "성디바술", label: "성디바술" },
] as const;

export const SORT_OPTIONS = ["최신순", "인기순", "마감순"] as const;

export const ITEMS_PER_PAGE = 6;

export const FILTER_CATEGORIES = {
  시각디자인: ["회화", "조소", "한지", "사진", "디지털아트"],
  공예: ["도예", "금속공예", "목공예", "섬유공예"],
  문학창작: ["시", "소설", "수필"],
  파포먼스: ["연극", "무용", "음악"],
} as const;

export const TYPE_OPTIONS = ["개인", "팀", "기업"] as const;

export const RECRUIT_COUNT_OPTIONS: {
  min: number;
  max?: number | undefined;
  description: string;
}[] = [
  {
    min: 0,
    max: 1,
    description: "1명",
  },
  {
    min: 2,
    max: 5,
    description: "2-5명",
  },
  {
    min: 6,
    max: 10,
    description: "6-10명",
  },
  {
    min: 10,
    description: "10명 이상",
  },
] as const;

export const LOCATION_OPTIONS = [
  { code: "11000", description: "서울특별시" },
  { code: "26000", description: "부산광역시" },
  { code: "27000", description: "대구광역시" },
  { code: "28000", description: "인천광역시" },
  { code: "29000", description: "광주광역시" },
  { code: "30000", description: "대전광역시" },
  { code: "31000", description: "울산광역시" },
  { code: "36110", description: "세종특별자치시" },
  { code: "41000", description: "경기도" },
  { code: "43000", description: "충청북도" },
  { code: "44000", description: "충청남도" },
  { code: "46000", description: "전라남도" },
  { code: "47000", description: "경상북도" },
  { code: "48000", description: "경상남도" },
  { code: "50000", description: "제주특별자치도" },
  { code: "51000", description: "강원특별자치도" },
  { code: "52000", description: "전북특별자치도" },
] as const;

export const DURATION_OPTIONS = [
  { value: "7", label: "1주 이내" },
  { value: "30", label: "1주-1개월" },
  { value: "90", label: "1-3개월" },
  { value: "180", label: "3-6개월" },
  { value: "9999999", label: "6개월 이상" },
] as const;

export const CAREER_OPTIONS = [
  { value: "junior", label: "주니어" },
  { value: "mid", label: "미드" },
  { value: "senior", label: "시니어" },
] as const;

export const FILTER_SECTIONS = {
  분야: "분야",
  유형: "유형",
  모집인원: "모집인원",
  예산: "예산",
  지역: "지역",
  기간: "기간",
} as const;
