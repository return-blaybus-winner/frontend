import { IconBaseProps } from "@/app/_icons/type";
import { cn } from "@/lib/utils";

export default function ArrowLeftIcon({ className }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
    >
      <path
        d="M20.0073 11.9995L4.00744 11.9995M4.00744 11.9995L10.0073 18.0141M4.00744 11.9995L10.0074 6.0142"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
