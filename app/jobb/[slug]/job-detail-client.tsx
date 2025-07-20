"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Job } from "@/types/job";
import { useState } from "react";

interface JobDetailClientProps {
  job: Job;
}

function JobApplicationForm({ job }: { job: Job }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Vi beklagar, denna tjänst har redan tillsatts",
        variant: "destructive",
      });
    }, 500);
  };

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

        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-brand-black text-white hover:bg-gray-800 py-3 font-semibold disabled:opacity-50"
        >
          {isSubmitting ? "Skickar..." : "Skicka ansökan"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Genom att skicka in din ansökan godkänner du vår behandling av dina
          personuppgifter enligt GDPR.
        </p>
      </CardContent>
    </Card>
  );
}

export default function JobDetailClient({ job }: JobDetailClientProps) {
  return (
    <main className="min-h-screen bg-gray-50 ">
      {/* Header */}
      <section className="bg-brand-black border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8 pt-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-inter font-bold text-white mb-4">
                {job.title}
              </h1>
              <p className="text-gray-300 text-lg">{job.location}</p>
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
