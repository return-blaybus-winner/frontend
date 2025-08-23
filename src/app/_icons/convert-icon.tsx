import { IconBaseProps } from "@/app/_icons/type";
import { cn } from "@/lib/utils";

export default function ConvertIcon({ className }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
    >
      <path
        d="M7.5 17.5V6.5M7.5 6.5L11 10M7.5 6.5L4 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 6.5V17.5M16.5 17.5L20 14M16.5 17.5L13 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
