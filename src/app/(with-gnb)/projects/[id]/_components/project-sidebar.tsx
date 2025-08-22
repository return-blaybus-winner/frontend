import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Title from "./title";
import ProjectInfoGrid from "./project-info-grid";
import { SIDEBAR_INFO_LABELS, ACTION_BUTTON_TEXT } from "../_constants/project-detail";

interface ProjectSidebarProps {
  project: {
    title: string;
    period: string;
    periodStatus: string;
    projectInfo: {
      budget: string;
      difficulty: string;
      applicants: string;
      rating: number;
    };
  };
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <div className="space-y-6 w-[426px] sticky top-[120px] p-8 pt-6 border border-gray-300 rounded-[12px]">
      <h1 className="text-2xl font-bold text-gray-900 mb-[50px]">
        {project.title}
      </h1>

      <div className="space-y-8">
        <Title>{SIDEBAR_INFO_LABELS.RECRUITMENT_PERIOD}</Title>
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-gray-800 py-[6px]">
            <Calendar className="size-5" />
            <span className="text-lg text-gray-800">{project.period}</span>
          </div>
          <Badge>{project.periodStatus}</Badge>
        </div>
        <Separator />
        <ProjectInfoGrid projectInfo={project.projectInfo} />
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