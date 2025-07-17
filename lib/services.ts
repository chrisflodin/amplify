import { Service, ServiceDetailData } from "@/types/service";

export const services: Service[] = [
  {
    id: "branding",
    slug: "branding",
    name: "Branding",
    title: "Branding",
    description: "Bygg ett starkt varumärke som sticker ut",
    shortDescription:
      "Vi hjälper dig att utveckla och stärka ditt varumärke för att skapa långsiktiga relationer med dina kunder.",
    features: [
      "Varumärkesstrategi",
      "Visuell identitet",
      "Brandguide",
      "Positionering",
    ],
    detailedDescription:
      "Ett starkt varumärke bygger förtroende och differentierar dig från konkurrenterna. Vi skapar en sammanhängande brandupplevelse.",
  },
  {
    id: "ux-ui-design",
    slug: "ux-ui-design",
    name: "UX / UI design",
    title: "UX / UI design",
    description: "Användarvänlig design som konverterar",
    shortDescription:
      "Vi designar digitala upplevelser som både ser bra ut och fungerar intuitivt för dina användare.",
    features: [
      "Användarforskning",
      "Prototyping",
      "Interaktionsdesign",
      "Användartester",
    ],
    detailedDescription:
      "Genom användarcentrerad design skapar vi gränssnitt som maximerar användarupplevelsen och konverteringar.",
  },
  {
    id: "webbutveckling",
    slug: "webbutveckling",
    name: "Webbutveckling",
    title: "Webbutveckling",
    description: "Moderna webbplatser som presterar",
    shortDescription:
      "Vi utvecklar snabba, säkra och skalbara webbplatser som hjälper din verksamhet att växa.",
    features: [
      "Frontend-utveckling",
      "Backend-utveckling",
      "E-handelslösningar",
      "Säkerhetsoptimering",
    ],
    detailedDescription:
      "Bakom varje effektiv och visuellt tilltalande webbplats ligger kombinationen av robust backend och en intuitiv frontend.",
  },
  {
    id: "apputveckling",
    slug: "apputveckling",
    name: "Apputveckling",
    title: "Apputveckling",
    description: "Mobilappar som engagerar användare",
    shortDescription:
      "Vi utvecklar intuitiva och funktionella mobilappar för iOS och Android som förbättrar användarupplevelsen.",
    features: [
      "iOS-utveckling",
      "Android-utveckling",
      "Cross-platform",
      "App Store-optimering",
    ],
    detailedDescription:
      "I den mobila eran behöver företag en stark appnärvaro. Vi skapar appar som inte bara fungerar smidigt utan också engagerar användare.",
  },
  {
    id: "e-handel",
    slug: "e-handel",
    name: "E-handel",
    title: "E-handel",
    description: "Digitala butiker som säljer",
    shortDescription:
      "Vi skapar e-handelsplattformar som är lätta att använda och optimerade för konvertering.",
    features: [
      "Produktvisning",
      "Betalningslösningar",
      "Kundvagnsoptimering",
      "Säker transaktionshantering",
    ],
    detailedDescription:
      "I dagens snabbt växande digitala marknad är e-handel nyckeln till framgång. Vi hjälper er att skapa en e-handelsplattform som inte bara är snygg, utan också funktionell, säker och anpassad efter era specifika behov och mål.",
  },
  {
    id: "seo",
    slug: "seo",
    name: "SEO",
    title: "SEO",
    description: "Synlighet i sökmotorer",
    shortDescription:
      "Vi optimerar din webbplats för bättre ranking i sökmotorer och ökar din organiska trafik.",
    features: [
      "Teknisk SEO",
      "Innehållsoptimering",
      "Länkbyggnad",
      "Lokal SEO",
    ],
    detailedDescription:
      "Genom strategisk SEO-optimering hjälper vi dig att nå högre i sökresultaten och attrahera kvalificerad trafik.",
  },
  {
    id: "web-design",
    slug: "web-design",
    name: "Web design",
    title: "Web design",
    description: "Visuell design som inspirerar",
    shortDescription:
      "Vi skapar visuellt tilltalande webbdesign som speglar ditt varumärke och engagerar dina besökare.",
    features: [
      "Visuell design",
      "Responsiv layout",
      "Typografi",
      "Färgscheman",
    ],
    detailedDescription:
      "En väldesignad webbplats är grunden för digital framgång. Vi skapar design som både ser fantastisk ut och fungerar perfekt.",
  },
  {
    id: "content",
    slug: "content",
    name: "Content",
    title: "Content",
    description: "Innehåll som engagerar och konverterar",
    shortDescription:
      "Vi skapar relevant och engagerande innehåll som talar till din målgrupp och driver resultat.",
    features: [
      "Innehållsstrategi",
      "Copywriting",
      "SEO-optimerat innehåll",
      "Innehållsplanering",
    ],
    detailedDescription:
      "Rätt innehåll i rätt tid är avgörande för att nå och påverka din målgrupp. Vi skapar innehåll som bygger relationer.",
  },
  {
    id: "growth",
    slug: "growth",
    name: "Growth",
    title: "Growth",
    description: "Strategier för hållbar tillväxt",
    shortDescription:
      "Vi utvecklar och implementerar tillväxtstrategier som driver långsiktig framgång för din verksamhet.",
    features: [
      "Tillväxtanalys",
      "Konverteringsoptimering",
      "Prestandamätning",
      "Skalbarhet",
    ],
    detailedDescription:
      "Hållbar tillväxt kräver rätt strategi och kontinuerlig optimering. Vi hjälper dig att bygga grunden för framgång.",
  },
];

