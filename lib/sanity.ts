import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "yuo0kur5",
  dataset: "production",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  apiVersion: "2024-01-01", // Use current date (YYYY-MM-DD) to target the latest API version
});

export const projectId = "yuo0kur5";
export const dataset = "production";
