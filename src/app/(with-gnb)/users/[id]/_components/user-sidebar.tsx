import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserSidebarProps } from "../types";

export default function UserSidebar({ user, isMe, isEditMode = false, onEditToggle }: UserSidebarProps) {
  return (
    <div className="w-full lg:w-80 shrink-0">
      <Card className="p-6 border border-gray-200 rounded-lg">
        {/* 프로필 헤더 */}
        <div className="flex flex-col items-center mb-6">
          <Avatar className="w-20 h-20 mb-4 bg-gradient-to-r from-pink-500 to-orange-500">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg font-semibold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <span className="text-sm text-gray-600 block mb-1">예술가</span>
            <h2 className="text-lg font-bold text-gray-900">{user.name}</h2>
          </div>
        </div>

        {/* 통계 정보 */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">총 프로젝트</span>
            <span className="font-semibold">{user.stats.projects}건</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">총 기술</span>
            <span className="font-semibold">{user.stats.techStack}건</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">희망분야</span>
            <span className="font-semibold">{user.stats.collaborations}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">리뷰</span>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500">⭐</span>
              <span className="font-semibold">{user.stats.rating}</span>
            </div>
          </div>
        </div>

        {/* 프로필 수정하기 버튼 */}
        {isMe && (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={onEditToggle}
          >
            {isEditMode ? '수정 취소' : '프로필 수정하기'}
          </Button>
        )}
      </Card>
    </div>
  );
}