export const serviceDetails: Record<string, ServiceDetailData> = {
  webbutveckling: {
    service: services.find((s) => s.id === "webbutveckling")!,
    sections: [
      {
        title: "Frontend- och backendutveckling",
        features: [
          {
            title: "Användargränssnitt",
            description:
              "Bakom varje effektiv och visuellt tilltalande webbplats ligger kombinationen av robust backend och en intuitiv frontend.",
          },
          {
            title: "Databashantering",
            description:
              "Vi ser till att era besökare möts av en smidig och responsiv användarupplevelse samtidigt som datahanteringen bakom kulisserna är säker och effektiv.",
          },
          { title: "Skript och funktioner", description: "" },
          { title: "Responsiv design", description: "" },
        ],
        description:
          "Bakom varje effektiv och visuellt tilltalande webbplats ligger kombinationen av robust backend och en intuitiv frontend. Vi ser till att era besökare möts av en smidig och responsiv användarupplevelse samtidigt som datahanteringen bakom kulisserna är säker och effektiv.",
      },
      {
        title: "E-handel",
        features: [
          {
            title: "Produktvisning",
            description:
              "I dagens snabbt växande digitala marknad är e-handel nyckeln till framgång. Vi hjälper er att skapa en e-handelsplattform som inte bara är snygg, utan också funktionell, säker och anpassad efter era specifika behov och mål.",
          },
          { title: "Betalningslösningar", description: "" },
          { title: "Kundvagnsoptimering", description: "" },
          { title: "Säker transaktionshantering", description: "" },
        ],
        description:
          "I dagens snabbt växande digitala marknad är e-handel nyckeln till framgång. Vi hjälper er att skapa en e-handelsplattform som inte bara är snygg, utan också funktionell, säker och anpassad efter era specifika behov och mål.",
      },
      {
        title: "Headless",
        features: [
          {
            title: "Flexibilitet",
            description:
              "Den moderna webben kräver flexibilitet, och med headless-arkitektur kan vi leverera just det. Genom att separera frontend från backend erbjuder vi er en lösning som är både skalbar och redo att integreras med vilken plattform som helst. Där vi på Pigment framförallt erbjuder hemsidor byggda i CMS:et Payload.",
          },
          { title: "Skalbarhet", description: "" },
          { title: "Snabbare laddningstider", description: "" },
          { title: "Multi-plattformskompatibilitet", description: "" },
        ],
        description:
          "Den moderna webben kräver flexibilitet, och med headless-arkitektur kan vi leverera just det. Genom att separera frontend från backend erbjuder vi er en lösning som är både skalbar och redo att integreras med vilken plattform som helst. Där vi på Pigment framförallt erbjuder hemsidor byggda i CMS:et Payload.",
      },
      {
        title: "API-integrationer",
        features: [
          {
            title: "REST-API",
            description:
              "För att maximera er webbplats potential och funktionalitet, erbjuder vi skräddarsydda API-integrationer. Oavsett om det är för betalningsportaler, sociala medier eller andra tredjepartstjänster, ser vi till att er webbplats talar samma språk som andra digitala lösningar ni använder.",
          },
          { title: "SOAP-API", description: "" },
          { title: "Automatisering", description: "" },
          { title: "Real-tidsuppdateringar", description: "" },
        ],
        description:
          "För att maximera er webbplats potential och funktionalitet, erbjuder vi skräddarsydda API-integrationer. Oavsett om det är för betalningsportalar, sociala medier eller andra tredjepartstjänster, ser vi till att er webbplats talar samma språk som andra digitala lösningar ni använder.",
      },
      {
        title: "Wordpress",
        features: [
          {
            title: "Temautveckling",
            description:
              "Wordpress är ett av de mest populära innehållshanteringssystemen i världen, och vi förstår varför. Vi specialiserar oss på att utveckla Wordpress-webbplatser som är anpassade, säkra och optimerade för sökmotorer.",
          },
          { title: "Plugin-utveckling", description: "" },
          { title: "Säkerhetsoptimering", description: "" },
          { title: "Innehållshantering", description: "" },
        ],
        description:
          "Wordpress är ett av de mest populära innehållshanteringssystemen i världen, och vi förstår varför. Vi specialiserar oss på att utveckla Wordpress-webbplatser som är anpassade, säkra och optimerade för sökmotorer.",
      },
      {
        title: "Laravel",
        features: [
          {
            title: "Skräddarsydd utveckling",
            description:
              "När det kommer till skräddarsydda webblösningar är Laravel ett av våra främsta verktyg. Detta ramverk möjliggör utveckling av robusta och säkra webbapplikationer. Låt oss använda Laravel för att ta er digitala närvaro till nästa nivå.",
          },
          { title: "Säkerhetsprotokoll", description: "" },
          { title: "MVC-arkitektur", description: "" },
          { title: "Databasstruktur", description: "" },
        ],
        description:
          "När det kommer till skräddarsydda webblösningar är Laravel ett av våra främsta verktyg. Detta ramverk möjliggör utveckling av robusta och säkra webbapplikationer. Låt oss använda Laravel för att ta er digitala närvaro till nästa nivå.",
      },
      {
        title: "Säkerhet och underhåll",
        features: [
          {
            title: "SSL-certifikat",
            description:
              "I den digitala eran är webbsäkerhet mer kritisk än någonsin. Vi prioriterar er webbplats säkerhet för att skydda både er och era besökare från potentiella hot. Och när det gäller underhåll? Lita på oss för regelbundna uppdateringar, backup och ständig övervakning.",
          },
          { title: "Malware-skanning", description: "" },
          { title: "Backup-rutiner", description: "" },
          { title: "Uppdateringar", description: "" },
        ],
        description:
          "I den digitala eran är webbsäkerhet mer kritisk än någonsin. Vi prioriterar er webbplats säkerhet för att skydda både er och era besökare från potentiella hot. Och när det gäller underhåll? Lita på oss för regelbundna uppdateringar, backup och ständig övervakning.",
      },
    ],
  },
  apputveckling: {
    service: services.find((s) => s.id === "apputveckling")!,
    sections: [
      {
        title: "iOS- och Android-utveckling",
        features: [
          {
            title: "Native iOS-appar",
            description:
              "Vi utvecklar högkvalitativa iOS-appar som utnyttjar Apples senaste teknologier och designriktlinjer för optimal prestanda.",
          },
          {
            title: "Native Android-appar",
            description:
              "Skräddarsydda Android-appar som fungerar smidigt över hela ekosystemet av Android-enheter.",
          },
          {
            title: "Användarupplevelse",
            description:
              "Intuitiv och engagerande användarupplevelse som håller användarna aktiva i din app.",
          },
          {
            title: "Prestandaoptimering",
            description:
              "Vi optimerar appar för snabb laddning, låg batterianvändning och smidig prestanda.",
          },
        ],
        description:
          "Vi skapar native mobilappar för både iOS och Android som levererar exceptionell prestanda och användarupplevelse.",
      },
      {
        title: "Cross-platform utveckling",
        features: [
          {
            title: "React Native",
            description:
              "Utveckling av appar som fungerar på både iOS och Android med en gemensam kodbas för effektiv utveckling.",
          },
          {
            title: "Flutter",
            description:
              "Högpresterande cross-platform appar med Googles Flutter-ramverk för snabb utveckling och enhetlig design.",
          },
          {
            title: "Kostnadseffektivitet",
            description:
              "Genom att använda cross-platform teknologier kan vi leverera appar för båda plattformarna till en lägre kostnad.",
          },
          {
            title: "Snabbare time-to-market",
            description:
              "Kom ut på marknaden snabbare med appar som når båda plattformarna samtidigt.",
          },
        ],
        description:
          "Cross-platform utveckling låter oss skapa appar som fungerar på flera plattformar samtidigt, vilket sparar tid och resurser.",
      },
      {
        title: "App Store-optimering",
        features: [
          {
            title: "App Store-strategi",
            description:
              "Vi hjälper dig att navigera genom App Store och Google Play Store med optimerade beskrivningar och metadata.",
          },
          {
            title: "Nyckelord och titel",
            description:
              "Strategisk optimering av titel och nyckelord för bättre synlighet i app-butikerna.",
          },
          {
            title: "Grafisk design",
            description:
              "Attraktiva ikoner och skärmbilder som fångar användarnas uppmärksamhet och ökar nedladdningar.",
          },
          {
            title: "Recensionshantering",
            description:
              "Strategier för att förbättra användarrecensioner och betyg i app-butikerna.",
          },
        ],
        description:
          "Vi optimerar din app för app-butikerna för att maximera synlighet och nedladdningar.",
      },
      {
        title: "Backend och API-integration",
        features: [
          {
            title: "API-utveckling",
            description:
              "Robust backend-infrastruktur och API:er som stöder din apps funktionalitet och skalbarhet.",
          },
          {
            title: "Databashantering",
            description:
              "Säker och effektiv datalagring och -hantering för din mobilapp.",
          },
          {
            title: "Molnintegration",
            description:
              "Integration med molntjänster som AWS, Google Cloud eller Azure för skalbar infrastruktur.",
          },
          {
            title: "Real-tids funktioner",
            description:
              "Implementering av real-tids funktioner som push-notifikationer och live-uppdateringar.",
          },
        ],
        description:
          "Vi bygger den backend-infrastruktur som krävs för att stödja din mobilapp med skalbarhet och säkerhet i fokus.",
      },
    ],
  },
  branding: {
    service: services.find((s) => s.id === "branding")!,
    sections: [
      {
        title: "Varumärkesstrategi och visuell identitet",
        features: [
          {
            title: "Varumärkespositionering",
            description:
              "Vi hjälper dig att definiera ditt varumärkes unika position på marknaden och skapa en stark grund för all kommunikation.",
          },
          {
            title: "Visuell identitet",
            description:
              "Från logotyper till färgpaletter - vi skapar en sammanhängande visuell identitet som speglar ditt varumärkes värderingar.",
          },
          {
            title: "Brandguide",
            description:
              "En komplett guide som säkerställer att ditt varumärke kommuniceras konsekvent över alla kanaler.",
          },
          {
            title: "Tonalitet",
            description:
              "Vi utvecklar en tydlig ton och stil för din kommunikation som resonerar med din målgrupp.",
          },
        ],
        description:
          "Ett starkt varumärke bygger förtroende och differentierar dig från konkurrenterna. Vi hjälper dig att skapa en autentisk brandupplevelse.",
      },
    ],
  },
  "ux-ui-design": {
    service: services.find((s) => s.id === "ux-ui-design")!,
    sections: [
      {
        title: "Användarcentrerad design",
        features: [
          {
            title: "Användarforskning",
            description:
              "Vi undersöker dina användares behov, beteenden och preferenser för att skapa design som verkligen fungerar.",
          },
          {
            title: "Prototyping",
            description:
              "Genom interaktiva prototyper testar vi designkoncept innan utveckling för att säkerställa optimal användarupplevelse.",
          },
          {
            title: "Interaktionsdesign",
            description:
              "Vi designar intuitiva och engagerande interaktioner som guidar användare mot dina affärsmål.",
          },
          {
            title: "Användartester",
            description:
              "Kontinuerliga tester med riktiga användare säkerställer att designen fungerar som avsett.",
          },
        ],
        description:
          "Genom användarcentrerad design skapar vi digitala upplevelser som både ser fantastiska ut och fungerar smidigt för dina användare.",
      },
    ],
  },
  "e-handel": {
    service: services.find((s) => s.id === "e-handel")!,
    sections: [
      {
        title: "Komplett e-handelslösning",
        features: [
          {
            title: "Produktkatalog",
            description:
              "Vi skapar en sökbar och välorganiserad produktkatalog som gör det enkelt för kunder att hitta vad de söker.",
          },
          {
            title: "Betalningslösningar",
            description:
              "Säkra och användarvänliga betalningslösningar som stöder flera betalmetoder och valutor.",
          },
          {
            title: "Kundvagnsoptimering",
            description:
              "Optimerad checkout-process som minskar avhopp och ökar konverteringsfrekvensen.",
          },
          {
            title: "Orderhantering",
            description:
              "Effektiv orderhantering och lagerstyrning för smidig drift av din e-handel.",
          },
        ],
        description:
          "Vi bygger e-handelsplattformar som inte bara ser professionella ut, utan också är optimerade för försäljning och enkel administration.",
      },
    ],
  },
  seo: {
    service: services.find((s) => s.id === "seo")!,
    sections: [
      {
        title: "Teknisk och innehållsbaserad SEO",
        features: [
          {
            title: "Teknisk SEO",
            description:
              "Vi optimerar din webbplats tekniska aspekter för bättre crawling och indexering av sökmotorer.",
          },
          {
            title: "Innehållsoptimering",
            description:
              "Strategisk optimering av innehåll för relevanta sökord utan att kompromissa med kvalitet.",
          },
          {
            title: "Lokal SEO",
            description:
              "Optimering för lokala sökningar för att nå kunder i ditt geografiska område.",
          },
          {
            title: "Länkbyggnad",
            description:
              "Strategisk länkbyggnad för att stärka din webbplats auktoritet och ranking.",
          },
        ],
        description:
          "Genom teknisk excellens och strategisk innehållsoptimering hjälper vi dig att nå högre i sökresultaten och attrahera rätt besökare.",
      },
    ],
  },
  "web-design": {
    service: services.find((s) => s.id === "web-design")!,
    sections: [
      {
        title: "Visuell design och användarupplevelse",
        features: [
          {
            title: "Visuell hierarki",
            description:
              "Vi skapar tydlig visuell hierarki som guidar användaren genom din webbplats på ett naturligt sätt.",
          },
          {
            title: "Responsiv design",
            description:
              "Din webbplats ser fantastisk ut och fungerar perfekt på alla enheter - från mobil till desktop.",
          },
          {
            title: "Typografi",
            description:
              "Genomtänkt typografi som förstärker ditt varumärke och förbättrar läsbarheten.",
          },
          {
            title: "Färgscheman",
            description:
              "Harmoniska färgscheman som speglar ditt varumärke och skapar rätt känsla hos besökaren.",
          },
        ],
        description:
          "En väldesignad webbplats är grunden för digital framgång. Vi skapar design som både ser fantastisk ut och fungerar perfekt för dina användare.",
      },
    ],
  },
  content: {
    service: services.find((s) => s.id === "content")!,
    sections: [
      {
        title: "Strategiskt innehåll",
        features: [
          {
            title: "Innehållsstrategi",
            description:
              "Vi utvecklar en genomtänkt innehållsstrategi som stöder dina affärsmål och talar till din målgrupp.",
          },
          {
            title: "SEO-optimerat innehåll",
            description:
              "Allt innehåll optimeras för sökmotorer utan att kompromissa med läsbarhet och engagemang.",
          },
          {
            title: "Copywriting",
            description:
              "Professionell copywriting som konverterar besökare till kunder genom övertygande och relevant text.",
          },
          {
            title: "Innehållsplanering",
            description:
              "Strukturerad planering och publicering av innehåll för konsistent närvaro och engagemang.",
          },
        ],
        description:
          "Rätt innehåll i rätt tid är avgörande för att nå och påverka din målgrupp. Vi skapar innehåll som bygger relationer och driver resultat.",
      },
    ],
  },
  growth: {
    service: services.find((s) => s.id === "growth")!,
    sections: [
      {
        title: "Datadriven tillväxt",
        features: [
          {
            title: "Tillväxtanalys",
            description:
              "Vi identifierar tillväxtmöjligheter genom djupgående analys av din nuvarande prestation och marknadspotential.",
          },
          {
            title: "Konverteringsoptimering",
            description:
              "Systematisk optimering av konverteringar genom A/B-tester och användarinsikter.",
          },
          {
            title: "Automatisering",
            description:
              "Implementering av automatiserade processer som ökar effektiviteten och skalar din tillväxt.",
          },
          {
            title: "Prestandamätning",
            description:
              "Kontinuerlig mätning och analys av KPI:er för att säkerställa måluppfyllelse.",
          },
        ],
        description:
          "Hållbar tillväxt bygger på data och kontinuerlig optimering. Vi hjälper dig att skapa en tillväxtmaskin som levererar resultat.",
      },
    ],
  },
};

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceDetailsBySlug(
  slug: string
): ServiceDetailData | undefined {
  return serviceDetails[slug];
}

export function getAllServices(): Service[] {
  return services;
}
