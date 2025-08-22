import { Star } from "lucide-react";
import { SIDEBAR_INFO_LABELS } from "../_constants/project-detail";

interface ProjectInfoGridProps {
  projectInfo: {
    budget: string;
    difficulty: string;
    applicants: string;
    rating: number;
  };
}

export default function ProjectInfoGrid({ projectInfo }: ProjectInfoGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-15">
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600">{SIDEBAR_INFO_LABELS.TOTAL_PROJECT}</span>
        <span className="font-semibold">{projectInfo.budget}</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600">{SIDEBAR_INFO_LABELS.DESIRED_AMOUNT}</span>
        <span className="font-semibold">{projectInfo.difficulty}</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600">{SIDEBAR_INFO_LABELS.TOTAL_TRANSACTIONS}</span>
        <span className="font-semibold">{projectInfo.applicants}</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600">{SIDEBAR_INFO_LABELS.REVIEWS}</span>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{projectInfo.rating}</span>
        </div>
      </div>
    </div>
  );
}