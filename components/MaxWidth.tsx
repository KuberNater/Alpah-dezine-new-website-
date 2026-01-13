import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IMaxWidth {
  className?: string;
  children: ReactNode;
}

function MaxWidth({ className, children }: IMaxWidth) {
  return (
    <div
      className={cn(
        "h-full mx-auto max-w-7xl font-dan px-2.5 ",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidth;