import { event } from "@/components/analytics";

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  event({
    action: "click",
    category: "Button",
    label: buttonName,
  });
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
};

// Track link clicks
export const trackLinkClick = (linkUrl: string, linkText?: string) => {
  event({
    action: "click",
    category: "Link",
    label: linkText || linkUrl,
  });
};

// Track downloads
export const trackDownload = (fileName: string, fileType?: string) => {
  event({
    action: "download",
    category: "File",
    label: fileName,
  });
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
};

// Track service page visits
export const trackServicePageView = (serviceName: string) => {
  event({
    action: "view",
    category: "Service Page",
    label: serviceName,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event({
    action: "scroll_depth",
    category: "Engagement",
    label: `${depth}%`,
    value: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number, pageName: string) => {
  event({
    action: "time_on_page",
    category: "Engagement",
    label: pageName,
    value: seconds,
  });
};
