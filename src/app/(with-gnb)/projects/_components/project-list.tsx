import ProjectCard from "@/app/(with-gnb)/_components/project-card";
import { Project } from "@/app/_models/project";

interface ProjectListProps {
  projects: Project[];
  likedProjects: Set<number>;
  onToggleLike: (projectId: number) => void;
  isLoading?: boolean;
}

export default function ProjectList({
  projects,
  isLoading = false,
}: ProjectListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mx-auto mb-2"></div>
          <p className="text-gray-500">프로젝트를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">
          검색 조건에 맞는 프로젝트가 없습니다.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          className="border-gray-300"
        />
      ))}
    </div>
  );
}
