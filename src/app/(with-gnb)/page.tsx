import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Heart, Star } from "lucide-react";
import ProjectCard from "@/app/(with-gnb)/_components/project-card";
import Container from "@/app/_components/container";
import SearchIcon from "@/app/_icons/search-icon";
import { BASE_URL } from "@/app/_constants/api";
import Image from "next/image";
import Link from "next/link";
import MatchedProjectCard from "@/app/(with-gnb)/_components/matched-project-card";
import { Separator } from "@/components/ui/separator";
import CompanyCard from "@/app/(with-gnb)/_components/company-card";

export default async function Home() {
  // const categories = await fetch(`${BASE_URL}/v0/categories/project/tree`);
  // console.log("🚀 ~ Home ~ categories:", categories);

  return (
    <Container className="py-[90px] items-center">
      <h1 className="text-[40px] font-bold text-gray-950 mb-[10px]">
        일상을 바꾸는 예술가들의 첫 걸음
      </h1>
      <p className="text-base text-gray-600 mb-12">
        {`"일상을 특별하게 만드는 창작의 시작"`}
      </p>

      <div className="relative w-[540px] mb-[90px]">
        <Input
          placeholder="검색어를 입력해보세요"
          className="bg-[#F7F7FB] outline-none  text-base placeholder:text-gray-600 w-full pl-14 py-[19px] rounded-[12px] border-none shadow-input-2 focus-visible:shadow-input-2"
        />
        <SearchIcon className="text-gray-600 absolute left-5 top-1/2 transform -translate-y-1/2 size-7" />
      </div>
      <div className="mx-auto flex items-center">
        {Array.from({ length: 7 }).map((_, index) => (
          <Link href={"/"} className="px-4 flex flex-col gap-1" key={index}>
            <div className="relative h-[100px] w-[124px] flex items-center justify-center">
              <Image
                src={`/images/home/${index}.png`}
                alt="Exhibition Planning"
                className="rounded-md object-contain absolute py-[22px] "
                fill
              />
            </div>
            <div className="text-base text-center">전시 기획/참여</div>
          </Link>
        ))}
      </div>

      <section className="pt-[137px]">
        <div className="mb-8 flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-[28px] font-semibold">프로젝트 추천</h2>
            <p className="text-gray-600 whitespace-pre-line">
              {`“새로운 창작의 기회는 언제나 가까이에 있습니다. \n당신의 가능성을 넓히고, 예술가와 브랜드가 함께 성장할 수 있는 다양한 프로젝트를 추천해드립니다.”`}
            </p>
          </div>
          <Button
            variant="outline"
            className="w-[102px] rounded-[100px] font-semibold text-base py-[10px]"
          >
            모두 보기
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProjectCard
              key={index}
              project={{
                area: "디자인",
                deadline: "2025-12-31",
                description: "최신 디자인 트렌드를 반영한 프로젝트",
                id: "1",
                imageUrl: "/images/project1.jpg",
                liked: index % 2 === 0,
                numberOfPeople: 10,
                title: "Fusion Art Installation 2025",
              }}
            />
          ))}
        </div>
      </section>
      <section className="pt-[120px]">
        <div className="mb-8 flex items-end justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-[28px] font-semibold">
              최근 매칭 성공한 프로젝트
            </h2>
            <p className="text-gray-600 whitespace-pre-line">
              {`“본 플랫폼에서 실제로 이루어진 협업 성과를 소개합니다. \n예술가와 기업이 매칭되어 완성한 다양한 프로젝트를 통해, 성공적인 파트너십의 가능성을 확인해보세요.”`}
            </p>
          </div>
          <Button
            variant="outline"
            className="w-[102px] rounded-[100px] font-semibold text-base py-[10px]"
          >
            모두 보기
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <MatchedProjectCard
              key={index}
              project={{
                area: "디자인",
                deadline: "2025-12-31",
                description: "최신 디자인 트렌드를 반영한 프로젝트",
                id: "1",
                imageUrl: "/images/project1.jpg",
                liked: index % 2 === 1,
                numberOfPeople: 10,
                title: "Fusion Art Installation 2025",
              }}
            />
          ))}
        </div>
      </section>

      <section className="pt-[120px] w-full">
        <h2 className="text-[28px] font-semibold">국내 대표 협업매칭 플랫폼</h2>
        <div className="flex items-center bg-white mt-8 shadow-card rounded-[16px] px-[9px] py-6 gap-[5px]">
          <div className="w-[340px] p-8 flex flex-col gap-2">
            <div className="text-[40px] font-bold text-primary tracking-[-2.5%]">
              95.5%
            </div>
            <div className="text-[20px] text-gray-600 font-medium">
              의뢰자 만족비율
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="min-h-[60px] bg-[#d4d4d4]"
          />
          <div className="w-[340px] p-8 flex flex-col gap-2">
            <div className="text-[40px] font-bold text-900">29만명 +</div>
            <div className="text-[20px] text-gray-600 font-medium">
              예술가 수
            </div>
          </div>
          <Separator
            orientation="vertical"
            className="min-h-[60px] bg-[#d4d4d4]"
          />
          <div className="w-[340px] p-8 flex flex-col gap-2">
            <div className="text-[40px] font-bold text-gray-900">4만건 +</div>
            <div className="text-[20px] text-gray-600 font-medium">
              기업 의뢰 수
            </div>
          </div>
        </div>
      </section>

      {/* Company Profiles */}
      <section className="py-[120px] w-full">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-[28px] font-semibold">
            최근 매칭 성공한 프로젝트
          </h2>
          <Button
            variant="outline"
            className="w-[102px] rounded-[100px] font-semibold text-base py-[10px]"
          >
            기업 더보기
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <CompanyCard key={index} />
          ))}
        </div>
      </section>
    </Container>
  );
}
