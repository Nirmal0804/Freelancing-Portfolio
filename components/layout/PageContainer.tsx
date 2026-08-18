import React from "react";
import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  usePadding?: boolean;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
  usePadding = false,
}) => {
  return (
    <div
      className={cn(
        "max-w-[1360px] mx-auto w-full",
        usePadding && "px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};
