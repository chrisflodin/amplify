export interface Article {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  content: string[];
}

export const articles: Article[] = [
  {
    title: "Hur AI transformerar e-handelsbranschen 2024",
    excerpt:
      "En djupdykning i hur artificiell intelligens förändrar kundupplevelsen och optimerar försäljningsprocesser inom e-handel.",
    category: "AI & Teknik",
    author: "Christopher Flodin",
    date: "2024-01-15",
    readTime: "5 min",
    image: "/images/hartwall.png",
    slug: "ai-transformerar-e-handel-2024",
    content: [
      "Artificiell intelligens revolutionerar e-handelsbranschen i en aldrig tidigare skådad takt. Under 2024 har vi sett hur AI-verktyg inte längre bara är en framtidsvision utan en konkret verklighet som företag aktivt implementerar för att förbättra sina försäljningsprocesser.",
      "Personalisering har blivit nyckeln till framgång. Genom maskininlärning kan e-handelsplattformar nu analysera kundbeteenden i realtid och leverera skräddarsydda produktrekommendationer som ökar konverteringsgraden med upp till 35%. Denna typ av intelligent segmentering var omöjlig att uppnå manuellt.",
      "Chatbots och virtuella assistenter har utvecklats från enkla fråge-svar-system till sofistikerade AI-agenter som kan hantera komplexa kundförfrågningar, processklagomål och till och med hjälpa till med produktval baserat på kundens specifika behov och preferenser.",
      "Bildanalys och visuell sökning förändrar hur konsumenter interagerar med produkter online. Kunder kan nu ta bilder av föremål de gillar och omedelbart hitta liknande produkter i butiken. Detta har lett till en mer intuitiv och engagerande shoppingupplevelse.",
      "Framtiden för AI inom e-handel ligger i prediktiv analys och automatiserad lagerhantering. Företag som investerar i dessa teknologier nu kommer att ha en betydande konkurrensfördel när marknaden fortsätter att utvecklas.",
    ],
  },
  {
    title: "Framtiden för mobilappar: Progressive Web Apps",
    excerpt:
      "Varför PWA:er blir den nya standarden för mobilupplevelser och hur de kan revolutionera din digitala närvaro.",
    category: "App Development",
    author: "Christopher Flodin",
    date: "2024-01-08",
    readTime: "7 min",
    image: "/images/hartwall.png",
    slug: "framtiden-mobilappar-pwa",
    content: [
      "Progressive Web Apps (PWA:er) representerar nästa evolution inom mobil utveckling. Genom att kombinera det bästa från webb och native appar, erbjuder PWA:er en lösning på många av de utmaningar som utvecklare och företag står inför idag.",
      "En av de största fördelarna med PWA:er är deras förmåga att fungera offline. Genom smart caching-strategier kan användare fortsätta att interagera med applikationen även när internetuppkopplingen är instabil eller helt saknas. Detta är särskilt värdefullt för användare i områden med dålig täckning.",
      "Installationen av PWA:er är friktionsfri jämfört med traditionella appar. Användare behöver inte gå via App Store eller Google Play – de kan helt enkelt besöka webbplatsen och lägga till appen direkt till sin hemskärm. Detta minskar barriärerna för adoption betydligt.",
      "Push-notifikationer i PWA:er fungerar nu lika bra som i native appar. Företag kan skicka riktade meddelanden för att återengagera användare, informera om nya funktioner eller erbjudanden, vilket hjälper till att bygga långsiktiga relationer med kunder.",
      "Utvecklingskostnaden för PWA:er är betydligt lägre än att bygga separata native appar för iOS och Android. Med en enda kodbas kan företag nå alla plattformar, vilket gör PWA:er till ett attraktivt alternativ för startups och etablerade företag alike.",
      "Google och andra stora teknikföretag investerar kraftigt i PWA-teknologi, vilket visar på dess långsiktiga potential. Vi förväntar oss att se fler enterprise-lösningar och komplexa applikationer byggas som PWA:er under kommande år.",
    ],
  },
  {
    title: "UX Design trends som formar 2024",
    excerpt:
      "De senaste trenderna inom användarupplevelse som kommer att definiera hur vi designar digitala produkter framöver.",
    category: "Design",
    author: "Christopher Flodin",
    date: "2024-01-03",
    readTime: "6 min",
    image: "/images/hartwall.png",
    slug: "ux-design-trends-2024",
    content: [
      "2024 har varit ett banbrytande år för UX design, med flera trender som fundamentalt förändrar hur vi tänker kring användarupplevelse. Från AI-assisterad design till hållbarhetsmedvetenhet – designlandskapet utvecklas snabbare än någonsin.",
      "Minimalism med personlighet har ersatt den sterila 'flat design'-trenden. Designers lägger nu till subtila animationer, unika illustrationer och varma färgpaletter för att skapa emotionella kopplingar utan att kompromissa med användbarhet.",
      "Dark mode är inte längre bara ett alternativ – det har blivit en förväntning. Utöver att minska ögontrötthet och spara batteritid, använder designers nu dark mode som en canvas för att framhäva viktigt innehåll genom strategisk färganvändning.",
      "Röstgränssnitt (VUI) integreras allt mer i traditionella grafiska gränssnitt. Detta skapar hybridupplevelser där användare kan växla sömlöst mellan röst- och touchinteraktion beroende på kontext och preferenser.",
      "Tillgänglighetsdesign har gått från att vara en eftertan till att vara en grundpelare i designprocessen. WCAG 2.2-riktlinjerna har blivit standarden, och inclusive design-principer formar nu hur vi tänker på färgkontrast, navigation och innehållsstruktur från första början.",
      "Data-driven personalisering når nya höjder. UX-designers arbetar nu nära med data scientists för att skapa adaptiva gränssnitt som lär sig av användarbeteende och anpassar sig automatiskt för att optimera konvertering och engagement.",
    ],
  },
  {
    title: "Så optimerar du din webbplats för Core Web Vitals",
    excerpt:
      "En praktisk guide för att förbättra din webbplats prestanda och Google-ranking genom Core Web Vitals optimering.",
    category: "SEO & Prestanda",
    author: "Christopher Flodin",
    date: "2023-12-28",
    readTime: "8 min",
    image: "/images/hartwall.png",
    slug: "optimera-core-web-vitals",
    content: [
      "Core Web Vitals har blivit en avgörande rankningsfaktor för Google, vilket gör prestandardoptimering mer viktig än någonsin. Dessa mätvärden – Largest Contentful Paint (LCP), First Input Delay (FID), och Cumulative Layout Shift (CLS) – mäter verklig användarupplevelse.",
      "Largest Contentful Paint (LCP) mäter hur snabbt det viktigaste innehållet laddas. För att optimera LCP bör du fokusera på att komprimera bilder, använda moderna bildformat som WebP, och implementera lazy loading för innehåll som inte syns direkt på skärmen.",
      "First Input Delay (FID) mäter responsiviteten på din webbplats. En hög FID indikerar att JavaScript blockerar huvudtråden. Lösningen är att dela upp stora JavaScript-bundles, använda web workers för tunga beräkningar, och prioritera kritisk CSS.",
      "Cumulative Layout Shift (CLS) mäter visuell stabilitet. Oväntat rörligt innehåll skapar dålig användarupplevelse. Sätt specifika dimensioner på bilder och videos, reservera utrymme för annonser, och undvik att dynamiskt injicera innehåll ovanför befintligt innehåll.",
      "Använd verktyg som Google PageSpeed Insights, Lighthouse, och Web.dev för att identifiera specifika förbättringsområden. Chrome DevTools Performance-panelen ger djupgående insikter i vad som orsakar prestandaproblem.",
      "Content Delivery Networks (CDN) kan drastiskt förbättra laddningstider genom att servera innehåll från geografiskt närmare servrar. Moderna CDN:er erbjuder även edge computing som kan köra kod närmare användaren.",
      "Server-side rendering (SSR) och static site generation (SSG) kan betydligt förbättra initial load times. Next.js, Nuxt.js och liknande ramverk gör det enkelt att implementera dessa tekniker utan att kompromissa med användarupplevelsen.",
    ],
  },
  {
    title: "Next.js 14: Nya funktioner och förbättringar",
    excerpt:
      "En genomgång av de senaste uppdateringarna i Next.js 14 och hur de kan förbättra din utvecklingsupplevelse.",
    category: "App Development",
    author: "Christopher Flodin",
    date: "2023-12-15",
    readTime: "6 min",
    image: "/images/hartwall.png",
    slug: "nextjs-14-nya-funktioner",
    content: [
      "Next.js 14 introducerar flera banbrytande funktioner som tar React-utveckling till nästa nivå. Den mest betydande uppdateringen är den nya App Router som nu är production-ready och erbjuder kraftfulla möjligheter för routing och layout management.",
      "Server Components har revitionerats och erbjuder nu bättre prestanda genom att minska JavaScript bundle-storleken på klientsidan. Detta resulterar i snabbare laddningstider och bättre användarupplevelse, särskilt på mobila enheter med begränsad bandbredd.",
      "Den nya Image-komponenten har förbättrats med automatisk optimering för olika skärmstorlekar och pixeldensiteter. WebP och AVIF-format stöds nu nativt, vilket kan minska bildstorlekar med upp till 50% utan kvalitetsförlust.",
      "Incremental Static Regeneration (ISR) har fått betydande förbättringar som gör det möjligt att uppdatera statiskt innehåll on-demand. Detta är perfekt för e-handelswebbplatser och CMS-drivna sajter som behöver balansera prestanda med färskt innehåll.",
      "TypeScript-integration har förbättrats med bättre type inference och automatisk typ-generering för API-routes. Detta minskar boilerplate-kod och gör utvecklingsprocessen mer effektiv.",
      "Edge Runtime-stödet har utökats, vilket möjliggör körning av Next.js-applikationer på edge-servrar runt om i världen. Detta resulterar i lägre latency och bättre prestanda för globala applikationer.",
    ],
  },
  {
    title: "Säkerhet i moderna webbapplikationer",
    excerpt:
      "Viktigaste säkerhetsaspekterna att tänka på när du utvecklar moderna webbapplikationer och API:er.",
    category: "Säkerhet",
    author: "Christopher Flodin",
    date: "2023-12-08",
    readTime: "10 min",
    image: "/images/hartwall.png",
    slug: "sakerhetsguide-webbapplikationer",
    content: [
      "Säkerhet i webbapplikationer har aldrig varit viktigare. Med den ökande digitaliseringen och sofistikerade attackmetoder måste utvecklare ha en holistisk approach till säkerhet från projektets första dag.",
      "Authentication och authorization bildar grunden för applikationssäkerhet. Implementera alltid multi-factor authentication (MFA) för känsliga system och använd etablerade protokoll som OAuth 2.0 och OpenID Connect istället för att bygga egna lösningar.",
      "Cross-Site Scripting (XSS) attacks är fortfarande en av de vanligaste säkerhetshoten. Använd Content Security Policy (CSP) headers, validera och sanitera all användarinput, och använd bibliotek som DOMPurify för att rengöra HTML-innehåll.",
      "SQL injection kan förebyggas genom att konsekvent använda prepared statements och parameterized queries. Aldrig konkatenera användarinput direkt i SQL-frågor, och implementera principle of least privilege för databasanvändare.",
      "HTTPS är inte längre valfritt – det är ett måste. Använd TLS 1.3 eller senare, implementera HTTP Strict Transport Security (HSTS), och överväg att använda Certificate Transparency för ytterligare säkerhet.",
      "Regular security audits och penetration testing bör vara en del av utvecklingsprocessen. Verktyg som OWASP ZAP, Burp Suite, och npm audit kan hjälpa till att identifiera sårbarheter tidigt i utvecklingscykeln.",
      "Logging och monitoring är kritiska för att upptäcka och hantera säkerhetsincidenter. Implementera centraliserad loggning, använd SIEM-verktyg för analys, och ha en incidenthanteringsplan redo för när säkerhetsbrott inträffar.",
    ],
  },
];

export function getAllArticles(): Article[] {
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getLatestArticles(count: number = 2): Article[] {
  return getAllArticles().slice(0, count);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(
  currentSlug: string,
  count: number = 2
): Article[] {
  return articles
    .filter((article) => article.slug !== currentSlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
