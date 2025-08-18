import { IconBaseProps } from "@/app/_icons/type";
import { cn } from "@/lib/utils";

export default function ChevronRightIcon({ className }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
    >
      <path
        d="M10.5104 5.53992L16.5102 11.5546L10.4999 17.5503"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
