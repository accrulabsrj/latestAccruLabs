"use client";

import { useState, useEffect } from "react";
import type { DeviceInfo } from "@/lib/device-detection";
import { getDeviceInfo } from "@/lib/device-detection";

// Default device info for SSR - always desktop to prevent hydration mismatch
const DEFAULT_DEVICE_INFO: DeviceInfo = {
  type: "desktop",
  width: 1920,
  height: 1080,
  orientation: "landscape",
  isTouch: false,
  isMobile: false,
  isTablet: false,
  isDesktop: true,
};

export function useDevice(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(DEFAULT_DEVICE_INFO);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted and update device info
    setMounted(true);
    const updateDeviceInfo = () => {
      const info = getDeviceInfo();
      if (info) {
        setDeviceInfo(info);
      }
    };

    // Initial update
    updateDeviceInfo();

    // Listen for resize events
    window.addEventListener("resize", updateDeviceInfo);
    window.addEventListener("orientationchange", updateDeviceInfo);

    return () => {
      window.removeEventListener("resize", updateDeviceInfo);
      window.removeEventListener("orientationchange", updateDeviceInfo);
    };
  }, []);

  // Return default during SSR and initial render to prevent hydration mismatch
  return mounted ? deviceInfo : DEFAULT_DEVICE_INFO;
}

