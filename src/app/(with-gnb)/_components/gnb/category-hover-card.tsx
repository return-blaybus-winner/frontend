"use client";

import { useArtCategories } from "@/app/_hooks/use-art-categories";
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
  const { data: categories } = useArtCategories();
  return (
    <>
      <HoverCard
        openDelay={200}
        closeDelay={200}
        open={open}
        onOpenChange={setOpen}
      >
        <HoverCardTrigger
          className="flex items-center space-x-1 cursor-pointer h-full"
          onClick={(e) => {
            e.preventDefault();
            router.push("/projects");
            setOpen(false);
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
              <Link
                href={`/projects`}
                className="flex font-bold text-gray-800 hover:text-gray-600"
                onClick={() => setOpen(false)}
              >
                <span className="text-lg">{"카테고리 전체"}</span>
                <ChevronRightIcon className="size-6" />
              </Link>
              {categories?.map((category) => (
                <div key={category.code} className="w-[160px]">
                  <Link
                    href={`/projects/?category=${category.code}`}
                    className="flex items-end font-bold text-gray-800 hover:text-gray-600"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-lg">{category.description}</span>
                    <ChevronRightIcon className="size-6" />
                  </Link>
                  <div className="mt-5 flex flex-col gap-3">
                    {category.children.map((subcategory) => (
                      <Link
                        href={`/projects/?category=${subcategory.code}`}
                        key={subcategory.code}
                        className="text-base text-gray-600 hover:text-gray-700 cursor-pointer"
                        onClick={() => setOpen(false)}
                      >
                        {subcategory.description}
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
