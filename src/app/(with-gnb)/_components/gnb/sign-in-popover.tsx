import Logo from "@/app/_components/logo";
import KakaoIcon from "@/app/_icons/kakao-icon";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignInPopover() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleSignIn = () => {
    // Handle sign-in logic here
    setOpen(false);
    router.push("/signup");
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
          onClick={handleSignIn}
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
