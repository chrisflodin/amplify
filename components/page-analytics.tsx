"use client";

import { pageview } from "@/components/analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface PageAnalyticsProps {
  pageName?: string;
}

export default function PageAnalytics({ pageName }: PageAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + searchParams.toString();
    pageview(url);

    // Development logging
    if (process.env.NODE_ENV === "development") {
      const isDevelopmentEnv = process.env.NODE_ENV === "development";
      const isLocalhost =
        typeof window !== "undefined" &&
        (window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1" ||
          window.location.hostname === "0.0.0.0");

      if (isDevelopmentEnv || isLocalhost) {
        console.log(
          `📊 Analytics disabled - Page view would have been tracked: ${
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

  // This component renders nothing, it just tracks
  return null;
}
