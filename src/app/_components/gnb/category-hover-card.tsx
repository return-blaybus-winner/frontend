"use client";

import ChevronRightIcon from "@/app/_icons/chevron-right-icon";
import MenuIcon from "@/app/_icons/menu-icon";
import SearchIcon from "@/app/_icons/search-icon";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Portal } from "@radix-ui/react-portal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CategoryHoverCard() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <>
      <HoverCard
        openDelay={0}
        closeDelay={0}
        open={open}
        onOpenChange={setOpen}
      >
        <HoverCardTrigger
          className="flex items-center space-x-1 cursor-pointer h-full"
          onClick={(e) => {
            e.preventDefault();
            router.push("/projects");
          }}
        >
          <MenuIcon />
          <span>카테고리</span>
        </HoverCardTrigger>

        <HoverCardContent
          sideOffset={0}
          side="top"
          className={cn(
            "z-10 w-screen duration-300",
            open ? "" : "pointer-events-none"
          )}
        >
          <div className="w-1100 mx-auto px-10 pt-5 pb-10">
            <div className="flex items-center relative">
              <Input
                placeholder="'디자인 워크숍'을 검색해보세요."
                className="rounded-full h-12 border-none bg-gray-100 px-5 text-base outline-none"
              />
              <Button variant="ghost">
                <SearchIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600" />
              </Button>
            </div>
            <nav className="pt-5 px-5 grid grid-cols-5 text-base">
              {menus.map((menu) => (
                <div key={menu.id} className="w-[160px]">
                  <Link
                    href={`/projects/?category=${menu.id}`}
                    className="flex items-end font-bold text-gray-800 hover:text-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">{menu.title}</span>
                    <ChevronRightIcon className="size-6" />
                  </Link>
                  <div className="mt-5 flex flex-col gap-3">
                    {menu.submenus.map((submenu) => (
                      <Link
                        href={`/projects/?category=${submenu.id}`}
                        key={submenu.id}
                        className="text-base text-gray-600 hover:text-gray-700 cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        {submenu.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Portal>
        <div
          data-state={open ? "open" : "closed"}
          className="fixed left-0 top-0 z-10 h-full w-full bg-black/60 transition-opacity data-[state=closed]:pointer-events-none data-[state=open]:pointer-events-auto data-[state=closed]:opacity-0 data-[state=closed]:duration-300 data-[state=open]:duration-300"
        />
      </Portal>
    </>
  );
}

const menus = [
  { id: "all", title: "카테고리 전체", submenus: [] },
  {
    id: "visual_arts",
    title: "시각예술",
    submenus: [
      { id: "painting", title: "회화", submenus: [] },
      { id: "sculpture", title: "조소", submenus: [] },
      { id: "printmaking", title: "판화", submenus: [] },
      { id: "photo", title: "사진", submenus: [] },
      { id: "digital_art", title: "디지털 아트", submenus: [] },
    ],
  },
  {
    id: "craft",
    title: "공예",
    submenus: [
      { id: "ceramics", title: "도예", submenus: [] },
      { id: "woodworking", title: "목공예", submenus: [] },
      { id: "metalworking", title: "금속공예", submenus: [] },
      { id: "textiles", title: "섬유공예", submenus: [] },
      { id: "glass", title: "유리공예", submenus: [] },
    ],
  },
  {
    id: "literature",
    title: "문학 창작",
    submenus: [
      { id: "fiction", title: "소설", submenus: [] },
      { id: "poetry", title: "시 / 수필", submenus: [] },
      { id: "screenplay", title: "시나리오", submenus: [] },
      { id: "publishing", title: "출판기획", submenus: [] },
    ],
  },
  {
    id: "performance",
    title: "퍼포먼스",
    submenus: [
      { id: "music", title: "음악", submenus: [] },
      { id: "dance", title: "무용", submenus: [] },
      { id: "theater", title: "연극", submenus: [] },
      { id: "film", title: "영상", submenus: [] },
    ],
  },
];
