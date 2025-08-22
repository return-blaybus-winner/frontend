import { PAGE_TITLE, TABS } from "../_constants/projects";

interface ProjectsHeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProjectsHeader({ activeTab, onTabChange }: ProjectsHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{PAGE_TITLE}</h1>
      <div className="flex items-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          {TABS.map((tab) => (
            <button 
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 ${activeTab === tab 
                ? "bg-white border-b-2 border-orange-500 text-black font-medium" 
                : "text-gray-500"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}