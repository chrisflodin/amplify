import { Job } from "@/types/job";

// Mock job data - in a real app, this would come from a database or CMS
const mockJobs: Job[] = [
  {
    id: "1",
    title: "Webbutvecklare",
    department: "Teknik",
    location: "Stockholm",
    type: "Heltid",
    description: `Vi söker en erfaren webbutvecklare som vill vara med och bygga nästa generations digitala lösningar. Du kommer att arbeta med moderna teknologier och vara en del av vårt växande team.

Som webbutvecklare hos oss kommer du att:
• Utveckla moderna webbapplikationer med React och Next.js
• Jobba med backend-utveckling i Node.js
• Säkerställa hög kodkvalitet genom testning och code reviews
• Samarbeta nära med designers och produktteamet
• Bidra till tekniska beslut och arkitektur

Vi erbjuder en kreativ arbetsmiljö där du får chansen att påverka både teknik och process. Hos oss växer du tillsammans med företaget och får ta ansvar för spännande projekt.`,
    requirements: [
      "Minst 3 års erfarenhet av webbutveckling",
      "Gedigen kunskap inom React och TypeScript",
      "Erfarenhet av Next.js eller liknande framework",
      "Kunskap om HTML, CSS och moderna utvecklingsverktyg",
      "Förståelse för UX/UI-principer",
      "Erfarenhet av API-utveckling och databaser",
      "Meriterande: Kunskap om TailwindCSS, GraphQL, eller cloud-tjänster",
    ],
    benefits: [
      "Konkurrenskraftig lön med årlig lönerevision",
      "Flexibla arbetstider och möjlighet till hemarbete",
      "Hälsovårdsbidrag och friskvårdstimme",
      "Utbildnings- och konferensbidrag",
      "Moderna verktyg och utrustning",
      "Årliga teambuilding-aktiviteter",
      "Centralt kontor i Stockholm",
    ],
    publishedAt: "2024-12-19",
    applicationDeadline: "2025-01-31",
    slug: "webbutvecklare",
    isActive: true,
  },
];

export function getAllJobs(): Job[] {
  return mockJobs.filter((job) => job.isActive);
}

export function getJobBySlug(slug: string): Job | undefined {
  return mockJobs.find((job) => job.slug === slug && job.isActive);
}

export function getJobsByDepartment(department: string): Job[] {
  return mockJobs.filter(
    (job) => job.department === department && job.isActive
  );
}

export function formatJobDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
