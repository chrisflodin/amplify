export interface WebsiteConfig {
  id: string;
  name: string;
  hero: {
    title: string;
    subtitle: string;
    ctaText?: string;
  };
  services: {
    featured: string[]; // Array of service slugs in order
    sectionsTitle: string;
    sectionsSubtitle: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export type ConfigVariant = "default" | "geo";
