import { IconBaseProps } from "@/app/_icons/type";
import { cn } from "@/lib/utils";

export default function MenuIcon({ className }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-6", className)}
    >
      <rect x="4" y="5" width="16" height="2" rx="0.2" fill="currentColor" />
      <rect x="4" y="11" width="16" height="2" rx="0.2" fill="currentColor" />
      <rect x="4" y="17" width="16" height="2" rx="0.2" fill="currentColor" />
    </svg>
  );
}
