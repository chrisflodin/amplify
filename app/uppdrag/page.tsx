"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function UppdragPage() {
  const projects = getAllProjects();

  return (
    <main className="bg-brand-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-macklin font-bold leading-tight">
                Våra uppdrag
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Se hur vi har hjälpt företag att transformera sina digitala
                upplevelser och uppnå exceptionella resultat genom innovativ
                design och utveckling.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-8 py-4"
              >
                Alla uppdrag
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4"
              >
                E-commerce
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4"
              >
                Appar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4"
              >
                Marknadsföring
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link href={`/uppdrag/${project.slug}`} key={project.slug}>
                <Card className="group bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5">
                  {/* Project Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    {/* Project Title */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-macklin font-bold group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                      <div className="space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          År
                        </p>
                        <p className="text-sm font-medium">{project.year}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          Leveranstid
                        </p>
                        <p className="text-sm font-medium">
                          {project.duration}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <p className="text-xs text-gray-400 uppercase tracking-wider">
                        Tekniker
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-white/20 text-white text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs text-gray-400 uppercase tracking-wider">
                            Resultat
                          </p>
                          <p className="text-lg font-bold text-green-400">
                            {project.results}
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-4 h-4 text-white"
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-macklin font-bold mb-6">
              Våra resultat i siffror
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Genom våra uppdrag har vi levererat mätbara resultat som har
              transformerat våra kunders verksamheter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl font-macklin font-bold text-blue-400">
                50+
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Genomförda uppdrag</h3>
                <p className="text-gray-300 text-sm">
                  Framgångsrikt levererade lösningar
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-macklin font-bold text-green-400">
                +250%
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Genomsnittlig ökning</h3>
                <p className="text-gray-300 text-sm">
                  Konvertering och engagemang
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-macklin font-bold text-purple-400">
                98%
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Kundnöjdhet</h3>
                <p className="text-gray-300 text-sm">
                  Nöjda kunder som rekommenderar oss
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="text-5xl font-macklin font-bold text-orange-400">
                24/7
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Support</h3>
                <p className="text-gray-300 text-sm">
                  Kontinuerlig support och underhåll
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-macklin font-bold">
              Är ditt uppdrag nästa?
            </h2>
            <p className="text-xl text-gray-300">
              Vi hjälper företag att skapa digitala upplevelser som levererar
              verkliga resultat. Låt oss diskutera hur vi kan hjälpa er att nå
              era mål.
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
                Kontakta oss
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
