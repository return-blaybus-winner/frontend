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

export default function ProjectsSidebar() {
  const { data: projectCategories } = useProjectCategories();
  const { data: artCategories } = useArtCategories();

  return (
    <div className="w-[300px] bg-white rounded-lg h-fit">
      <h1 className="text-[24px] flex items-center h-20 font-semibold mb-12">
        프로젝트 찾기
      </h1>
      <div className="h-[44px] flex items-center font-semibold text-base">
        필터
      </div>

      <Accordion type="multiple" className="w-full">
        <AccordionItem value="분야" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            분야
          </AccordionTrigger>
          <AccordionContent>
            <CategoryFilter categories={artCategories ?? []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="유형" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            유형
          </AccordionTrigger>
          <AccordionContent>
            <CategoryFilter categories={projectCategories ?? []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="모집인원" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            모집인원
          </AccordionTrigger>
          <AccordionContent>
            <RecruitNumberFilter />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="지역" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            지역
          </AccordionTrigger>
          <AccordionContent>
            <LocationFilter />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="기간" className="border-0">
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
