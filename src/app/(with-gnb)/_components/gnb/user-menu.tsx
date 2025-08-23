"use client";

import SignInPopover from "@/app/(with-gnb)/_components/gnb/sign-in-popover";
import UserDropdown from "@/app/(with-gnb)/_components/gnb/user-dropdown";
import ChatIcon from "@/app/_icons/chat-icon";
import { Button } from "@/components/ui/button";
import If from "@/components/utils/if";
import Link from "next/link";

export default function UserMenu() {
  const isLoggedIn = false; // Replace with actual authentication logic
  const isCompany = true; // Replace with actual company logic

  return (
    <>
      <If condition={isLoggedIn}>
        <If condition={isCompany}>
          <Button
            variant="brand"
            size="default"
            className="rounded-[12px]"
            asChild
          >
            <Link href={"/projects/create"}>프로젝트 등록하기</Link>
          </Button>
        </If>
        <div className="flex items-center gap-6 pl-6">
          <Button variant="ghost" className="rounded-full">
            <ChatIcon />
          </Button>
          <UserDropdown />
        </div>
      </If>
      <If condition={!isLoggedIn}>
        <SignInPopover />
      </If>
    </>
  );
}
