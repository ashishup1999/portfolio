import { createContext, useContext } from "react";

type ScreenSize = "mobile" | "tablet" | "laptop" | "desktop";

export interface ScreenSizeContextValue {
  screenSize: ScreenSize;
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  width: number;
}

const breakpoints = {
  mobile: 768, // < 768px
  tablet: 1024, // 768px - 1023px
  laptop: 1440, // 1024px - 1439px
  // desktop: 1440px+
};

export const getScreenSize = (width: number): ScreenSize => {
  if (width < breakpoints.mobile) return "mobile";
  if (width < breakpoints.tablet) return "tablet";
  if (width < breakpoints.laptop) return "laptop";
  return "desktop";
};

export const ScreenSizeContext = createContext<ScreenSizeContextValue | undefined>(
  undefined,
);

export const useScreenSize = (): ScreenSizeContextValue => {
  const context = useContext(ScreenSizeContext);
  if (!context) {
    throw new Error("useScreenSize must be used within a ScreenSizeProvider");
  }
  return context;
};
