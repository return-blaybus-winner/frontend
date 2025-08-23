import { TABS } from "../_constants/projects";
import Tab from "@/app/(with-gnb)/_components/tab";

interface ProjectTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function ProjectTabs({
  activeTab,
  onTabChange,
}: ProjectTabsProps) {
  return (
    <div className="flex items-center gap-2 h-20 mb-11 border-b border-gray-300">
      {TABS.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab.id}
          label={tab.label}
          activeTab={activeTab}
          onTabChange={onTabChange}
        />
      ))}
    </div>
  );
}
