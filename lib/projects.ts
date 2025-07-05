import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "stockholm-plastikkirurgi",
    title: "Stockholm Plastikkirurgi",
    subtitle: "Digital transformation för premiumpatienter",
    category: "Marknadsföring",
    year: "2024",
    duration: "4 månader",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "CMS"],
    results: "+300% bokningar",
    image: "/images/hartwall.png",
    description:
      "En omfattande digital transformation som resulterade i 300% ökning av online-bokningar och förbättrad patientupplevelse.",
    heroDescription:
      "En omfattande digital transformation som resulterade i 300% ökning av online-bokningar och förbättrad patientupplevelse genom modern webbdesign och automatiserade processer.",
    background: [
      "Stockholm Plastikkirurgi hade en föråldrad webbplats som inte speglade deras premiumvarumärke. Patienter hade svårt att hitta information och boka konsultationer online.",
      "Den gamla plattformen genererade många supportärenden och missade potentiella kunder på grund av en komplicerad bokningsprocess och dålig mobile-upplevelse.",
    ],
    role: [
      "Vi genomförde en komplett digital transformation med fokus på användarupplevelse och konverteringsoptimering. En modern, responsiv webbplats byggdes med integrerat bokningssystem.",
      "Projektet inkluderade även SEO-optimering, innehållsstrategi och integration med befintliga system för smidig patienthantering.",
    ],
    resultsDescription: [
      "Med den nya digitala lösningen ökade online-bokningarna med över 300%. Samtidigt minskade supportärendena med 60% tack vare förbättrad informationsarkitektur.",
      "Webbplatsen fick en modern design som speglar klinikens premiumpositionering och förbättrade patienternas första intryck avsevärt.",
    ],
    keyMetrics: [
      {
        value: "+300%",
        label: "Online-bokningar",
        description:
          "Dramatisk ökning av bokningar genom förbättrat bokningsflöde",
        color: "text-blue-400",
      },
      {
        value: "-60%",
        label: "Supportärenden",
        description:
          "Färre frågor tack vare tydligare information och navigation",
        color: "text-green-400",
      },
      {
        value: "95%",
        label: "Mobil-optimering",
        description: "Perfekt mobile-upplevelse för alla enheter",
        color: "text-purple-400",
      },
    ],
    relatedProjects: [
      {
        title: "Hartwall App",
        category: "App",
        image: "/images/hartwall.png",
        slug: "hartwall-app",
      },
      {
        title: "CRDBAG E-commerce",
        category: "E-commerce",
        image: "/images/hartwall.png",
        slug: "crdbag-ecommerce",
      },
    ],
  },
  {
    id: "2",
    slug: "hartwall-app",
    title: "Skistar stärker fjällupplevelsen med bättre digitala tjänster",
    subtitle: "Mobil app för premiumvarumärke",
    category: "App",
    year: "2024",
    duration: "6 månader",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
    results: "+250% användning",
    image: "/images/hartwall.png",
    description:
      "En modern mobilapp som förbättrade kundupplevelsen och ökade varumärkesengagemang.",
    heroDescription:
      "En modern mobilapp som revolutionerade kundupplevelsen och ökade varumärkesengagemang med 250% genom innovativ design och sömlös funktionalitet.",
    background: [
      "Hartwall behövde en modern mobilapp för att stärka sitt varumärke och förbättra kundrelationen. Den befintliga lösningen var föråldrad och erbjöd begränsad funktionalitet.",
      "Företaget ville skapa en plattform som kunde leverera personaliserad content och öka kundengagemang genom interaktiva funktioner.",
    ],
    role: [
      "Vi utvecklade en helt ny mobilapp i React Native med fokus på användarupplevelse och prestanda. Appen integrerades med befintliga system för smidig datahantering.",
      "Projektet inkluderade även backend-utveckling, push-notifieringar och avancerad analytics för att mäta användarengagemang.",
    ],
    resultsDescription: [
      "Appen blev en stor framgång med 250% ökning av aktiva användare. Kundnöjdheten ökade markant tack vare den intuitiva designen och användbara funktionerna.",
      "Företaget kunde nu leverera personaliserade upplevelser och byggde starkare kundrelationer genom den nya digitala plattformen.",
    ],
    keyMetrics: [
      {
        value: "+250%",
        label: "Aktiva användare",
        description: "Dramatisk ökning av dagliga användare",
        color: "text-blue-400",
      },
      {
        value: "4.8★",
        label: "App Store-betyg",
        description: "Högt betyg från nöjda användare",
        color: "text-green-400",
      },
      {
        value: "90%",
        label: "Retention rate",
        description: "Användare som återvänder inom 30 dagar",
        color: "text-purple-400",
      },
    ],
    relatedProjects: [
      {
        title: "Stockholm Plastikkirurgi",
        category: "Marknadsföring",
        image: "/images/hartwall.png",
        slug: "stockholm-plastikkirurgi",
      },
      {
        title: "CRDBAG E-commerce",
        category: "E-commerce",
        image: "/images/hartwall.png",
        slug: "crdbag-ecommerce",
      },
    ],
  },
  {
    id: "3",
    slug: "crdbag-ecommerce",
    title: "CRDBAG E-commerce",
    subtitle: "Skalbar e-handelsplattform",
    category: "E-commerce",
    year: "2024",
    duration: "5 månader",
    technologies: ["Next.js", "Shopify", "Stripe", "CMS", "Analytics"],
    results: "+180% försäljning",
    image: "/images/hartwall.png",
    description:
      "En högpresterande e-handelsplattform som levererade exceptionella resultat och användarupplevelse.",
    heroDescription:
      "En högpresterande e-handelsplattform som levererade 180% ökning av försäljning genom optimerad användarupplevelse och konverteringsfokuserad design.",
    background: [
      "CRDBAG behövde en modern e-handelsplattform för att kunna konkurrera i den digitala marknaden. Deras befintliga lösning var långsam och hade låg konvertering.",
      "Företaget ville skapa en skalbar plattform som kunde hantera ökad trafik och erbjuda sömlösa betalningslösningar.",
    ],
    role: [
      "Vi byggde en komplett e-handelsplattform med fokus på prestanda och konverteringsoptimering. Plattformen integrerades med moderna betalningslösningar och lagerhanterings-system.",
      "Projektet inkluderade även SEO-optimering, analytics-implementation och automatiserade marknadsföringsflöden för att maximera försäljningen.",
    ],
    resultsDescription: [
      "Den nya e-handelsplattformen resulterade i 180% ökning av försäljning redan under första kvartalet. Konverteringsgraden förbättrades dramatiskt tack vare den optimerade användarupplevelsen.",
      "Företaget kunde nu hantera betydligt mer trafik och erbjuda sina kunder en modern, säker och snabb shoppingupplevelse.",
    ],
    keyMetrics: [
      {
        value: "+180%",
        label: "Försäljning",
        description: "Ökning av total försäljning första kvartalet",
        color: "text-blue-400",
      },
      {
        value: "+85%",
        label: "Konvertering",
        description: "Förbättrad konverteringsgrad genom optimerad UX",
        color: "text-green-400",
      },
      {
        value: "2.1s",
        label: "Laddningstid",
        description: "Extremt snabb laddningstid för bättre UX",
        color: "text-purple-400",
      },
    ],
    relatedProjects: [
      {
        title: "Stockholm Plastikkirurgi",
        category: "Marknadsföring",
        image: "/images/hartwall.png",
        slug: "stockholm-plastikkirurgi",
      },
      {
        title: "Hartwall App",
        category: "App",
        image: "/images/hartwall.png",
        slug: "hartwall-app",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getRelatedProjects(
  currentSlug: string,
  limit: number = 3
): Project[] {
  return projects
    .filter((project) => project.slug !== currentSlug)
    .slice(0, limit);
}
