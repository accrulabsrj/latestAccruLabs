"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpen = [],
  className,
}: AccordionProps) {
  const { isMobile } = useResponsive();
  const [openItems, setOpenItems] = useState<string[]>(defaultOpen);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              "border border-border rounded-xl overflow-hidden transition-all duration-300",
              isOpen && "border-primary"
            )}
          >
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 sm:p-6 text-left",
                "hover:bg-background-tertiary transition-colors",
                "min-h-[var(--touch-target-min)]",
                isMobile && "p-4"
              )}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span
                className={cn(
                  "font-semibold pr-4",
                  isMobile ? "text-base" : "text-lg"
                )}
              >
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "flex-shrink-0 transition-transform duration-300",
                  isOpen && "transform rotate-180",
                  "w-5 h-5"
                )}
              />
            </button>
            <div
              id={`accordion-content-${item.id}`}
              className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div
                className={cn(
                  "px-4 sm:px-6 pb-4 sm:pb-6 text-text-secondary",
                  isMobile ? "text-sm" : "text-base"
                )}
              >
                {typeof item.answer === "string" ? (
                  <p>{item.answer}</p>
                ) : (
                  item.answer
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

