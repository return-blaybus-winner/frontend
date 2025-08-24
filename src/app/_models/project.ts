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

export type Project = {
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
