import { IconBaseProps } from "@/app/_icons/type";
import { cn } from "@/lib/utils";

export default function SearchIcon({ className }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
    >
      <circle
        cx="11"
        cy="10.5"
        r="6.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M21.5 21L16 15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
