"use client";

import Image from "next/image";
import Link from "next/link";
import { useProjectCategories } from "@/app/_hooks/use-project-categories";

export default function CategoryGrid() {
  const { data: categories } = useProjectCategories();
  return (
    <div className="mx-auto flex items-center">
      {categories?.map((category, index) => (
        <Link
          href={`/projects/?category=${[
            ...category.children.flatMap((child) => child.code),
            category.code,
          ].join(",")}`}
          className="px-4 flex flex-col gap-1"
          key={category.code}
        >
          <div className="relative h-[100px] w-[124px] flex items-center justify-center">
            <Image
              src={`/images/home/${index}.png`}
              alt="Project Category"
              className="rounded-md object-contain absolute py-[22px]"
              fill
            />
          </div>
          <div className="text-base text-center">{category.description}</div>
        </Link>
      ))}
    </div>
  );
}
