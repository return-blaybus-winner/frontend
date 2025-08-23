import { cn } from "@/lib/utils";

interface Props {
  tab: string;
  label: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tab({ tab, label, activeTab, onTabChange }: Props) {
  return (
    <button
      key={tab}
      onClick={() => onTabChange(tab)}
      className={cn(
        "w-[110px] text-[20px] font-semibold border-b-2",
        activeTab === tab
          ? "bg-white h-full border-black text-black font-medium"
          : "text-gray-500 border-transparent"
      )}
    >
      {label}
    </button>
  );
}
