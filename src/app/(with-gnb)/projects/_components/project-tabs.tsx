import { useRouter, useSearchParams } from "next/navigation";
import { TABS } from "../_constants/projects";
import Tab from "@/app/(with-gnb)/_components/tab";

export default function ProjectTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectStatusParam = searchParams.get("projectStatus") || TABS[0].id;

  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("projectStatus", tab);
    router.push(`/projects?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="flex items-center gap-2 h-20 mb-11 border-b border-gray-300">
      {TABS.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab.id}
          label={tab.label}
          activeTab={projectStatusParam}
          onTabChange={handleTabChange}
        />
      ))}
    </div>
  );
}
