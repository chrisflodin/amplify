import { Button } from "@/components/ui/button";
import { getAllProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function UppdragPage() {
  const projects = getAllProjects();

  return (
    <main className="bg-brand-black text-white">
      {/* Hero Section */}
      <section className="pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-inter font-bold leading-tight">
                Våra uppdrag
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Se hur vi har hjälpt företag att transformera sina digitala
                upplevelser och uppnå exceptionella resultat genom innovativ
                design och utveckling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link href={`/uppdrag/${project.slug}`} key={project.slug}>
                <div className="group relative overflow-hidden rounded-3xl hover:scale-[1.02] transition-all duration-500">
                  {/* Large Project Image */}
                  <div className="relative h-[60vh] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Category and Title Overlay - Bottom with glass morphism */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-black/80 backdrop-blur-sm rounded-b-3xl">
                      <div className="space-y-2">
                        <span className="text-base font-bold text-white uppercase tracking-wider">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                        <div className="w-16 h-1.5 bg-white/30 rounded-full group-hover:w-24 group-hover:bg-white/50 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold mb-6">
              Våra resultat i siffror
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Genom våra uppdrag har vi levererat mätbara resultat som har
              transformerat våra kunders verksamheter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="text-5xl font-inter font-bold text-blue-400">
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
              <div className="text-5xl font-inter font-bold text-green-400">
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
              <div className="text-5xl font-inter font-bold text-purple-400">
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
              <div className="text-5xl font-inter font-bold text-orange-400">
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
            <h2 className="text-4xl font-inter font-bold">
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
