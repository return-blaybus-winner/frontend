import { isArtist, isCorporate, User, UserRole } from "@/app/_models/user";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface UserSidebarProps {
  user: User;
}

export default function UserSidebar({ user }: UserSidebarProps) {
  return (
    <div className="w-[300px]">
      <aside className="sticky top-28 bg-white">
        <Card className="p-6 pb-8 border border-gray-300 rounded-[12px] w-full gap-6 ">
          <div className="flex items-center gap-4">
            <Avatar className="size-[60px]  bg-gradient-to-r from-pink-500 to-orange-500">
              <AvatarImage src="/profile.png" alt={user.name} />
              <AvatarFallback className="bg-gradient-to-r from-pink-500 to-orange-500 text-white text-lg font-semibold">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base text-gray-700 block">
                {user.role === UserRole.ARTIST ? "예술가" : "기업"}
              </span>
              <h2 className="text-[20px] font-semibold text-gray-900">
                {isArtist(user)
                  ? user.profile.artistName
                  : isCorporate(user)
                  ? user.profile.companyName
                  : user.name}
              </h2>
            </div>
          </div>

          <Separator />

          <div className="space-y-4 text-base">
            {isArtist(user) && (
              <>
                <div className="flex justify-between items-center">
                  <span className=" text-[#525252]">총 프로젝트</span>
                  <span className="font-semibold">
                    {user.profile.totalProjects}건
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#525252]">{`총 거래`}</span>
                  <span className="font-semibold">
                    {user.profile.totalTransactions}건
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#525252]">희망분야</span>
                  <span className="font-semibold">
                    {user.profile.representativeField}
                  </span>
                </div>
              </>
            )}
            {isCorporate(user) && (
              <>
                <div className="flex justify-between items-center">
                  <span className=" text-[#525252]">총 프로젝트</span>
                  <span className="font-semibold">
                    {user.profile.totalProjects}건
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#525252]">협업 아티스트</span>
                  <span className="font-semibold">
                    {user.profile.totalArtists}명
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#525252]">기업 유형</span>
                  <span className="font-semibold">
                    {user.profile.companyType}
                  </span>
                </div>
              </>
            )}
          </div>
        </Card>
      </aside>
    </div>
  );
}
