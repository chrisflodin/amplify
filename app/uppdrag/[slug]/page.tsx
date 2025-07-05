"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface UppdragPageProps {
  params: {
    slug: string;
  };
}

export default function UppdragPage({ params }: UppdragPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(params.slug, 3);

  return (
    <main className="bg-brand-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                  {project.category}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-macklin font-bold leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                  {project.heroDescription}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-8 py-4"
                >
                  Se liknande uppdrag
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-4"
                >
                  Kontakta oss
                </Button>
              </div>
            </div>

            {/* Right Column - Project Image */}
            <div className="relative">
              <div className="relative h-[600px] w-full rounded-3xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                Uppdragstart
              </h3>
              <p className="text-4xl font-macklin font-bold">{project.year}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                Leveranstid
              </h3>
              <p className="text-4xl font-macklin font-bold">
                {project.duration}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                Tekniker
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-white/20 text-white text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                Resultat
              </h3>
              <p className="text-lg font-medium text-green-400">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Background */}
            <div className="space-y-6">
              <h2 className="text-3xl font-macklin font-bold">Bakgrund</h2>
              <div className="space-y-4 text-gray-300">
                {project.background.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Our Role */}
            <div className="space-y-6">
              <h2 className="text-3xl font-macklin font-bold">Vår roll</h2>
              <div className="space-y-4 text-gray-300">
                {project.role.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h2 className="text-3xl font-macklin font-bold">Resultat</h2>
              <div className="space-y-4 text-gray-300">
                {project.resultsDescription.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Results */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-macklin font-bold mb-6">
              Visuella resultat
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Se hur vi transformerade {project.title}s digitala närvaro från
              utdaterad till modern, konverteringsfokuserad upplevelse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border border-white/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-macklin font-bold">Före</h3>
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400">Gammal lösning</span>
                  </div>
                  <p className="text-gray-300">
                    Föråldrad design, dålig användarupplevelse, låg konvertering
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border border-white/10 overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-macklin font-bold">Efter</h3>
                  <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">
                      Ny modern lösning
                    </span>
                  </div>
                  <p className="text-gray-300">
                    Modern design, optimerad för konvertering, förbättrad
                    användarupplevelse
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-macklin font-bold mb-6">
              Nyckeltal och resultat
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.keyMetrics.map((metric, index) => (
              <Card
                key={index}
                className="bg-white/5 border border-white/10 text-center"
              >
                <CardContent className="p-8">
                  <div
                    className={`text-5xl font-macklin font-bold mb-4 ${metric.color}`}
                  >
                    {metric.value}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
                  <p className="text-gray-300">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-macklin font-bold mb-6">
              Relaterade uppdrag
            </h2>
            <p className="text-xl text-gray-300">
              Se fler exempel på vårt arbete inom digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link
                href={`/uppdrag/${relatedProject.slug}`}
                key={relatedProject.slug}
              >
                <Card className="group bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                        {relatedProject.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">
                        {relatedProject.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}

            {/* View All Projects Card */}
            <Link href="/uppdrag">
              <Card className="group bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 flex items-center justify-center h-full min-h-[300px]">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-white/20 transition-colors">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold">Se alla uppdrag</h3>
                    <p className="text-gray-300 text-sm">
                      Utforska vårt kompletta uppdragsportfölj
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-macklin font-bold">
              Redo att transformera ert uppdrag?
            </h2>
            <p className="text-xl text-gray-300">
              Låt oss hjälpa er att skapa en digital upplevelse som levererar
              resultat. Kontakta oss för en kostnadsfri konsultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Starta ett uppdrag
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4"
              >
                Se alla uppdrag
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
