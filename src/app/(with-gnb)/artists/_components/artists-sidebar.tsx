"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useArtCategories } from "@/app/_hooks/use-art-categories";
import LocationFilter from "@/app/(with-gnb)/projects/_components/location-filter";
import { useSearchParams } from "next/navigation";
import CategoryFilter from "@/app/(with-gnb)/projects/_components/category-filter";
import CareerFilter from "@/app/(with-gnb)/artists/_components/career-filter";

export default function ArtistsSidebar() {
  const searchParams = useSearchParams();
  const { data: artCategories } = useArtCategories();

  const keys = Array.from(searchParams.keys());

  return (
    <div className="w-[300px] bg-white rounded-lg h-fit">
      <h1 className="text-[24px] flex items-center h-20 font-semibold mb-12">
        예술가 찾기
      </h1>
      <div className="h-[44px] flex items-center font-semibold text-base">
        필터
      </div>

      <Accordion type="multiple" className="w-full" defaultValue={keys}>
        <AccordionItem value="category" className="border-0">
          <AccordionTrigger className="py-2 font-medium hover:no-underline">
            분야
          </AccordionTrigger>
          <AccordionContent>
            <CategoryFilter categories={artCategories ?? []} />
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
            경력
          </AccordionTrigger>
          <AccordionContent>
            <CareerFilter />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
