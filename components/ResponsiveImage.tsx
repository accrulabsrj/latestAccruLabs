"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useResponsive } from "@/hooks/useResponsive";

export interface ResponsiveImageProps
  extends Omit<React.ComponentProps<typeof Image>, "src" | "alt"> {
  src: string;
  alt: string;
  mobileSrc?: string;
  tabletSrc?: string;
  desktopSrc?: string;
  className?: string;
}

export function ResponsiveImage({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  className,
  ...props
}: ResponsiveImageProps) {
  const { isMobile, isTablet } = useResponsive();

  // Determine which image source to use
  const imageSrc =
    (isMobile && mobileSrc) ||
    (isTablet && tabletSrc) ||
    desktopSrc ||
    src;

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={cn("object-cover", className)}
      {...props}
    />
  );
}

