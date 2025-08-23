"use client";

import Image from "next/image";
import Link from "next/link";
import { useProjectCategories } from "@/app/_hooks/use-project-categories";

export default function CategoryGrid() {
  const { data: categories } = useProjectCategories();
  return (
    <div className="mx-auto flex items-center">
      {categories?.map((item, index) => (
        <Link
          href={`/projects/?category=${item.code}`}
          className="px-4 flex flex-col gap-1"
          key={item.code}
        >
          <div className="relative h-[100px] w-[124px] flex items-center justify-center">
            <Image
              src={`/images/home/${index}.png`}
              alt="Project Category"
              className="rounded-md object-contain absolute py-[22px]"
              fill
            />
          </div>
          <div className="text-base text-center">{item.description}</div>
        </Link>
      ))}
    </div>
  );
}
