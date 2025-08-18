import Logo from "@/app/_components/logo";
import MenuIcon from "@/app/_icons/menu-icon";
import Link from "next/link";

export default function GNB() {
  return (
    <header className="w-full border-b border-gray-300 text-gray-900 h-[81px] flex items-center px-4 text-lg font-semibold fixed bg-white">
      <div className="w-1100 mx-auto flex items-center">
        <Logo />

        <nav className="flex items-center space-x-8 pl-[95px] flex-1">
          <button className="flex items-center space-x-1">
            <MenuIcon />
            <span>카테고리</span>
          </button>
          <Link href="/artist">예술가 찾기</Link>
          <Link href="/company">기업찾기</Link>
        </nav>

        <Link className="flex items-center space-x-1" href="/login">
          <span>회원가입</span>
          <span>/</span>
          <span>로그인</span>
        </Link>
      </div>
    </header>
  );
}
