import { client } from "@/lib/sanity";
import { Article } from "@/types/sanity-schema";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Helper function to build image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Extended Article type for display purposes
export interface DisplayArticle extends Omit<Article, "date"> {
  date: string;
  readTime: string;
  excerpt: string;
  imageUrl: string;
}

// GROQ queries
const ARTICLE_FIELDS = `
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  title,
  subtitle,
  slug,
  image{
    asset->{
      _id,
      url,
      metadata {
        dimensions
      }
    },
    hotspot,
    crop
  },
  category,
  author,
  date
`;

export class SanityService {
  static async getAllArticles(): Promise<Article[]> {
    try {
      const articles = await client.fetch<Article[]>(`
        *[_type == "article"] | order(date desc) {
          ${ARTICLE_FIELDS}
        }
      `);
      return articles;
    } catch (error) {
      console.error("Error fetching articles:", error);
      return [];
    }
  }

  static async getArticleBySlug(slug: string): Promise<Article | null> {
    try {
      const article = await client.fetch<Article | null>(
        `
        *[_type == "article" && slug.current == $slug][0] {
          ${ARTICLE_FIELDS}
        }
      `,
        { slug }
      );
      return article;
    } catch (error) {
      console.error("Error fetching article by slug:", error);
      return null;
    }
  }

  static async getLatestArticles(count: number = 3): Promise<Article[]> {
    try {
      const articles = await client.fetch<Article[]>(`
        *[_type == "article"] | order(date desc)[0...${count}] {
          ${ARTICLE_FIELDS}
        }
      `);
      return articles;
    } catch (error) {
      console.error("Error fetching latest articles:", error);
      return [];
    }
  }

  static async getRelatedArticles(
    currentSlug: string,
    count: number = 2
  ): Promise<Article[]> {
    try {
      const articles = await client.fetch<Article[]>(
        `
        *[_type == "article" && slug.current != $currentSlug] | order(date desc)[0...${count}] {
          ${ARTICLE_FIELDS}
        }
      `,
        { currentSlug }
      );
      return articles;
    } catch (error) {
      console.error("Error fetching related articles:", error);
      return [];
    }
  }

  static async getArticlesByCategory(category: string): Promise<Article[]> {
    try {
      const articles = await client.fetch<Article[]>(
        `
        *[_type == "article" && category == $category] | order(date desc) {
          ${ARTICLE_FIELDS}
        }
      `,
        { category }
      );
      return articles;
    } catch (error) {
      console.error("Error fetching articles by category:", error);
      return [];
    }
  }

  // Helper method to format date for display
  static formatDate(dateString: string | undefined): string {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("sv-SE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  // Helper method to calculate read time (basic estimate)
  static calculateReadTime(content: string): string {
    const wordsPerMinute = 200;
    const wordCount = content.split(" ").length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min`;
  }

  // Helper method to get image URL with dimensions
  static getImageUrl(image: any, width?: number, height?: number): string {
    if (!image?.asset) return "/images/placeholder.jpg";

    let imageBuilder = urlFor(image);
    if (width) imageBuilder = imageBuilder.width(width);
    if (height) imageBuilder = imageBuilder.height(height);

    return imageBuilder.url();
  }

  // Helper method to convert Article to DisplayArticle for UI compatibility
  static toDisplayArticle(article: Article): DisplayArticle {
    return {
      ...article,
      date: article.date || "",
      readTime: "5 min", // Default read time
      excerpt: article.subtitle || "",
      imageUrl: this.getImageUrl(article.image, 1200, 800),
    };
  }

  // Helper method to create legacy article format for compatibility
  static toLegacyFormat(article: Article) {
    return {
      title: article.title || "",
      excerpt: article.subtitle || "",
      category: article.category || "",
      author: article.author || "",
      date: article.date || "",
      readTime: "5 min", // Default read time
      image: this.getImageUrl(article.image, 1200, 800),
      slug: article.slug?.current || "",
      content: article.subtitle ? [article.subtitle] : [],
    };
  }
}
