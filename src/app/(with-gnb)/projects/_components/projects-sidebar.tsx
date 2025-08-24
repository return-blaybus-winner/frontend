"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CategoryFilter from "./category-filter";
import { useProjectCategories } from "@/app/_hooks/use-project-categories";
import { useArtCategories } from "@/app/_hooks/use-art-categories";
import PeriodFilter from "@/app/(with-gnb)/projects/_components/period-filter";
import RecruitNumberFilter from "@/app/(with-gnb)/projects/_components/recruit-number-filter";
import LocationFilter from "@/app/(with-gnb)/projects/_components/location-filter";
import { useSearchParams } from "next/navigation";

export default function ProjectsSidebar() {
  const searchParams = useSearchParams();

  const { data: projectCategories } = useProjectCategories();
  const { data: artCategories } = useArtCategories();

  const artCategoryParams = searchParams.get("artCategories") || "";
  const projectCategoryParams = searchParams.get("projectCategories") || "";

  function hasArtCategories() {
    return artCategoryParams.length > 0;
  }

  function hasProjectCategories() {
    return projectCategoryParams.length > 0;
  }

  const keys = Array.from(searchParams.keys());

  const getDefaultValues = () => {
    const arr = keys;
    if (hasArtCategories()) arr.push("category1");
    if (hasProjectCategories()) arr.push("category2");
    return arr;
  };

  return (
    <div className="w-[300px] bg-white rounded-lg h-fit">
      <h1 className="text-[24px] flex items-center h-20 font-semibold mb-12">
        프로젝트 찾기
      </h1>
      <div className="h-[44px] flex items-center font-semibold text-base">
        필터
      </div>

      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={getDefaultValues()}
      >
        <AccordionItem value="category1" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            분야
          </AccordionTrigger>
          <AccordionContent>
            <CategoryFilter categories={artCategories ?? []} paramName="artCategories" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="category2" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            유형
          </AccordionTrigger>
          <AccordionContent>
            <CategoryFilter categories={projectCategories ?? []} paramName="projectCategories" />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="minRecruitNumber" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            모집인원
          </AccordionTrigger>
          <AccordionContent>
            <RecruitNumberFilter />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            지역
          </AccordionTrigger>
          <AccordionContent>
            <LocationFilter />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="period" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            기간
          </AccordionTrigger>
          <AccordionContent>
            <PeriodFilter />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
