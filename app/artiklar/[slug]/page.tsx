import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SanityService } from "@/services/sanity";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await SanityService.getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel inte funnen - amplify",
      description: "Den begärda artikeln kunde inte hittas.",
    };
  }

  const title = `${article.title} - amplify`;
  const description =
    article.subtitle || `Läs mer om ${article.title} på amplify's blogg.`;
  const imageUrl = article.image
    ? SanityService.getImageUrl(article.image, 1200, 630)
    : null;

  return {
    title,
    description,
    keywords: [
      article.category || "",
      "digital utveckling",
      "design",
      "teknik",
      "amplify",
      "blogg",
    ].filter(Boolean),
    authors: [{ name: article.author || "amplify" }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: article.date,
      authors: [article.author || "amplify"],
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: article.title || "Article image",
            },
          ]
        : [],
      siteName: "amplify",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `https://weareamplify.se/artiklar/${slug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await SanityService.getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await SanityService.getRelatedArticles(slug, 2);

  return (
    <main className="bg-white min-h-screen">
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-brand-black">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <Badge className="bg-white text-brand-black px-4 py-2 text-sm font-semibold">
                {article.category}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-inter font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              {article.subtitle}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-brand-black font-semibold">
                    {article.author
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-white">{article.author}</p>
                  <p className="text-sm text-gray-400">Författare</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{SanityService.formatDate(article.date)}</span>
                </div>

                <div className="flex items-center space-x-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>5 min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative h-[50vh] lg:h-[60vh] w-full rounded-3xl overflow-hidden">
              <Image
                src={SanityService.getImageUrl(article.image, 1200, 800)}
                alt={article.title || "Article image"}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="section-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {article.subtitle}
              </p>
              {/* Add more content sections here when you have rich text content */}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-inter font-bold text-brand-black mb-4">
                Läs fler artiklar
              </h2>
              <p className="text-lg text-gray-600">
                Upptäck fler insights och tips
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedArticles.map((relatedArticle, index) => (
                <Link
                  href={`/artiklar/${relatedArticle.slug?.current}`}
                  key={index}
                >
                  <article className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                    {/* Article Image */}
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <Image
                        src={SanityService.getImageUrl(
                          relatedArticle.image,
                          600,
                          400
                        )}
                        alt={relatedArticle.title || "Related article image"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 backdrop-blur-sm text-brand-black border-0">
                          {relatedArticle.category}
                        </Badge>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 space-y-4 flex-1 flex flex-col">
                      {/* Title */}
                      <h3 className="text-xl font-inter font-bold text-brand-black group-hover:text-black/50 transition-colors leading-tight line-clamp-2">
                        {relatedArticle.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                        {relatedArticle.subtitle}
                      </p>

                      {/* Meta Information */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-semibold">
                              {relatedArticle.author
                                ?.split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-brand-black">
                              {relatedArticle.author}
                            </p>
                            <p className="text-xs text-gray-500">
                              {SanityService.formatDate(relatedArticle.date)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1 text-gray-500">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm">5 min</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link href="/artiklar">
                <Button className="bg-brand-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
                  Se alla artiklar
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-inter font-bold">
              Håll dig uppdaterad
            </h2>
            <p className="text-xl text-gray-300">
              Få de senaste artiklarna och insights direkt i din inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Din e-postadress"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-brand-black hover:bg-gray-100 px-6 py-3 font-semibold">
                Prenumerera
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
