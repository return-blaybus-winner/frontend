"use client";

import Container from "@/app/_components/container";
import { UserRole } from "@/app/_model/user";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

export default function SignupSuccessPage() {
  const router = useRouter();

  return (
    <Container className="flex flex-row gap-10 py-10 px-5">
      <div className="flex-1 space-y-10">
        <Suspense>
          <Heading />
        </Suspense>
        <Button
          variant="brand"
          size="lg"
          className="w-full"
          onClick={() => {
            router.push("/");
          }}
        >
          메인으로
        </Button>
      </div>
      <div className="w-[590px] rounded-xl"></div>
    </Container>
  );
}

function Heading() {
  const from = useSearchParams().get("from");
  return (
    <div>
      <h1 className="font-semibold text-gray-950 text-[28px] whitespace-pre-line">{`가입 완료!`}</h1>
      <p className="mt-3 font-medium text-base text-gray-600">
        {from === UserRole.Artist
          ? "무브텀과 함께 일상을 바꾸는 창작을 시작해보세요."
          : "무브텀에서 뛰어난 아티스트를 만나보세요."}
      </p>
    </div>
  );
}
