import { Service, ServiceDetailData } from "@/types/service";

export const services: Service[] = [
  {
    id: "branding",
    slug: "branding",
    name: "Branding",
    title: "Branding",
    description: "Stärk ert varumärke med en tydlig identitet",
    shortDescription:
      "Vi hjälper er att bygga ett varumärke som sticker ut och skapar förtroende – från strategi till visuell identitet.",
    features: [
      "Varumärkesstrategi",
      "Visuell identitet",
      "Brandguide",
      "Tonalitet och kommunikation",
    ],
    detailedDescription:
      "Vi utvecklar varumärken som engagerar och särskiljer er på marknaden. Med en genomtänkt strategi och enhetlig visuell identitet ser vi till att ert varumärke kommunicerar rätt budskap i alla kanaler.",
  },
  {
    id: "ux-ui-design",
    slug: "ux-ui-design",
    name: "UX / UI design",
    title: "UX / UI design",
    description: "Design som engagerar och konverterar",
    shortDescription:
      "Vi skapar användarupplevelser och gränssnitt som är både snygga och intuitiva – alltid med affärsmål och användare i fokus.",
    features: [
      "Användarcentrerad design",
      "Prototyping och wireframes",
      "Interaktionsdesign",
      "Användartester och optimering",
    ],
    detailedDescription:
      "Med insiktsdriven UX och UI-design hjälper vi er att skapa digitala lösningar som stärker varumärket, ökar konverteringen och ger era användare en smidig upplevelse.",
  },
  {
    id: "webbutveckling",
    slug: "webbutveckling",
    name: "Webbutveckling",
    title: "Webbutveckling",
    description:
      "Modern webbutveckling med React, Next.js och Sanity CMS för framtidens affärer",
    shortDescription:
      "Vi bygger snabba, säkra och skräddarsydda webbplatser och e-handelslösningar – alltid med fokus på prestanda och användarvänlighet.",
    features: [
      "Frontend- och backendutveckling med React och Next.js",
      "Sanity CMS",
      "Skräddarsydda lösningar",
      "API-integrationer och säkerhet",
    ],
    detailedDescription:
      "Från första kodraden till lanserad webbplats – vi tar ansvar för hela processen. Vi utvecklar tekniskt optimerade hemsidor, e-handel och applikationer i moderna ramverk som WordPress och Laravel, alltid anpassade efter era behov och mål.",
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
    description: "E-handelslösningar som driver försäljning",
    shortDescription:
      "Vi bygger användarvänliga och konverterande e-handelsplattformar – från WooCommerce till skräddarsydda lösningar.",
    features: [
      "Next.js, Sanity CMS",
      "Skräddarsydd e-handel",
      "Betalnings- och logistiklösningar",
      "Integrationer och automation",
    ],
    detailedDescription:
      "Vi skapar e-handelslösningar som är optimerade för tillväxt och enkel administration. Oavsett om du behöver en flexibel WooCommerce-butik eller en helt skräddarsydd plattform, hjälper vi dig att sälja mer och växa digitalt.",
  },
  {
    id: "seo",
    slug: "seo",
    name: "SEO",
    title: "SEO",
    description: "Sökmotoroptimering för långsiktig synlighet",
    shortDescription:
      "Vi optimerar din webbplats för att du ska synas högre i sökresultaten och attrahera rätt besökare.",
    features: [
      "Teknisk SEO",
      "On-page och innehållsoptimering",
      "Länkstrategi",
      "Lokal och nationell SEO",
    ],
    detailedDescription:
      "Vi kombinerar teknisk expertis med kreativ innehållsstrategi för att maximera din organiska synlighet. Genom analys, optimering och uppföljning hjälper vi dig att nå dina affärsmål med SEO.",
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
    description: "Innehåll som engagerar och bygger varumärke",
    shortDescription:
      "Vi producerar strategiskt innehåll som stärker din digitala närvaro och driver resultat.",
    features: [
      "Innehållsstrategi",
      "SEO-anpassade texter",
      "Copywriting & storytelling",
      "Contentplanering och publicering",
    ],
    detailedDescription:
      "Vi hjälper dig att nå ut med rätt budskap till rätt målgrupp. Med en tydlig strategi och engagerande texter skapar vi innehåll som bygger relationer och ökar din synlighet online.",
  },
  {
    id: "growth",
    slug: "growth",
    name: "Growth",
    title: "Growth",
    description: "Datadriven tillväxt och konverteringsoptimering",
    shortDescription:
      "Vi utvecklar och implementerar strategier som driver mätbar tillväxt och ökar din lönsamhet.",
    features: [
      "Tillväxtanalys",
      "Konverteringsoptimering (CRO)",
      "Automatisering och leadgenerering",
      "Prestandamätning och rapportering",
    ],
    detailedDescription:
      "Vi hjälper dig att växa genom att analysera data, optimera konverteringar och automatisera processer. Med fokus på resultat och ständig förbättring skapar vi en grund för långsiktig tillväxt.",
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
            title: "Modern teknikstack",
            description:
              "Vi använder de senaste ramverken och teknikerna för att bygga snabba och skalbara webbplatser.",
          },
          {
            title: "Responsiv design",
            description:
              "Vi säkerställer att din webbplats fungerar och ser bra ut på alla enheter och skärmstorlekar.",
          },
          {
            title: "CMS-lösningar",
            description:
              "Vi implementerar användarvänliga innehållshanteringssystem som gör det enkelt att uppdatera din webbplats.",
          },
          {
            title: "Skräddarsydd backend",
            description:
              "Vi utvecklar backend-lösningar anpassade efter dina affärsbehov och mål.",
          },
        ],
        description:
          "Vi tar ansvar för hela utvecklingsprocessen – från första kodraden till lanserad webbplats, alltid med fokus på kvalitet och användarupplevelse.",
      },
      {
        title: "API- och systemintegrationer",
        features: [
          {
            title: "Tredjepartsintegrationer",
            description:
              "Vi kopplar samman din webbplats med externa system som betalningslösningar, CRM och logistikplattformar.",
          },
          {
            title: "Automatisering",
            description:
              "Vi effektiviserar arbetsflöden genom att automatisera processer och dataflöden mellan olika system.",
          },
          {
            title: "Headless-arkitektur",
            description:
              "Vi bygger flexibla lösningar där frontend och backend är separerade för maximal prestanda och skalbarhet.",
          },
        ],
        description:
          "Vi integrerar din webbplats med de system och verktyg du behöver för att skapa en sömlös digital upplevelse.",
      },
      {
        title: "Säkerhet och prestanda",
        features: [
          {
            title: "SSL och dataskydd",
            description:
              "Vi implementerar säkerhetslösningar som skyddar både din webbplats och dina användares data.",
          },
          {
            title: "Prestandaoptimering",
            description:
              "Vi optimerar laddningstider och ser till att din webbplats alltid är snabb och tillgänglig.",
          },
          {
            title: "Underhåll och support",
            description:
              "Vi erbjuder löpande underhåll och support för att din webbplats ska vara säker och uppdaterad.",
          },
        ],
        description:
          "Vi prioriterar säkerhet och prestanda i varje projekt för att skapa trygga och effektiva webbupplevelser.",
      },
    ],
  },
  apputveckling: {
    service: services.find((s) => s.id === "apputveckling")!,
    sections: [
      {
        title: "Plattformsutveckling",
        features: [
          {
            title: "iOS och Android med React Native",
            description:
              "Vi utvecklar appar för både iOS och Android med React Native för maximal räckvidd och effektivitet.",
          },
          {
            title: "Cross-platform med React Native",
            description:
              "Vi använder React Native för att bygga appar som fungerar sömlöst på flera plattformar med en gemensam kodbas.",
          },
          {
            title: "Backend och API",
            description:
              "Vi bygger robusta backend-lösningar och integrerar API:er för att ge din app kraftfull funktionalitet.",
          },
        ],
        description:
          "Vi utvecklar appar med React Native för både iOS och Android, med fokus på prestanda, säkerhet och skalbarhet.",
      },
      {
        title: "Användarupplevelse och design",
        features: [
          {
            title: "Intuitiva gränssnitt",
            description:
              "Vi designar användarvänliga gränssnitt som gör appen enkel och rolig att använda.",
          },
          {
            title: "Interaktionsdesign",
            description:
              "Vi skapar engagerande interaktioner som ökar användarnas engagemang och lojalitet.",
          },
          {
            title: "Tillgänglighet",
            description:
              "Vi ser till att appen är tillgänglig för alla användare, oavsett behov eller enhet.",
          },
        ],
        description:
          "En bra app bygger på en stark användarupplevelse. Vi fokuserar på design och interaktion för att skapa nöjda användare.",
      },
      {
        title: "Lansering och optimering",
        features: [
          {
            title: "App Store-optimering",
            description:
              "Vi optimerar din app för att synas och lyckas i App Store och Google Play.",
          },
          {
            title: "Prestanda och säkerhet",
            description:
              "Vi testar och optimerar appen för snabbhet, stabilitet och datasäkerhet.",
          },
          {
            title: "Uppdateringar och support",
            description:
              "Vi erbjuder löpande support och uppdateringar för att din app alltid ska vara aktuell och fungerande.",
          },
        ],
        description:
          "Vi hjälper dig hela vägen från lansering till vidareutveckling och optimering av din app.",
      },
    ],
  },
  branding: {
    service: services.find((s) => s.id === "branding")!,
    sections: [
      {
        title: "Varumärkesidentitet",
        features: [
          {
            title: "Logotyp",
            description:
              "Vi tar fram en unik logotyp som fångar varumärkets kärna och skapar igenkänning.",
          },
          {
            title: "Typografi",
            description:
              "Vi väljer och anpassar typsnitt som förstärker ert budskap och ger ett enhetligt intryck.",
          },
          {
            title: "Färgpalett",
            description:
              "Vi definierar en färgpalett som speglar varumärkets personlighet och skapar visuell harmoni.",
          },
          {
            title: "Grafiska element",
            description:
              "Vi utvecklar grafiska element som stärker identiteten och ger ett professionellt uttryck.",
          },
        ],
        description:
          "Er varumärkesidentitet är det visuella och känslomässiga uttrycket för ert företag. En stark och konsekvent identitet hjälper er att bygga igenkänning, förtroende och lojalitet bland era kunder.",
      },
      {
        title: "Tonalitet",
        features: [
          {
            title: "Röst och ton",
            description:
              "Vi definierar hur ert varumärke låter och känns i all kommunikation för att skapa igenkänning.",
          },
          {
            title: "Språk och stil",
            description:
              "Vi sätter riktlinjer för språkbruk och stil så att kommunikationen alltid är tydlig och konsekvent.",
          },
          {
            title: "Meddelande",
            description:
              "Vi hjälper er att formulera kärnbudskap som engagerar och bygger relationer med målgruppen.",
          },
        ],
        description:
          "Tonaliteten i era meddelanden är lika viktig som själva budskapet. En tydlig och genomtänkt ton gör kommunikationen minnesvärd och engagerande.",
      },
      {
        title: "Visuell design",
        features: [
          {
            title: "Marknadsföringsmaterial",
            description:
              "Vi designar material som stärker varumärket i alla kanaler – från tryck till digitalt.",
          },
          {
            title: "Webbdesign",
            description:
              "Vi skapar en visuell närvaro online som är både attraktiv och konsekvent med varumärket.",
          },
          {
            title: "Sociala medier",
            description:
              "Vi tar fram grafiska mallar och riktlinjer för en enhetlig närvaro i sociala medier.",
          },
          {
            title: "Förpackningsdesign",
            description:
              "Vi utvecklar förpackningslösningar som lyfter fram varumärket och skapar köplust.",
          },
        ],
        description:
          "En konsekvent och genomtänkt visuell design gör ert varumärke minnesvärt och attraktivt. Vi säkerställer att alla visuella element samspelar för maximal effekt.",
      },
    ],
  },
  "ux-ui-design": {
    service: services.find((s) => s.id === "ux-ui-design")!,
    sections: [
      {
        title: "Användarupplevelse",
        features: [
          {
            title: "Användarcentrerad design",
            description:
              "Vi utgår från användarens behov och beteenden för att skapa lösningar som känns naturliga och engagerande.",
          },
          {
            title: "Research och analys",
            description:
              "Vi genomför användarstudier och analyser för att förstå målgruppen och identifiera förbättringsområden.",
          },
          {
            title: "Prototyping",
            description:
              "Vi visualiserar idéer tidigt med prototyper för att testa och validera koncept innan utveckling.",
          },
        ],
        description:
          "En stark användarupplevelse är grunden för digital framgång. Vi säkerställer att era digitala lösningar är intuitiva, tillgängliga och uppskattade av användarna.",
      },
      {
        title: "Interaktionsdesign",
        features: [
          {
            title: "Wireframes",
            description:
              "Vi skapar tydliga wireframes som visualiserar struktur och flöden för att optimera användarresan.",
          },
          {
            title: "Mikrointeraktioner",
            description:
              "Vi designar små, genomtänkta interaktioner som gör användarupplevelsen smidig och engagerande.",
          },
          {
            title: "Användartester",
            description:
              "Vi testar och utvärderar designen med riktiga användare för att säkerställa bästa möjliga resultat.",
          },
        ],
        description:
          "Genomtänkt interaktionsdesign leder användaren rätt och skapar en positiv känsla i varje steg av resan.",
      },
      {
        title: "Designsystem",
        features: [
          {
            title: "Komponentbibliotek",
            description:
              "Vi bygger återanvändbara komponenter för enhetlig design och snabbare utveckling.",
          },
          {
            title: "Stilguider",
            description:
              "Vi dokumenterar färger, typografi och andra visuella riktlinjer för konsekvent varumärkesupplevelse.",
          },
          {
            title: "Skalbarhet",
            description:
              "Vi säkerställer att designsystemet kan växa och anpassas i takt med era behov.",
          },
        ],
        description:
          "Ett välutvecklat designsystem ger struktur, effektivitet och en sammanhållen användarupplevelse över tid.",
      },
    ],
  },
  "e-handel": {
    service: services.find((s) => s.id === "e-handel")!,
    sections: [
      {
        title: "Plattformsval och utveckling",
        features: [
          {
            title: "Next.js, React, Sanity CMS",
            description:
              "Vi bygger flexibla och skalbara e-handelslösningar i WooCommerce och WordPress, anpassade efter dina behov.",
          },
          {
            title: "Skräddarsydd e-handel",
            description:
              "Vi utvecklar unika plattformar för komplexa krav och integrationer, helt enligt dina önskemål.",
          },
          {
            title: "Integrationer",
            description:
              "Vi kopplar ihop din e-handel med affärssystem, logistik och betalningslösningar för en smidig drift.",
          },
        ],
        description:
          "Vi hjälper dig att välja och utveckla rätt plattform för din e-handel – från standardlösningar till skräddarsydd utveckling.",
      },
      {
        title: "Konverteringsoptimering",
        features: [
          {
            title: "Användarvänlig design",
            description:
              "Vi skapar gränssnitt som gör det enkelt och inspirerande att handla online.",
          },
          {
            title: "Kundresa och checkout",
            description:
              "Vi optimerar hela köpupplevelsen – från första besöket till slutförd betalning.",
          },
          {
            title: "Mobilanpassning",
            description:
              "Vi ser till att din butik fungerar perfekt på alla enheter och skärmstorlekar.",
          },
        ],
        description:
          "Vi maximerar din försäljning genom att optimera användarupplevelsen och förenkla köpprocessen.",
      },
      {
        title: "Drift och tillväxt",
        features: [
          {
            title: "Automatisering",
            description:
              "Vi implementerar automatiserade flöden för order, lager och marknadsföring.",
          },
          {
            title: "Prestanda och säkerhet",
            description:
              "Vi ser till att din e-handel är snabb, säker och alltid tillgänglig för dina kunder.",
          },
          {
            title: "Uppföljning och analys",
            description:
              "Vi mäter och analyserar resultat för att ständigt förbättra och växa din e-handel.",
          },
        ],
        description:
          "Vi stöttar dig med drift, support och strategier för att din e-handel ska växa och utvecklas över tid.",
      },
    ],
  },
  seo: {
    service: services.find((s) => s.id === "seo")!,
    sections: [
      {
        title: "Teknisk SEO",
        features: [
          {
            title: "Webbplatsstruktur",
            description:
              "Vi optimerar din webbplats struktur och navigation för att sökmotorer enkelt ska kunna indexera allt innehåll.",
          },
          {
            title: "Hastighet och prestanda",
            description:
              "Vi förbättrar laddningstider och teknisk prestanda för att ge både användare och sökmotorer en bättre upplevelse.",
          },
          {
            title: "Mobilanpassning",
            description:
              "Vi säkerställer att din webbplats fungerar perfekt på alla enheter, vilket är avgörande för SEO.",
          },
        ],
        description:
          "Vi lägger grunden för långsiktig synlighet genom att optimera tekniken bakom din webbplats.",
      },
      {
        title: "Innehåll och on-page",
        features: [
          {
            title: "Sökordsanalys",
            description:
              "Vi identifierar de viktigaste sökorden för din verksamhet och optimerar innehållet därefter.",
          },
          {
            title: "Metadata och struktur",
            description:
              "Vi optimerar titlar, beskrivningar och rubriker för att förbättra synlighet och klickfrekvens.",
          },
          {
            title: "Kvalitativt innehåll",
            description:
              "Vi producerar engagerande och relevant innehåll som attraherar både besökare och sökmotorer.",
          },
        ],
        description:
          "Vi ser till att ditt innehåll är optimerat för både användare och sökmotorer – från text till struktur.",
      },
      {
        title: "Länkstrategi och analys",
        features: [
          {
            title: "Länkbygge",
            description:
              "Vi bygger en stark länkprofil genom relevanta och kvalitativa länkar till din webbplats.",
          },
          {
            title: "Lokal och nationell SEO",
            description:
              "Vi hjälper dig att synas både lokalt och nationellt beroende på din målgrupp.",
          },
          {
            title: "Uppföljning och rapportering",
            description:
              "Vi analyserar och rapporterar löpande resultat för att säkerställa att SEO-arbetet ger effekt.",
          },
        ],
        description:
          "Vi stärker din auktoritet och följer upp resultaten för att maximera din synlighet över tid.",
      },
    ],
  },
  "web-design": {
    service: services.find((s) => s.id === "web-design")!,
    sections: [
      {
        title: "Visuell identitet",
        features: [
          {
            title: "Färgscheman och typografi",
            description:
              "Vi skapar harmoniska färgscheman och väljer typografi som förstärker ditt varumärke.",
          },
          {
            title: "Bildspråk och ikoner",
            description:
              "Vi använder bilder och ikoner som stödjer budskapet och skapar en unik känsla.",
          },
          {
            title: "Grafiska element",
            description:
              "Vi designar grafiska element som ger webbplatsen karaktär och igenkänning.",
          },
        ],
        description:
          "Vi bygger en visuell identitet som gör att din webbplats sticker ut och känns professionell.",
      },
      {
        title: "Responsivitet och tillgänglighet",
        features: [
          {
            title: "Responsiv design",
            description:
              "Vi ser till att din webbplats fungerar och ser bra ut på alla enheter och skärmstorlekar.",
          },
          {
            title: "Tillgänglighetsanpassning",
            description:
              "Vi följer riktlinjer för tillgänglighet så att alla användare kan ta del av innehållet.",
          },
          {
            title: "Prestandaoptimering",
            description:
              "Vi optimerar laddningstider och teknisk prestanda för bästa möjliga användarupplevelse.",
          },
        ],
        description:
          "Vi säkerställer att din webbplats är tillgänglig, snabb och användarvänlig för alla besökare.",
      },
      {
        title: "Design för konvertering",
        features: [
          {
            title: "Tydliga call-to-actions",
            description:
              "Vi utformar knappar och uppmaningar som leder besökaren mot dina mål.",
          },
          {
            title: "Strukturerad layout",
            description:
              "Vi organiserar innehållet för att göra det lätt att navigera och hitta information.",
          },
          {
            title: "A/B-testning",
            description:
              "Vi testar och optimerar designen för att maximera konverteringsgraden.",
          },
        ],
        description:
          "Vi designar med fokus på att öka engagemang och konverteringar på din webbplats.",
      },
    ],
  },
  content: {
    service: services.find((s) => s.id === "content")!,
    sections: [
      {
        title: "Innehållsstrategi",
        features: [
          {
            title: "Målgruppsanalys",
            description:
              "Vi identifierar och analyserar din målgrupp för att skapa relevant och engagerande innehåll.",
          },
          {
            title: "Budskapsformulering",
            description:
              "Vi hjälper dig att formulera tydliga och effektiva budskap som stärker varumärket.",
          },
          {
            title: "Contentplan",
            description:
              "Vi tar fram en långsiktig plan för innehåll som stödjer dina affärsmål.",
          },
        ],
        description:
          "Vi bygger en stark grund för din digitala närvaro genom en genomtänkt innehållsstrategi.",
      },
      {
        title: "Produktion och publicering",
        features: [
          {
            title: "SEO-anpassade texter",
            description:
              "Vi skriver texter som är optimerade för både sökmotorer och läsare.",
          },
          {
            title: "Copywriting och storytelling",
            description:
              "Vi skapar berättelser och innehåll som engagerar och konverterar.",
          },
          {
            title: "Multimedia och grafik",
            description:
              "Vi producerar bilder, video och grafik som förstärker ditt budskap.",
          },
          {
            title: "Publiceringsplanering",
            description:
              "Vi ser till att innehållet publiceras vid rätt tidpunkt och i rätt kanaler.",
          },
        ],
        description:
          "Vi producerar och publicerar innehåll som stärker din digitala närvaro och driver resultat.",
      },
      {
        title: "Analys och optimering",
        features: [
          {
            title: "Prestandamätning",
            description:
              "Vi mäter hur ditt innehåll presterar och identifierar förbättringsområden.",
          },
          {
            title: "A/B-testning",
            description:
              "Vi testar olika versioner av innehåll för att maximera effekt och engagemang.",
          },
          {
            title: "Löpande optimering",
            description:
              "Vi justerar och förbättrar innehållet kontinuerligt baserat på data och insikter.",
          },
        ],
        description:
          "Vi analyserar och optimerar innehållet för att säkerställa långsiktig framgång online.",
      },
    ],
  },
  growth: {
    service: services.find((s) => s.id === "growth")!,
    sections: [
      {
        title: "Tillväxtstrategi",
        features: [
          {
            title: "Målgruppsanalys",
            description:
              "Vi analyserar din målgrupp och marknad för att identifiera nya tillväxtmöjligheter.",
          },
          {
            title: "Kundresa",
            description:
              "Vi kartlägger och optimerar kundresan för att öka engagemang och lojalitet.",
          },
          {
            title: "Strategisk planering",
            description:
              "Vi tar fram en konkret plan för att driva tillväxt och nå dina affärsmål.",
          },
        ],
        description:
          "Vi utvecklar en datadriven strategi som lägger grunden för långsiktig och hållbar tillväxt.",
      },
      {
        title: "Konverteringsoptimering",
        features: [
          {
            title: "A/B-testning",
            description:
              "Vi testar och optimerar olika delar av din webbplats för att maximera konverteringsgraden.",
          },
          {
            title: "Funnel-analys",
            description:
              "Vi analyserar och förbättrar varje steg i sälj- och marknadsföringstratten.",
          },
          {
            title: "UX-förbättringar",
            description:
              "Vi identifierar och åtgärdar hinder i användarupplevelsen för att öka avslut och försäljning.",
          },
        ],
        description:
          "Vi ökar din lönsamhet genom att optimera konverteringar och förbättra användarupplevelsen.",
      },
      {
        title: "Automatisering och analys",
        features: [
          {
            title: "Leadgenerering",
            description:
              "Vi implementerar automatiserade processer för att generera och vårda leads.",
          },
          {
            title: "Prestandamätning",
            description:
              "Vi mäter och rapporterar resultat för att säkerställa att tillväxtinsatserna ger effekt.",
          },
          {
            title: "Löpande optimering",
            description:
              "Vi arbetar kontinuerligt med att förbättra och justera strategier baserat på data och insikter.",
          },
        ],
        description:
          "Vi automatiserar och analyserar för att skapa en skalbar och effektiv tillväxtresa.",
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
