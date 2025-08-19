import Container from "@/app/_components/container";
import ArrowLeftIcon from "@/app/_icons/arrow-left-icon";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Container className="h-[81px] flex flex-row items-center">
      <Link href="/" className="flex items-center gap-4 hover:text-gray-700">
        <ArrowLeftIcon />
        <span className="text-lg font-semibold">홈으로 돌아가기</span>
      </Link>
    </Container>
  );
}
