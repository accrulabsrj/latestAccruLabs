/**
 * AccruLabs Design System
 * Matching nas.io quality standards with full responsive support
 */

export const colors = {
  background: {
    DEFAULT: "#020617",
    secondary: "#030712",
    tertiary: "#0f172a",
  },
  primary: {
    DEFAULT: "#38bdf8",
    dark: "#0ea5e9",
    light: "#7dd3fc",
  },
  accent: {
    DEFAULT: "#a855f7",
    dark: "#9333ea",
    light: "#c084fc",
  },
  border: {
    DEFAULT: "rgba(148, 163, 184, 0.1)",
    hover: "rgba(148, 163, 184, 0.2)",
  },
  text: {
    primary: "#f8fafc",
    secondary: "#cbd5e1",
    tertiary: "#94a3b8",
  },
} as const;

export const typography = {
  fontFamily: {
    sans: ["Inter", "system-ui", "sans-serif"],
  },
  fontSize: {
    // Mobile-first responsive sizes
    xs: { base: "0.75rem", md: "0.75rem" },
    sm: { base: "0.875rem", md: "0.875rem" },
    base: { base: "1rem", md: "1rem" },
    lg: { base: "1.125rem", md: "1.125rem" },
    xl: { base: "1.25rem", md: "1.25rem" },
    "2xl": { base: "1.5rem", md: "1.875rem" },
    "3xl": { base: "1.875rem", md: "2.25rem" },
    "4xl": { base: "2.25rem", md: "3rem" },
    "5xl": { base: "3rem", md: "3.75rem" },
    "6xl": { base: "3.75rem", md: "4.5rem" },
  },
  lineHeight: {
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
  },
} as const;

export const spacing = {
  // Mobile-first spacing (reduced for mobile)
  mobile: {
    xs: "0.5rem", // 8px
    sm: "0.75rem", // 12px
    md: "1rem", // 16px
    lg: "1.5rem", // 24px
    xl: "2rem", // 32px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
  },
  desktop: {
    xs: "0.75rem", // 12px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "6rem", // 96px
  },
} as const;

export const breakpoints = {
  mobile: "640px",
  tablet: "1024px",
  desktop: "1280px",
  "2xl": "1920px",
} as const;

export const borderRadius = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  full: "9999px",
} as const;

export const shadows = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  glow: {
    primary: "0 0 20px rgba(56, 189, 248, 0.3)",
    accent: "0 0 20px rgba(168, 85, 247, 0.3)",
  },
} as const;

export const transitions = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
} as const;

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;

// Touch target minimum size (WCAG 2.1 AA)
export const touchTarget = {
  min: "44px", // Minimum touch target size
  recommended: "48px", // Recommended touch target size
} as const;

