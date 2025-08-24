import { useUser } from "@/app/_hooks/use-user";
import ConvertIcon from "@/app/_icons/convert-icon";
import { isArtist, isCorporate } from "@/app/_models/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import React from "react";

export default function UserDropdown() {
  const router = useRouter();
  const user = useUser();

  if (!user.data) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={20}
        className="w-[300px] shadow-[10px_10px_30px_0px_#0000000F] rounded-[12px] borer-gray-400 p-6"
      >
        <DropdownMenuLabel className="flex flex-col gap-1 mb-[50px] p-0">
          <div className="text-gray-700 text-base font-normal">
            {isArtist(user.data) ? "예술가" : "기업"}
          </div>
          <div className="font-semibold text-[20px]">
            {isArtist(user.data)
              ? user.data.profile.artistName
              : isCorporate(user.data)
              ? user.data.profile.companyName
              : ""}
          </div>
        </DropdownMenuLabel>
        <div className="flex flex-col gap-8">
          <DropdownMenuItem
            className="text-[18px] font-medium p-0 "
            onClick={() => router.push(`/users/${user.data.userId}`)}
          >
            프로필
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[18px] font-medium p-0">
            <ConvertIcon />
            <span>기업으로 전환</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-[18px] font-medium p-0 text-gray-600">
            로그아웃
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
