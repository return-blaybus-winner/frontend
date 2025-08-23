export interface UserStats {
  projects: number;
  techStack: number;
  collaborations: string;
  rating: number;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  nickname: string;
  introduction: string;
  collaborationField: string;
  activityArea: string;
  projectMethod: string;
  workableTime: string;
  portfolioSection: string;
  career: {
    title: string;
    items: string[];
  };
  portfolio: {
    title: string;
    items: string[];
  };
  stats: UserStats;
}

export interface ProfileTabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export interface UserSidebarProps {
  user: UserProfile;
  isMe: boolean;
  isEditMode?: boolean;
  onEditToggle?: () => void;
}

export interface UserProfileContentProps {
  user: UserProfile;
  isMe: boolean;
  isEditMode?: boolean;
  onUserChange?: (user: UserProfile) => void;
  onSave?: () => void;
  onCancel?: () => void;
}
