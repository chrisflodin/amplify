"use client";

import { pageview } from "@/components/analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// Hook for manual page view tracking in specific components
export function useAnalytics(pageName?: string) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(url);

    // Development logging
    if (process.env.NODE_ENV === "development") {
      const isDevelopment = process.env.NODE_ENV === "development";
      const isLocalhost =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1" ||
          window.location.hostname === "0.0.0.0");

      if (isDevelopment || isLocalhost) {
        console.log(
          `🚫 Analytics disabled - Page view would have been tracked: ${
            pageName || pathname
          }`
        );
      } else {
        console.log(
          `📊 Analytics: Page view tracked for ${pageName || pathname}`
        );
      }
    }
  }, [pathname, searchParams, pageName]);
}

export default useAnalytics;
