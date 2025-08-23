import { ProfileTabProps } from "../types";

const TABS = [
  { id: 'profile', label: '프로필' },
  { id: 'projects', label: '프로젝트' },
  { id: 'proposals', label: '받은 제안' }
] as const;

export default function ProfileTabs({ activeTab, onTabChange }: ProfileTabProps) {
  return (
    <div className="flex border-b border-gray-200 mb-6">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === tab.id
              ? 'text-gray-900 border-b-2 border-gray-900 font-semibold'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}