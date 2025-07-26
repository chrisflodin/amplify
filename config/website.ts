import { WebsiteConfig } from "@/types/config";

export const defaultConfig: WebsiteConfig = {
  id: "default",
  name: "Default Configuration",
  hero: {
    title: "Vi bygger din digitala framgång",
    subtitle:
      "En digital byrå som har hjälpt några av Sveriges mest framgångsrika entreprenörer med deras appar, webb och marknadsföring.",
    ctaText: "Kontakta oss",
  },
  services: {
    featured: [
      "geo",
      "seo",
      "webbutveckling",
      "apputveckling",
      "e-handel",
      "ux-ui-design",
      "growth",
      "branding",
      "content",
    ],
    sectionsTitle: "Våra tjänster",
    sectionsSubtitle:
      "Vi erbjuder omfattande digitala tjänster som hjälper ditt företag att växa och lyckas online",
  },
  meta: {
    title: "amplify - Vi bygger din digitala framgång",
    description:
      "En digital byrå som hjälper företag växa med strategi, design och digital marknadsföring. Specialister på apputveckling, webbutveckling och SEO.",
  },
};

export const variantConfig: WebsiteConfig = {
  id: "geo",
  name: "GEO Configuration",
  hero: {
    title: "Vi kan framtidens marketing-kanaler",
    subtitle:
      "Vi skapar digitala lösningar som driver tillväxt och förbättrar kundupplevelsen. Från strategi till implementation.",
    ctaText: "Boka konsultation",
  },
  services: {
    featured: ["geo", "seo", "webbutveckling", "e-handel"],
    sectionsTitle: "Våra tjänster",
    sectionsSubtitle:
      "Vi fokuserar på de tjänster som ger störst påverkan på din digitala tillväxt",
  },
  meta: {
    title: "amplify - Transformera ditt företag digitalt",
    description:
      "Digital transformation som driver tillväxt. Vi hjälper företag med strategisk utveckling, varumärkesbyggande och digital marknadsföring för hållbara resultat.",
  },
};
