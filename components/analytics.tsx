"use client";

import Script from "next/script";
import { useEffect } from "react";

// Google Analytics tracking ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Check if we should disable analytics (development mode or localhost)
const shouldDisableAnalytics = () => {
  if (typeof window === "undefined") return true;

  const isDevelopment = process.env.NODE_ENV === "development";
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "0.0.0.0";

  return isDevelopment || isLocalhost;
};

// Google Analytics pageview tracking
export const pageview = (url: string) => {
  if (
    typeof window !== "undefined" &&
    GA_TRACKING_ID &&
    !shouldDisableAnalytics()
  ) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Google Analytics event tracking
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (
    typeof window !== "undefined" &&
    GA_TRACKING_ID &&
    !shouldDisableAnalytics()
  ) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Google Analytics component
export default function GoogleAnalytics() {
  useEffect(() => {
    if (GA_TRACKING_ID && !shouldDisableAnalytics()) {
      // Initialize gtag function
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).gtag = function gtag() {
        (window as any).dataLayer.push(arguments);
      };
      (window as any).gtag("js", new Date());
      (window as any).gtag("config", GA_TRACKING_ID);
    }
  }, []);

  // Don't render anything if no tracking ID or if analytics should be disabled
  if (!GA_TRACKING_ID || shouldDisableAnalytics()) {
    if (process.env.NODE_ENV === "development") {
      console.log("🚫 Google Analytics disabled for local development");
    }
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
