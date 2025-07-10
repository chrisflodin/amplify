import { Badge } from "@/components/ui/badge";
import { SanityService } from "@/services/sanity";
import Image from "next/image";
import Link from "next/link";

export default async function ArticleSection() {
  const articles = await SanityService.getLatestArticles(2);

  if (!articles.length) return null;

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-inter font-bold text-brand-black mb-6">
              Senaste artiklarna
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Håll dig uppdaterad med våra senaste insights om digital
              utveckling, design och teknik.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {articles.map((article, index) => (
              <Link href={`/artiklar/${article.slug?.current}`} key={index}>
                <article className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                  {/* Article Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={SanityService.getImageUrl(article.image, 600, 400)}
                      alt={article.title || "Article image"}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 backdrop-blur-sm text-brand-black border-0">
                        {article.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-2xl font-inter font-bold text-brand-black group-hover:text-black/50 transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 leading-relaxed line-clamp-3 flex-1">
                      {article.subtitle}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-brand-black rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">
                            {article.author
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-brand-black">
                            {article.author}
                          </p>
                          <p className="text-sm text-gray-500">
                            {SanityService.formatDate(article.date)}
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

          {/* View All Articles CTA */}
          <div className="text-center mt-16">
            <Link
              href="/artiklar"
              className="inline-block bg-brand-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Se alla artiklar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
