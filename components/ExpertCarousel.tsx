"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { InstructorCard } from "./InstructorCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";

export interface ExpertCarouselProps {
  experts: Array<{
    id: string;
    name: string;
    role: string;
    expertise: string[];
    bio: string;
    photo?: string;
    profileUrl?: string;
  }>;
  autoRotate?: boolean;
  rotationInterval?: number;
  className?: string;
}

export function ExpertCarousel({
  experts,
  autoRotate = true,
  rotationInterval = 3000,
  className,
}: ExpertCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { isMobile, isTablet } = useResponsive();
  const containerRef = useRef<HTMLDivElement>(null);

  // Determine how many experts to show at once
  const itemsPerView = isMobile ? 1 : isTablet ? 2 : 3;

  useEffect(() => {
    if (autoRotate && !isPaused && experts.length > itemsPerView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (experts.length - itemsPerView + 1));
      }, rotationInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate, isPaused, experts.length, itemsPerView, rotationInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (experts.length - itemsPerView + 1));
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + (experts.length - itemsPerView + 1)) % (experts.length - itemsPerView + 1));
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (experts.length === 0) return null;

  // If we have fewer experts than items per view, show all
  const visibleExperts = experts.length <= itemsPerView 
    ? experts 
    : experts.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
      >
        <div
          className={cn(
            "flex transition-transform duration-500 ease-in-out",
            experts.length <= itemsPerView && "justify-center"
          )}
          style={{
            transform: experts.length > itemsPerView
              ? `translateX(-${currentIndex * (100 / itemsPerView)}%)`
              : "translateX(0)",
          }}
        >
          {experts.map((expert, index) => (
            <div
              key={expert.id}
              className={cn(
                "flex-shrink-0",
                isMobile ? "w-full px-2" : isTablet ? "w-1/2 px-3" : "w-1/3 px-4"
              )}
            >
              <InstructorCard instructor={expert} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      {experts.length > itemsPerView && (
        <>
          <Button
            variant="secondary"
            size="sm"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 rounded-full p-2 h-10 w-10 bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background-secondary"
            onClick={goToPrevious}
            aria-label="Previous expert"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 rounded-full p-2 h-10 w-10 bg-background/80 backdrop-blur-sm border border-border shadow-lg hover:bg-background-secondary"
            onClick={goToNext}
            aria-label="Next expert"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </>
      )}

      {/* Dots Indicator */}
      {experts.length > itemsPerView && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: experts.length - itemsPerView + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (intervalRef.current) {
                  clearInterval(intervalRef.current);
                }
              }}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                currentIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-border hover:bg-primary/50"
              )}
              aria-label={`Go to expert ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

