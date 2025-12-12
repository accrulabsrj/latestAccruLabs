"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export function Grid({
  cols = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "md",
  className,
  children,
  ...props
}: GridProps) {
  const { isMobile, isTablet } = useResponsive();

  const gapClasses = {
    sm: "gap-4",
    md: isMobile ? "gap-4" : "gap-6",
    lg: isMobile ? "gap-6" : "gap-8",
    xl: isMobile ? "gap-8" : "gap-12",
  };

  // Map of all possible grid column classes (Tailwind needs full class names)
  const gridColsMap: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
    5: "grid-cols-5",
    6: "grid-cols-6",
  };

  const mdGridColsMap: Record<number, string> = {
    1: "md:grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
    5: "md:grid-cols-5",
    6: "md:grid-cols-6",
  };

  const lgGridColsMap: Record<number, string> = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
    6: "lg:grid-cols-6",
  };

  const mobileCols = cols.mobile || 1;
  const tabletCols = cols.tablet || 2;
  const desktopCols = cols.desktop || 3;

  return (
    <div
      className={cn(
        "grid",
        gridColsMap[mobileCols] || "grid-cols-1",
        tabletCols && mdGridColsMap[tabletCols],
        desktopCols && lgGridColsMap[desktopCols],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

