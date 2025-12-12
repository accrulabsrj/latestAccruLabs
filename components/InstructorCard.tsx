"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";
import { Card } from "./Card";
import { ResponsiveImage } from "./ResponsiveImage";

export interface Instructor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  bio: string;
  photo?: string;
  profileUrl?: string;
}

export interface InstructorCardProps {
  instructor: Instructor;
  className?: string;
}

export function InstructorCard({ instructor, className }: InstructorCardProps) {
  const { isMobile, isDesktop } = useResponsive();
  const [showFullBio, setShowFullBio] = useState(false);

  const bioPreview = instructor.bio.length > 150
    ? instructor.bio.substring(0, 150) + "..."
    : instructor.bio;

  return (
    <Card
      hover
      className={cn("text-center", className)}
      onClick={() => isDesktop && setShowFullBio(!showFullBio)}
    >
      <div className="space-y-4">
        {/* Photo */}
        {instructor.photo ? (
          <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-primary/30">
            <ResponsiveImage
              src={instructor.photo}
              alt={instructor.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="mx-auto w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-bold text-background">
              {instructor.name.charAt(0)}
            </span>
          </div>
        )}

        {/* Name & Role */}
        <div>
          <h3
            className={cn(
              "font-semibold text-text-primary mb-1",
              isMobile ? "text-lg" : "text-xl"
            )}
          >
            {instructor.name}
          </h3>
          <p
            className={cn(
              "text-primary mb-2",
              isMobile ? "text-sm" : "text-base"
            )}
          >
            {instructor.role}
          </p>
        </div>

        {/* Expertise */}
        {instructor.expertise.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {instructor.expertise.slice(0, isMobile ? 2 : 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-background-tertiary text-text-secondary rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
            {instructor.expertise.length > (isMobile ? 2 : 3) && (
              <span className="px-2 py-1 text-xs text-text-tertiary">
                +{instructor.expertise.length - (isMobile ? 2 : 3)}
              </span>
            )}
          </div>
        )}

        {/* Bio */}
        <div>
          <p
            className={cn(
              "text-text-secondary",
              isMobile ? "text-sm" : "text-base"
            )}
          >
            {isDesktop && showFullBio ? instructor.bio : bioPreview}
          </p>
          {isDesktop && instructor.bio.length > 150 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowFullBio(!showFullBio);
              }}
              className="mt-2 text-primary text-sm hover:underline"
            >
              {showFullBio ? "Show less" : "Show more"}
            </button>
          )}
        </div>

        {/* Profile Link */}
        {instructor.profileUrl && (
          <a
            href={instructor.profileUrl}
            className={cn(
              "inline-block text-primary text-sm hover:underline",
              "min-h-[var(--touch-target-min)]"
            )}
          >
            View Profile →
          </a>
        )}
      </div>
    </Card>
  );
}

