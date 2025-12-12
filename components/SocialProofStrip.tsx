"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface SocialProofItem {
  label: string;
  value?: string;
  icon?: React.ReactNode;
}

export interface SocialProofStripProps {
  items?: SocialProofItem[];
  className?: string;
}

export function SocialProofStrip({
  items = [],
  className,
}: SocialProofStripProps) {
  const { isMobile } = useResponsive();

  const defaultItems: SocialProofItem[] = [
    { label: "Trusted by", value: "500+ Organizations" },
    { label: "Trained", value: "11K+ Professionals" },
    { label: "CA-led", value: "Expert Team" },
    { label: "Governance-first", value: "Approach" },
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div
      className={cn(
        "py-6 sm:py-8 border-y border-border bg-background-secondary/50",
        className
      )}
    >
      <div className="container-responsive">
        <div
          className={cn(
            "flex items-center justify-center gap-6 sm:gap-8 lg:gap-12",
            isMobile ? "overflow-x-auto hide-scrollbar" : "flex-wrap"
          )}
        >
          {displayItems.map((item, index) => (
            <div
              key={index}
              className={cn(
                "flex items-center gap-3 flex-shrink-0",
                isMobile ? "min-w-max" : ""
              )}
            >
              {item.icon && (
                <div className="text-primary opacity-60">{item.icon}</div>
              )}
              <div className="text-center sm:text-left">
                {item.value && (
                  <div
                    className={cn(
                      "font-bold text-text-primary",
                      isMobile ? "text-sm" : "text-base"
                    )}
                  >
                    {item.value}
                  </div>
                )}
                <div
                  className={cn(
                    "text-text-tertiary",
                    isMobile ? "text-xs" : "text-sm"
                  )}
                >
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

