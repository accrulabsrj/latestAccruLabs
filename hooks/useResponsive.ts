"use client";

import { useState, useEffect } from "react";
import { useDevice } from "@/hooks/useDevice";

export type Breakpoint = "mobile" | "tablet" | "desktop";

export function useResponsive() {
  const device = useDevice();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR and initial render, assume desktop to prevent hydration mismatch
  const isMobile = mounted ? device.isMobile : false;
  const isTablet = mounted ? device.isTablet : false;
  const isDesktop = mounted ? device.isDesktop : true;

  /**
   * Get responsive value based on device type
   */
  function getResponsiveValue<T>(values: {
    mobile?: T;
    tablet?: T;
    desktop?: T;
    default?: T;
  }): T | undefined {
    if (isMobile && values.mobile !== undefined) {
      return values.mobile;
    }
    if (isTablet && values.tablet !== undefined) {
      return values.tablet;
    }
    if (isDesktop && values.desktop !== undefined) {
      return values.desktop;
    }
    return values.default;
  }

  /**
   * Check if current breakpoint matches
   */
  function matches(breakpoint: Breakpoint): boolean {
    switch (breakpoint) {
      case "mobile":
        return isMobile;
      case "tablet":
        return isTablet;
      case "desktop":
        return isDesktop;
      default:
        return false;
    }
  }

  /**
   * Check if current breakpoint is at least the specified breakpoint
   */
  function atLeast(breakpoint: Breakpoint): boolean {
    switch (breakpoint) {
      case "mobile":
        return true; // Always true
      case "tablet":
        return isTablet || isDesktop;
      case "desktop":
        return isDesktop;
      default:
        return false;
    }
  }

  return {
    device,
    isMobile,
    isTablet,
    isDesktop,
    getResponsiveValue,
    matches,
    atLeast,
  };
}

