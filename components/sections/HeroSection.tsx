import type { Project } from "@/types/project";
import { Suspense } from "react";
import ContactButton from "./ContactButton";
import HeroCarousel from "./HeroCarousel";
import HeroCarouselSkeleton from "./HeroCarouselSkeleton";

interface HeroSectionProps {
  projects: Project[];
}

export default function HeroSection({ projects }: HeroSectionProps) {
  return (
    <section className="bg-brand-black text-white min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="hero-title text-white">
                Vi bygger din digitala framgång
              </h1>
              <p className="hero-subtitle text-gray-300">
                En digitalbyrå som har hjälpt några av Sveriges mest
                framgångsrika entreprenörer med deras hemsidor och
                marknadsföring. <br />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ContactButton />
            </div>
          </div>

          {/* Right Column - Carousel with Suspense for partial pre-rendering */}
          <Suspense fallback={<HeroCarouselSkeleton />}>
            <HeroCarousel projects={projects} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
