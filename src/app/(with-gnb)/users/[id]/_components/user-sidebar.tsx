import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserSidebarProps } from "../types";
import { Separator } from "@/components/ui/separator";

export default function UserSidebar({
  user,
  isMe,
  isEditMode = false,
  onEditToggle,
}: UserSidebarProps) {
  return (
    <div className="w-[300px]">
      <aside className="sticky top-28 bg-white">
        <Card className="p-6 border border-gray-300 rounded-[12px] w-full gap-6 ">
          <div className="flex items-center gap-4">
            <Avatar className="size-[60px]  bg-gradient-to-r from-pink-500 to-orange-500">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg font-semibold">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base text-gray-700 block">예술가</span>
              <h2 className="text-[20px] font-semibold text-gray-900">
                {user.name}
              </h2>
            </div>
          </div>

          <Separator />

          <div className="space-y-4 text-base">
            <div className="flex justify-between items-center">
              <span className=" text-[#525252]">총 프로젝트</span>
              <span className="font-semibold">{user.stats.projects}건</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#525252]">{`총 거래`}</span>
              <span className="font-semibold">{user.stats.techStack}건</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#525252]">희망분야</span>
              <span className="font-semibold">{user.stats.collaborations}</span>
            </div>
          </div>

          {isMe && !isEditMode && (
            <Button
              variant="outline"
              className="w-full h-[52px] rounded-[10px] text-base font-semibold mb-2"
              onClick={onEditToggle}
            >
              프로필 수정하기
            </Button>
          )}
        </Card>
      </aside>
    </div>
  );
}
