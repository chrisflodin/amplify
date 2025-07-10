import { SanityService } from "@/services/sanity";

// Legacy interface for backward compatibility
export interface LegacyArticle {
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

export async function getAllArticles(): Promise<LegacyArticle[]> {
  try {
    const articles = await SanityService.getAllArticles();
    return articles.map((article) => SanityService.toLegacyFormat(article));
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
}

export async function getLatestArticles(
  count: number = 2
): Promise<LegacyArticle[]> {
  try {
    const articles = await SanityService.getLatestArticles(count);
    return articles.map((article) => SanityService.toLegacyFormat(article));
  } catch (error) {
    console.error("Error fetching latest articles:", error);
    return [];
  }
}

export function getArticleBySlug(slug: string): LegacyArticle | undefined {
  // This function is now deprecated in favor of the async Sanity version
  // Keep for backward compatibility but log a warning
  console.warn(
    "getArticleBySlug is deprecated. Use SanityService.getArticleBySlug instead."
  );
  return undefined;
}

export function getRelatedArticles(
  currentSlug: string,
  count: number = 2
): LegacyArticle[] {
  // This function is now deprecated in favor of the async Sanity version
  // Keep for backward compatibility but log a warning
  console.warn(
    "getRelatedArticles is deprecated. Use SanityService.getRelatedArticles instead."
  );
  return [];
}
