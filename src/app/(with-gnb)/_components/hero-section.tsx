import { Input } from "@/components/ui/input";
import SearchIcon from "@/app/_icons/search-icon";
import { HERO_TITLE, HERO_SUBTITLE } from "../_constants/home";

export default function HeroSection() {
  return (
    <div className="py-[90px] items-center flex flex-col">
      <h1 className="text-[40px] font-bold text-gray-950 mb-[10px]">
        {HERO_TITLE}
      </h1>
      <p className="text-base text-gray-600 mb-12">
        {`"${HERO_SUBTITLE}"`}
      </p>

      <div className="relative w-[540px] mb-[90px]">
        <Input
          placeholder="검색어를 입력해보세요"
          className="bg-[#F7F7FB] outline-none text-base placeholder:text-gray-600 w-full pl-14 py-[19px] rounded-[12px] border-none shadow-input-2 focus-visible:shadow-input-2"
        />
        <SearchIcon className="text-gray-600 absolute left-5 top-1/2 transform -translate-y-1/2 size-7" />
      </div>
    </div>
  );
}