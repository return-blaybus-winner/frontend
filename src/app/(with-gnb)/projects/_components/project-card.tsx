import { Heart } from "lucide-react";
import { Project } from "../_constants/mock-data";

interface ProjectCardProps {
  project: Project;
  isLiked: boolean;
  onToggleLike: (projectId: number) => void;
}

export default function ProjectCard({ project, isLiked, onToggleLike }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-yellow-400"></div>
        <button 
          onClick={() => onToggleLike(project.id)}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
        >
          <Heart 
            className={`w-4 h-4 ${
              isLiked 
                ? "fill-red-500 text-red-500" 
                : "text-gray-600"
            }`} 
          />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${
              project.companyType === 'studio' ? 'bg-red-500' : 'bg-gray-400'
            }`}></div>
            <span className="text-sm text-gray-600">{project.company}</span>
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2 leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-red-500 font-medium">{project.budget}</span>
          <div className="flex items-center gap-4 text-gray-500">
            <span>{project.duration}</span>
            <span>{project.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}