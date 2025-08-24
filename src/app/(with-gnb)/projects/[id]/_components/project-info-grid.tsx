import { SIDEBAR_INFO_LABELS } from "../_constants/project-detail";

interface ProjectInfoGridProps {
  budget: number;
  category: string;
}

export default function ProjectInfoGrid({
  budget,
  category,
}: ProjectInfoGridProps) {
  return (
    <div className="grid grid-cols-2 gap-x-15">
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600">
          {SIDEBAR_INFO_LABELS.TOTAL_PROJECT}
        </span>
        <span className="font-semibold">{budget}</span>
      </div>
      <div className="flex items-center justify-between py-2">
        <span className="text-gray-600">
          {SIDEBAR_INFO_LABELS.DESIRED_AMOUNT}
        </span>
        <span className="font-semibold">{category}</span>
      </div>
    </div>
  );
}
