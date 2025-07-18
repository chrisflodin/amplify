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

    if (pageName) {
      console.log(`Analytics: Page view tracked for ${pageName}`);
    }
  }, [pathname, searchParams, pageName]);
}

export default useAnalytics;
