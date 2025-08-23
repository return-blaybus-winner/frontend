import Logo from "@/app/_components/logo";
import KakaoIcon from "@/app/_icons/kakao-icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { kakaoAuth, type KakaoUser } from "@/lib/kakao";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPopover() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleKakaoSignIn = async () => {
    try {
      const user: KakaoUser = await kakaoAuth.login();
      console.log("카카오 로그인 성공:", user);

      // TODO: 서버에 사용자 정보 전송 및 토큰 처리
      // const response = await fetch('/api/auth/kakao', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ kakaoUser: user })
      // });

      setOpen(false);
      // 로그인 성공 후 리다이렉트 또는 상태 업데이트
      router.push("/");
    } catch (error) {
      console.error("카카오 로그인 실패:", error);
      // 에러 처리 (토스트 메시지 등)
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex items-center space-x-1 cursor-pointer">
        <span>회원가입</span>
        <span>/</span>
        <span>로그인</span>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={28}
        side="bottom"
        align="end"
        className="w-[447px] flex flex-col items-center p-8 pb-10 gap-6"
      >
        <Logo />
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-xl">무브텀에 오신걸 환영해요!</h2>
          <p className="text-base text-gray-600">카카오로 간편하게 시작해요</p>
        </div>
        <button
          className="bg-kakao hover:bg-kakao/80 flex items-center w-full h-[52px] rounded-[6px] px-[39px]"
          onClick={handleKakaoSignIn}
        >
          <KakaoIcon />
          <span className="font-semibold text-base flex-1 text-center">
            카카오로 시작하기
          </span>
        </button>
      </PopoverContent>
    </Popover>
  );
}
