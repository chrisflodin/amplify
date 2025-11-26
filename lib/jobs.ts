import { Job } from "@/types/job";

// Mock job data - in a real app, this would come from a database or CMS
const mockJobs: Job[] = [
  // {
  //   id: "1",
  //   title: "Webbutvecklare",
  //   location: "Stockholm",
  //   description: `Är du en webbutvecklare som brinner för att bygga snygga, snabba och strategiska hemsidor? Vi söker dig som inte bara älskar kod utan också förstår kraften i en riktigt vass digital närvaro. Hos oss får du kombinera modern utveckling med marknadsföring, SEO och konverteringstänk.
  // Som utvecklare i vårt team kommer du att:
  // • Bygga prestandaoptimerade och SEO-vänliga hemsidor i React och Next.js
  // • Arbeta tätt med designers och marknadsteam för att skapa användarcentrerade upplevelser
  // • Förbättra laddtider, Core Web Vitals och teknisk SEO
  // • Implementera strukturerad data, metataggar och responsiva komponenter
  // • Bidra i tekniska beslut och arbeta med både frontend och lättare backend
  // • Delta i skapandet av content-drivna lösningar för kampanjsidor och varumärkessajter
  // Vi erbjuder en kreativ och snabbfotad miljö där teknik möter marknad. Du får vara med och forma hur företag syns, upplevs och växer online.`,
  //   requirements: [
  //     "Minst 3 års erfarenhet av webbutveckling",
  //     "Stark kunskap inom React, TypeScript och Next.js",
  //     "Erfarenhet av SEO-tekniker och prestandaoptimering",
  //     "God känsla för UI/UX och pixelperfekt designintegration",
  //     "Kunskap om HTML, CSS och moderna byggverktyg",
  //     "Meriterande: TailwindCSS, GraphQL, Headless CMS (t.ex. Sanity eller Contentful), Google Search Console och webbanalys",
  //   ],
  //   benefits: [
  //     "Konkurrenskraftig lön och årlig lönerevision",
  //     "Flexibelt arbete med möjlighet till remote",
  //     "Hälsovårdsbidrag och friskvårdstimme",
  //     "Moderna verktyg och fritt val av setup",
  //   ],
  //   slug: "webbutvecklare",
  //   isActive: true,
  // },
];

export function getAllJobs(): Job[] {
  return mockJobs.filter((job) => job.isActive);
}

export function getJobBySlug(slug: string): Job | undefined {
  return mockJobs.find((job) => job.slug === slug && job.isActive);
}

export function formatJobDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("sv-SE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
