import { TABS } from "../_constants/projects";

interface ProjectTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProjectTabs({ activeTab, onTabChange }: ProjectTabsProps) {
  return (
    <div className="flex items-center gap-2">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 ${
            activeTab === tab
              ? "bg-white border-b-2 border-orange-500 text-black font-medium"
              : "text-gray-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}