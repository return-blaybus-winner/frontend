import Logo from "@/app/_components/logo";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SignInPopover() {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center space-x-1">
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
        <button className="bg-kakao flex items-center w-full h-[52px] rounded-[6px] px-[39px]">
          <KakaoIcon />
          <span className="font-semibold text-base flex-1 text-center">
            카카오로 시작하기
          </span>
        </button>
      </PopoverContent>
    </Popover>
  );
}

function KakaoIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_343_2064)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.00002 0.599609C4.02917 0.599609 0 3.71257 0 7.55189C0 9.93963 1.5584 12.0446 3.93152 13.2966L2.93303 16.9441C2.84481 17.2664 3.21341 17.5233 3.49646 17.3365L7.87334 14.4478C8.2427 14.4835 8.61808 14.5043 9.00002 14.5043C13.9705 14.5043 17.9999 11.3914 17.9999 7.55189C17.9999 3.71257 13.9705 0.599609 9.00002 0.599609Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_343_2064">
          <rect width="17.9999" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
