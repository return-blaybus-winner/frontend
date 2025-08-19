import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: Props) {
  return (
    <div className="px-4">
      <div className={cn("w-1100 mx-auto flex flex-col", className)}>
        {children}
      </div>
    </div>
  );
}
