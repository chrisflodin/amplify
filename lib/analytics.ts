import { event } from "@/components/analytics";

// Helper function to check if analytics is disabled
const isAnalyticsDisabled = () => {
  if (typeof window === "undefined") return true;

  const isDevelopment = process.env.NODE_ENV === "development";
  const isLocalhost =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1" ||
    window.location.hostname === "0.0.0.0";

  return isDevelopment || isLocalhost;
};

// Development logging helper
const devLog = (message: string) => {
  if (process.env.NODE_ENV === "development") {
    if (isAnalyticsDisabled()) {
      console.log(`🚫 Analytics disabled - ${message}`);
    } else {
      console.log(`📊 Analytics: ${message}`);
    }
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: "click",
    category: "Button",
    label: buttonName,
  });

  devLog(
    `Button click tracked: ${buttonName}${location ? ` at ${location}` : ""}`
  );
};

// Track form submissions
export const trackFormSubmission = (
  formName: string,
  success: boolean = true
) => {
  event({
    action: success ? "submit_success" : "submit_error",
    category: "Form",
    label: formName,
  });

  devLog(
    `Form submission tracked: ${formName} (${success ? "success" : "error"})`
  );
};

// Track link clicks
export const trackLinkClick = (linkUrl: string, linkText?: string) => {
  event({
    action: "click",
    category: "Link",
    label: linkText || linkUrl,
  });

  devLog(`Link click tracked: ${linkText || linkUrl}`);
};

// Track downloads
export const trackDownload = (fileName: string, fileType?: string) => {
  event({
    action: "download",
    category: "File",
    label: fileName,
  });

  devLog(`Download tracked: ${fileName}${fileType ? ` (${fileType})` : ""}`);
};

// Track contact form interactions
export const trackContactFormInteraction = (
  action: "start" | "complete" | "error"
) => {
  event({
    action: action,
    category: "Contact Form",
    label:
      action === "start"
        ? "Form Started"
        : action === "complete"
        ? "Form Completed"
        : "Form Error",
  });

  devLog(`Contact form interaction tracked: ${action}`);
};

// Track service page visits
export const trackServicePageView = (serviceName: string) => {
  event({
    action: "view",
    category: "Service Page",
    label: serviceName,
  });

  devLog(`Service page view tracked: ${serviceName}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event({
    action: "scroll_depth",
    category: "Engagement",
    label: `${depth}%`,
    value: depth,
  });

  devLog(`Scroll depth tracked: ${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  event({
    action: "time_on_page",
    category: "Engagement",
    label: pageName,
    value: seconds,
  });

  devLog(`Time on page tracked: ${seconds}s on ${pageName}`);
};
