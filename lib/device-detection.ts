/**
 * Device Detection Utilities
 * Server-side and client-side device detection for responsive design
 */

export type DeviceType = "mobile" | "tablet" | "desktop";
export type Orientation = "portrait" | "landscape";

export interface DeviceInfo {
  type: DeviceType;
  width: number;
  height: number;
  orientation: Orientation;
  isTouch: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

/**
 * Detect device type based on user agent (server-side)
 */
export function detectDeviceType(userAgent?: string): DeviceType {
  if (typeof window === "undefined" && !userAgent) {
    return "desktop"; // Default for SSR
  }

  const ua = userAgent || (typeof window !== "undefined" ? window.navigator.userAgent : "");
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
  const isTablet = /iPad|Android/i.test(ua) && !/Mobile/i.test(ua);

  if (isMobile && !isTablet) {
    return "mobile";
  }
  if (isTablet) {
    return "tablet";
  }
  return "desktop";
}

/**
 * Detect device type based on screen width
 */
export function detectDeviceByWidth(width: number): DeviceType {
  if (width < 640) {
    return "mobile";
  }
  if (width < 1024) {
    return "tablet";
  }
  return "desktop";
}

/**
 * Detect orientation
 */
export function detectOrientation(width: number, height: number): Orientation {
  return width > height ? "landscape" : "portrait";
}

/**
 * Check if device supports touch
 */
export function isTouchDevice(): boolean {
  if (typeof window === "undefined") {
    return false;
  }
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    // @ts-ignore - legacy support
    navigator.msMaxTouchPoints > 0
  );
}

/**
 * Get comprehensive device info (client-side only)
 */
export function getDeviceInfo(): DeviceInfo | null {
  if (typeof window === "undefined") {
    return null;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const type = detectDeviceByWidth(width);
  const orientation = detectOrientation(width, height);
  const isTouch = isTouchDevice();

  return {
    type,
    width,
    height,
    orientation,
    isTouch,
    isMobile: type === "mobile",
    isTablet: type === "tablet",
    isDesktop: type === "desktop",
  };
}

/**
 * Get device type for SSR (from headers)
 */
export function getDeviceTypeFromHeaders(headers: Headers): DeviceType {
  const userAgent = headers.get("user-agent") || "";
  return detectDeviceType(userAgent);
}

