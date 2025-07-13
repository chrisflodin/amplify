import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllJobs } from "@/lib/jobs";
import { Job } from "@/types/job";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lediga Jobb - amplify",
  description:
    "Utforska karriärmöjligheter hos amplify. Vi söker drivna personer som vill vara med och bygga framtidens digitala lösningar.",
};

function JobCard({ job }: { job: Job }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-white shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-inter font-bold text-brand-black group-hover:text-gray-700 transition-colors">
              {job.title}
            </h3>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{job.location}</span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
            {job.description.split("\n")[0]}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {job.requirements.slice(0, 2).map((req, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {req.length > 30 ? req.substring(0, 30) + "..." : req}
              </Badge>
            ))}
            {job.requirements.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{job.requirements.length - 2} fler
              </Badge>
            )}
          </div>
          <Button className="bg-brand-black text-white hover:bg-gray-800">
            Läs mer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default function JobsPage() {
  const jobs = getAllJobs();

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-brand-black text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-inter font-bold mb-6">
              Lediga Jobb
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Bli en del av vårt team och hjälp oss bygga framtidens digitala
              lösningar. Vi söker drivna personer som vill göra skillnad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Stockholm</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
                <span>Remote möjligt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {jobs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2h-2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-inter font-bold text-brand-black mb-4">
                Inga lediga tjänster just nu
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Vi har för närvarande inga öppna tjänster, men vi är alltid
                intresserade av att träffa drivna personer.
              </p>
              <Button className="bg-brand-black text-white hover:bg-gray-800">
                Skicka spontanansökan
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Link key={job.id} href={`/jobb/${job.slug}`}>
                  <JobCard job={job} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-inter font-bold mb-6">
            Hittar du inte rätt tjänst?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vi växer snabbt och letar alltid efter talanger. Skicka en
            spontanansökan så hör vi av oss när vi har något som passar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-black hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Spontanansökan
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 text-lg font-semibold"
            >
              Kontakta oss
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
