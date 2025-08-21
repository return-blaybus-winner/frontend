import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-gray-300 placeholder:text-muted-foreground px-5 py-3 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-200 border bg-transparent text-base shadow-xs transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:outline-1 focus-visible:outline-primary focus-visible:-outline-offset-1 focus-visible:shadow-input",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
