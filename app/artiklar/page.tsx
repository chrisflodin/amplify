import { Badge } from "@/components/ui/badge";
import { getAllArticles } from "@/lib/articles";
import Image from "next/image";
import Link from "next/link";

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-brand-black pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold text-white mb-6">
              Artiklar
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Här hittar du våra senaste insights om digital utveckling, design
              och teknik. Upptäck trender, tips och djupdykningar som hjälper
              dig att förbättra din digitala närvaro.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Link href={`/artiklar/${article.slug}`} key={index}>
                <article className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-full flex flex-col">
                  {/* Article Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-inter font-bold text-brand-black group-hover:text-black/50 transition-colors leading-tight line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-semibold">
                            {article.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-brand-black">
                            {article.author}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(article.date).toLocaleDateString(
                              "sv-SE",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
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
                        <span className="text-sm">{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
