import { ContactSection } from "@/components/sections";
import { getProjectBySlug, getRelatedProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug, 3);

  return (
    <main className="bg-brand-black text-white">
      {/* Hero Section */}
      <section className="flex items-center pt-[18vw] md:pt-[10vw] pb-[3vw]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - Category and Title */}
            <div className="space-y-8 lg:col-span-1">
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-3xl font-inter font-bold text-gray-300 uppercase tracking-wider">
                  {project.category}
                </h2>
                <h1 className="text-5xl lg:text-7xl font-inter font-medium ">
                  {project.longTitle}
                </h1>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-start lg:col-span-1">
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-xl">
                {project.heroDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large Project Image */}
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[70vh] w-full rounded-3xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.shortTitle}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                Uppdragstart
              </h3>
              <p className="text-4xl font-inter font-bold">{project.year}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">
                Leveranstid
              </h3>
              <p className="text-4xl font-inter font-bold">
                {project.duration}
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
              <h2 className="text-3xl font-inter font-bold">Bakgrund</h2>
              <div className="space-y-4 text-gray-300">
                {project.background.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Our Role */}
            <div className="space-y-6">
              <h2 className="text-3xl font-inter font-bold">Vår roll</h2>
              <div className="space-y-4 text-gray-300">
                {project.role.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="space-y-6">
              <h2 className="text-3xl font-inter font-bold">Resultat</h2>
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

      {/* Other Projects */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-inter font-bold mb-2">
              Other Projects
            </h2>
            <p className="text-xl text-gray-300">
              Se fler exempel av vårt arbete
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link
                href={`/uppdrag/${relatedProject.slug}`}
                key={relatedProject.slug}
              >
                <div className="group relative overflow-hidden rounded-3xl hover:scale-[1.02] transition-all duration-500">
                  {/* Large Project Image */}
                  <div className="relative h-[60vh] overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.shortTitle}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Category and Title Overlay - Bottom with glass morphism */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-black/80 backdrop-blur-sm rounded-b-3xl">
                      <div className="space-y-2">
                        <span className="text-base font-bold text-white uppercase tracking-wider">
                          {relatedProject.category}
                        </span>
                        <h3 className="text-2xl font-bold text-white">
                          {relatedProject.shortTitle}
                        </h3>
                        <div className="w-16 h-1.5 bg-white/30 rounded-full group-hover:w-24 group-hover:bg-white/50 transition-all duration-300"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* View All Projects Card */}
            <Link href="/uppdrag">
              <div className="group relative overflow-hidden rounded-3xl hover:scale-[1.02] transition-all duration-500">
                <div className="relative h-[60vh] bg-white/5 flex items-center justify-center">
                  <div className="text-center space-y-4">
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
                    <h3 className="text-2xl font-bold text-white">
                      Se alla uppdrag
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
