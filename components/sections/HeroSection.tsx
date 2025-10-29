import type { Project } from "@/types/project";
import Link from "next/link";
import { Button } from "../ui/button";
import HeroCarousel from "./HeroCarousel";

interface HeroSectionProps {
  projects: Project[];
}

export default function HeroSection({ projects }: HeroSectionProps) {
  return (
    <section className="bg-brand-black  text-white lg:min-h-screen flex lg:items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start md:gap-8 lg:gap-2">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <div className="space-y-4">
              <h1 className="hero-title text-white max-w-2xl">
                Vi skapar tillväxt som märks
              </h1>
              <p className="hero-subtitle text-gray-300">
                Vi hjälper företag att växa genom datadriven marknadsföring,
                smart teknik och kreativ strategi. Med en teknisk edge optimerar
                vi varje steg – från trafik till konvertering.
                <br />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={"/kontakt"}>
                <Button
                  size="lg"
                  className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                >
                  Kontakta oss
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Carousel with Suspense for partial pre-rendering */}
          <div className="hidden lg:block -mt-14">
            <HeroCarousel projects={projects} />
          </div>
        </div>
      </div>
    </section>
  );
}
