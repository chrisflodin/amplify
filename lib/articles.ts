export interface Article {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
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
