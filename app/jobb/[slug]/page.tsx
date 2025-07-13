import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatJobDate, getJobBySlug } from "@/lib/jobs";
import { Job } from "@/types/job";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

interface JobPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const job = getJobBySlug(params.slug);

  if (!job) {
    return {
      title: "Jobb hittades inte - amplify",
    };
  }

  return {
    title: `${job.title} - Lediga Jobb - amplify`,
    description: job.description.split("\n")[0],
  };
}

function JobApplicationForm({ job }: { job: Job }) {
  return (
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="text-xl font-inter font-bold text-brand-black">
          Ansök till denna tjänst
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Förnamn
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                placeholder="Ditt förnamn"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Efternamn
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
                placeholder="Ditt efternamn"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-post
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
              placeholder="din@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
              placeholder="+46 70 123 45 67"
            />
          </div>

          <div>
            <label
              htmlFor="linkedin"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              LinkedIn (valfritt)
            </label>
            <input
              type="url"
              id="linkedin"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
              placeholder="https://linkedin.com/in/dittnamn"
            />
          </div>

          <div>
            <label
              htmlFor="portfolio"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Portfolio (valfritt)
            </label>
            <input
              type="url"
              id="portfolio"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
              placeholder="https://dinportfolio.com"
            />
          </div>

          <div>
            <label
              htmlFor="coverLetter"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Personligt brev
            </label>
            <textarea
              id="coverLetter"
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent resize-none"
              placeholder="Berätta varför du är rätt person för denna tjänst..."
            />
          </div>

          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CV
            </label>
            <input
              type="file"
              id="resume"
              accept=".pdf,.doc,.docx"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-black focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              PDF, DOC eller DOCX (max 10MB)
            </p>
          </div>
        </div>

        <Button className="w-full bg-brand-black text-white hover:bg-gray-800 py-3 font-semibold">
          Skicka ansökan
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Genom att skicka in din ansökan godkänner du vår behandling av dina
          personuppgifter enligt GDPR.
        </p>
      </CardContent>
    </Card>
  );
}

export default function JobDetailPage({ params }: JobPageProps) {
  const job = getJobBySlug(params.slug);

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-brand-black">
              Hem
            </Link>
            <span>/</span>
            <Link href="/jobb" className="hover:text-brand-black">
              Lediga Jobb
            </Link>
            <span>/</span>
            <span className="text-brand-black">{job.title}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-inter font-bold text-brand-black mb-4">
                {job.title}
              </h1>
              <div className="flex flex-wrap gap-4 items-center text-gray-600">
                <div className="flex items-center space-x-2">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center space-x-2">
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
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-2">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{job.type}</span>
                </div>
                {job.salary && (
                  <div className="flex items-center space-x-2">
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                    <span>{job.salary}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                {job.level}
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                {job.type}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold text-brand-black">
                    Om tjänsten
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-gray max-w-none">
                    {job.description.split("\n").map((paragraph, index) => (
                      <p
                        key={index}
                        className="mb-4 text-gray-700 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold text-brand-black">
                    Vad vi söker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold text-brand-black">
                    Vad vi erbjuder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <svg
                          className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Info */}
              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div>
                      <p>Publicerad: {formatJobDate(job.publishedAt)}</p>
                      {job.applicationDeadline && (
                        <p className="text-red-600 font-medium">
                          Ansök senast: {formatJobDate(job.applicationDeadline)}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p>Referensnummer: {job.id}</p>
                      <p>Avdelning: {job.department}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <JobApplicationForm job={job} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
