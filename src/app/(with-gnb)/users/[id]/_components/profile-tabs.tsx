import Tab from "@/app/(with-gnb)/_components/tab";

interface ProfileTabProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isMe: boolean;
  isArtist: boolean;
}

export default function ProfileTabs({
  isMe,
  isArtist,
  activeTab,
  onTabChange,
}: ProfileTabProps) {
  const TABS = [
    { id: "profile", label: "프로필" },
    { id: "projects", label: "프로젝트" },
  ];

  if (isMe && isArtist) {
    TABS.push({ id: "proposals", label: "받은 제안" });
  }

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
