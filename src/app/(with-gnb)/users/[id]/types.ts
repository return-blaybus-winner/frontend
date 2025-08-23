import { User } from "@/app/_models/user";

export interface UserStats {
  projects: number;
  techStack: number;
  collaborations: string;
  rating: number;
}

export interface UserProfileContentProps {
  user: User;
  isMe: boolean;
  isEditMode?: boolean;
  onUserChange?: (user: User) => void;
  onSave?: () => void;
  onCancel?: () => void;
}
