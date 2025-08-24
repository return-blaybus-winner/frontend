"use client";

import SignInPopover from "@/app/(with-gnb)/_components/gnb/sign-in-popover";
import UserDropdown from "@/app/(with-gnb)/_components/gnb/user-dropdown";
import { useUser } from "@/app/_hooks/use-user";
import ChatIcon from "@/app/_icons/chat-icon";
import { UserRole } from "@/app/_models/user";
import { Button } from "@/components/ui/button";
import If from "@/components/utils/if";
import Link from "next/link";

export default function UserMenu() {
  const user = useUser();
  const isCorporate = user.data?.role === UserRole.CORPORATE;

  return (
    <>
      <If condition={!!user.data?.role}>
        <If condition={isCorporate}>
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
      <If condition={!user.data?.role}>
        <SignInPopover />
      </If>
    </>
  );
}
