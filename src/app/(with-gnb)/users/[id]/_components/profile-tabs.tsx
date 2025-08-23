import Tab from "@/app/(with-gnb)/_components/tab";
import { ProfileTabProps } from "../types";

const TABS = [
  { id: "profile", label: "프로필" },
  { id: "projects", label: "프로젝트" },
  { id: "proposals", label: "받은 제안" },
] as const;

export default function ProfileTabs({
  activeTab,
  onTabChange,
}: ProfileTabProps) {
  return (
    <div className="flex items-center gap-2 h-20 mb-8 border-b border-gray-300">
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
