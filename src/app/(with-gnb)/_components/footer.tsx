import Logo from "@/app/_components/logo";
import Facebook from "@/app/_svgs/facebook";
import Google from "@/app/_svgs/google";
import Instagram from "@/app/_svgs/instagram";
import Youtube from "@/app/_svgs/youtube";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-16 pb-[97px] text-base">
      <div className="w-1100 mx-auto px-5">
        {/* 로고 */}
        <div className="mb-4">
          <Logo />
        </div>

        {/* 회사 정보 */}
        <div className="space-y-2 mb-[60px]">
          <div className="flex items-center gap-2">
            <h3 className="mb-2">회사명</h3>
            <h3 className="mb-2">서비스명</h3>
            <h3 className="mb-2">사업자번호</h3>
            <h3 className="mb-2">주소</h3>
          </div>
          <p>
            사이트 내 모든 예술가 및 외회 기업 정보의 무단 수집·활용을 엄격히
            금지합니다.
          </p>
          <p>
            3D Elements Pack 3D Shapes by Екатерина Коршунова, licensed under CC
            BY 4.0 (https://creativecommons.org/licenses/by/4.0/) Source:
            https://www.figma.com/community/file/1333662757253724537/3d-elements-pack-3d-shapes
          </p>
        </div>

        {/* 하단 링크와 소셜 아이콘 */}
        <div className="flex items-center justify-between pt-8 text-gray-600">
          {/* 링크들 */}
          <div className="flex items-center space-x-8">
            <Link href="/#">회사소개</Link>
            <Separator orientation="vertical" className="h-[10px] bg-black" />
            <Link href="/#">공지사항</Link>
            <Separator orientation="vertical" />
            <Link href="/#">개인정보처리방침</Link>
            <Separator orientation="vertical" />
            <Link href="/#">이용약관</Link>
          </div>

          {/* 소셜 아이콘들 */}
          <div className="flex items-center space-x-8 max-h-[30px]">
            <Link
              href="#"
              className="h-[30px] flex items-center justify-center"
            >
              <Youtube />
            </Link>
            <Link
              href="#"
              className="h-[30px] flex items-center justify-center"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              className="h-[30px] flex items-center justify-center"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              className="h-[30px] flex items-center justify-center"
            >
              <Google />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
