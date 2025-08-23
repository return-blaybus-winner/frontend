import { cn } from "@/lib/utils";
import { TABS } from "../_constants/projects";

interface ProjectTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProjectTabs({
  activeTab,
  onTabChange,
}: ProjectTabsProps) {
  return (
    <div className="flex items-center gap-2 h-20 mb-11">
      {TABS.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={cn(
            "w-[110px] py-2 text-[20px] font-semibold border-b-2",
            activeTab === tab
              ? "bg-white h-full border-black text-black font-medium"
              : "text-gray-500 border-transparent"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
