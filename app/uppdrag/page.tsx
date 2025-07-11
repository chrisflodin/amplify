import { ContactSection } from "@/components/sections";
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
                Utvalda uppdrag
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
                <div className="group relative overflow-hidden rounded-3xl hover:scale-[1.02] transition-all duration-500 border border-white/15">
                  {/* Large Project Image */}
                  <div className="relative h-[40vh] overflow-hidden">
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
      <ContactSection
        title="Är ditt uppdrag på tur?
"
      />
    </main>
  );
}
