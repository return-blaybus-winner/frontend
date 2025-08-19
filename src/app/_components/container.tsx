import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: Props) {
  return (
    <div className={cn("px-4", className)}>
      <div className="w-1100 mx-auto flex flex-col">{children}</div>
    </div>
  );
}
