export const PAGE_TITLE = "프로젝트 찾기";

export const TABS = ["모집 중", "진행"] as const;

export const CATEGORIES = ["전체", "작조", "업조", "글쓰", "성디바술"] as const;

export const SORT_OPTIONS = ["최신순", "인기순", "마감순"] as const;

export const ITEMS_PER_PAGE = 6;

export const FILTER_CATEGORIES = {
  시각디자인: ["회화", "조소", "한지", "사진", "디지털아트"],
  공예: ["도예", "금속공예", "목공예", "섬유공예"],
  문학창작: ["시", "소설", "수필"],
  파포먼스: ["연극", "무용", "음악"],
} as const;

export const TYPE_OPTIONS = ["개인", "팀", "기업"] as const;

export const RECRUIT_COUNT_OPTIONS = [
  "1명",
  "2-5명",
  "6-10명",
  "10명 이상",
] as const;

export const BUDGET_OPTIONS = [
  "100만원 이하",
  "100-300만원",
  "300-500만원",
  "500-1000만원",
  "1000만원 이상",
] as const;

export const LOCATION_OPTIONS = [
  "서울",
  "경기",
  "부산",
  "대구",
  "인천",
  "광주",
  "대전",
  "울산",
  "온라인",
] as const;

export const DURATION_OPTIONS = [
  "1주 이내",
  "1주-1개월",
  "1-3개월",
  "3-6개월",
  "6개월 이상",
] as const;

export const FILTER_SECTIONS = {
  분야: "분야",
  유형: "유형",
  모집인원: "모집인원",
  예산: "예산",
  지역: "지역",
  기간: "기간",
} as const;
