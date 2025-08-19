import { IconBaseProps } from "@/app/_icons/type";
import { cn } from "@/lib/utils";

export default function ChevronDownIcon({ className }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
    >
      <path
        d="M18.46 10.0107L12.4453 16.0106L6.44962 10.0003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
