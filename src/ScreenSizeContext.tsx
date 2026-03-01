// ScreenSizeContext.tsx
import React, { useEffect, useState } from "react";
import {
  getScreenSize,
  ScreenSizeContext,
  type ScreenSizeContextValue,
} from "./useScreenSize";

export const ScreenSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    const debounced = debounce(handleResize, 150);
    window.addEventListener("resize", debounced);
    return () => window.removeEventListener("resize", debounced);
  }, []);

  const screenSize = getScreenSize(width);

  const value: ScreenSizeContextValue = {
    screenSize,
    isMobile: screenSize === "mobile",
    isTablet: screenSize === "tablet",
    isLaptop: screenSize === "laptop",
    isDesktop: screenSize === "desktop",
    width,
  };

  return (
    <ScreenSizeContext.Provider value={value}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

// Simple debounce helper
function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number,
): T {
  let timer: ReturnType<typeof setTimeout>;
  return ((...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}
