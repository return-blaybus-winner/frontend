"use client";

import ChatIcon from "@/app/_icons/chat-icon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import If from "@/components/utils/if";
import Link from "next/link";

export default function UserMenu() {
  const isLoggedIn = true; // Replace with actual authentication logic

  return (
    <>
      <If condition={isLoggedIn}>
        <Button variant="brand" size="default" className="rounded-full">
          프로젝트 등록하기
        </Button>
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
        <Link className="flex items-center space-x-1" href="/login">
          <span>회원가입</span>
          <span>/</span>
          <span>로그인</span>
        </Link>
      </If>
    </>
  );
}
