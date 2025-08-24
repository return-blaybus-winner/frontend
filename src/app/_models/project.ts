export enum ProjectStatus {
  RECRUITING = "RECRUITING",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
  END = "END",
  DELETED = "DELETED",
}

export enum CorporateType {
  INDIVIDUAL = "INDIVIDUAL",
  GOVERNMENT = "GOVERNMENT",
  CORPORATE = "CORPORATE",
}

export type ProjectForList = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  organizationName: string;
  organizationProfileImage: string;
  projectApplyStartDate: string;
  projectApplyEndDate: string;
  projectStartDate: string;
  projectEndDate: string;
  regionLevel1: string;
  regionLevel2: string;
  isBookmarked: boolean;
  minRecruitNumber: number;
  maxRecruitNumber: number;
};

export type Page<T> = {
  content: T[];
  page: {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
  };
};

export type Project = {
  id: number;
  title: string;
  description: string;
  projectStartDate: string; // ISO 8601 date string (YYYY-MM-DD)
  projectEndDate: string; // ISO 8601 date string (YYYY-MM-DD)
  projectApplyStartDate: string; // ISO 8601 date string (YYYY-MM-DD)
  projectApplyEndDate: string; // ISO 8601 date string (YYYY-MM-DD)
  minRecruitNumber: number;
  maxRecruitNumber: number;
  essentialRequirement: string;
  budget: number;
  thumbnail: string; // URL string
  projectProceedType: string;
  status: ProjectStatus;
  experienceLevel: string;
  collaborationCategoriesLevel1: string[];
  collaborationCategoriesLevel2: string[];
  collaborationCategoriesLevel3: string[];
  categories: string[];
  projectRegion: string[];
  createdAt: string; // ISO 8601 date string (YYYY-MM-DD)
  updatedAt: string; // ISO 8601 date string (YYYY-MM-DD)
  referenceImages: string[]; // array of image URLs
  referenceLinks: string[]; // array of URLs
};
