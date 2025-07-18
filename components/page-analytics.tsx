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

    // Optional: Track specific page names
    if (pageName) {
      // You can add additional custom tracking here if needed
      console.log(`Analytics: Page view tracked for ${pageName}`);
    }
  }, [pathname, searchParams, pageName]);

  // This component renders nothing, it just tracks
  return null;
}
