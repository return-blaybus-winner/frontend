import { CategoryHoverCard } from "@/app/(with-gnb)/_components/gnb/category-hover-card";
import UserMenu from "@/app/(with-gnb)/_components/gnb/user-menu";
import Logo from "@/app/_components/logo";
import Link from "next/link";

export default function GNB() {
  return (
    <header className="z-50 w-full border-b border-gray-300 text-gray-900 h-[81px] flex items-center text-lg font-semibold fixed bg-white select-none">
      <div className="w-1100 px-5 mx-auto flex items-center h-full">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="flex items-center space-x-8 pl-[95px] flex-1 h-full">
          <CategoryHoverCard />
          <Link href="/artist">예술가 찾기</Link>
          <Link href="/company">기업찾기</Link>
        </nav>
        <UserMenu />
      </div>
    </header>
  );
}
