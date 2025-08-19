"use client";

import SignInPopover from "@/app/(with-gnb)/_components/gnb/sign-in-popover";
import ChatIcon from "@/app/_icons/chat-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import If from "@/components/utils/if";

export default function UserMenu() {
  const isLoggedIn = false; // Replace with actual authentication logic
  const isCompany = true; // Replace with actual company logic

  return (
    <>
      <If condition={isLoggedIn}>
        <If condition={isCompany}>
          <Button variant="brand" size="default" className="rounded-full">
            프로젝트 등록하기
          </Button>
        </If>
        <div className="flex items-center gap-6 pl-6">
          <Button variant="ghost" className="rounded-full">
            <ChatIcon />
          </Button>
          <Avatar>
            <AvatarImage src="" />
            <AvatarFallback>B</AvatarFallback>
          </Avatar>
        </div>
      </If>
      <If condition={!isLoggedIn}>
        <SignInPopover />
      </If>
    </>
  );
}
