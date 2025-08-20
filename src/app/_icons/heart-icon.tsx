import { IconBaseProps } from "@/app/_icons/type";
import { cn } from "@/lib/utils";

export default function HeartIcon({ className }: IconBaseProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-4", className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99804 4.42388C6.66514 2.8656 4.44243 2.44643 2.7724 3.87334C1.10237 5.30026 0.867249 7.68598 2.17874 9.3736C3.26915 10.7767 6.56912 13.7361 7.65067 14.6939C7.77167 14.801 7.83218 14.8546 7.90275 14.8757C7.96434 14.8941 8.03174 14.8941 8.09333 14.8757C8.1639 14.8546 8.2244 14.801 8.34541 14.6939C9.42696 13.7361 12.7269 10.7767 13.8173 9.3736C15.1288 7.68598 14.9224 5.28525 13.2237 3.87334C11.5249 2.46144 9.33094 2.8656 7.99804 4.42388Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
