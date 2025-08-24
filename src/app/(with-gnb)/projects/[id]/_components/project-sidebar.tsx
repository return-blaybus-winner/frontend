import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import Title from "./title";
import {
  SIDEBAR_INFO_LABELS,
  ACTION_BUTTON_TEXT,
} from "../_constants/project-detail";
import { Project } from "@/app/_models/project";

interface ProjectSidebarProps {
  project: Project;
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <div className="space-y-6 w-[426px] sticky top-[120px] p-8 pt-6 border border-gray-300 rounded-[12px]">
      <div className="mb-[50px] flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900">{project.title}</h1>
        <p className="text-gray-700 text-base">{project.description}</p>
      </div>

      <div className="space-y-8">
        <Title>{SIDEBAR_INFO_LABELS.RECRUITMENT_PERIOD}</Title>
        <div className="space-y-6">
          <div className="flex items-center gap-2 py-[6px] border border-gray-300 bg-gray-100 rounded-[6px] px-6 text-gray-600">
            <Calendar className="size-5" />
            <span className="text-[18px] text-gray-500">{`${project.projectApplyStartDate} - ${project.projectApplyEndDate}`}</span>
          </div>
        </div>

        <Button
          className="w-full bg-red-500 hover:bg-red-600 text-white"
          size="lg"
        >
          {ACTION_BUTTON_TEXT}
        </Button>
      </div>
    </div>
  );
}
