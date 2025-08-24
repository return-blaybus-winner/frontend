export enum UserRole {
  ARTIST = "ARTIST",
  CORPORATE = "CORPORATE",
}

export enum CompanyType {
  Individual = "개인사업자",
  LocalGovernment = "지자체",
  Corporate = "기업담당자",
}

type CorporateProfile = {
  companyName: string;
  totalProjects: number;
  totalArtists: number;
  rating: number;
  companyType: CompanyType;
  businessSize: string;
  introduction: string;
  representativeImages: string[];
};

type ArtistProfile = {
  artistName: string;
  totalProjects: number;
  totalTransactions: number;
  rating: number;
  representativeField: string;
  introduction: string;
  mainActivityField: string;
  subActivityField: string;
  detailActivityField: string;
  activityLocation: string;
  workingMethod: string;
  availableContactTime: string;
  contact: string;
  portfolio: {
    representativeImages: string[];
    portfolioUrl: string;
  };
};

export type User = {
  userId: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  profile: CorporateProfile | ArtistProfile;
};
export function isArtist(user: User): user is User & {
  profile: ArtistProfile;
} {
  return user.role === UserRole.ARTIST && "artistName" in user.profile;
}

export function isCorporate(user: User): user is User & {
  profile: CorporateProfile;
} {
  return user.role === UserRole.CORPORATE && "companyName" in user.profile;
}
