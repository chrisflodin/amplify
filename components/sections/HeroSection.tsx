"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  projects: Project[];
}

export default function HeroSection({ projects }: HeroSectionProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Map projects to cards format
  const cards = projects.map((project) => ({
    company: project.shortTitle,
    title: project.category,
    slug: project.slug,
    image: project.image,
  }));

  // Track if all images are loaded
  const allImagesLoaded = loadedImages.size === cards.length;
  const isCarouselReady = api && allImagesLoaded;

  // Handle individual image load
  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages((prev) => new Set([...prev, imageSrc]));
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-scroll functionality - pause when hovered
  useEffect(() => {
    if (!api || isHovered || !allImagesLoaded) {
      return;
    }

    const autoScroll = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(autoScroll);
  }, [api, isHovered, allImagesLoaded]);

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
              <Button
                size="lg"
                className="bg-white text-brand-black hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                onClick={() => {
                  const element = document.querySelector("#kontakt");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Kontakta oss
              </Button>
            </div>
          </div>

          {/* Right Column - Vertical Carousel */}
          <div
            className="relative h-[400px] w-full flex items-center mt-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Carousel Container */}
            <div className="flex-1 h-full relative">
              {/* Loading placeholder */}
              {!isCarouselReady && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Card className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-white h-60 w-full max-w-md animate-pulse">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-4 bg-white/20 rounded w-32"></div>
                        <div className="w-10 h-10 bg-white/10 rounded-3xl"></div>
                      </div>
                      <div className="h-8 bg-white/20 rounded mb-3 w-48"></div>
                      <div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
                    </CardContent>
                  </Card>
                </div>
              )}

              <Carousel
                setApi={setApi}
                orientation="vertical"
                opts={{
                  align: "center",
                  loop: true,
                  skipSnaps: false,
                  dragFree: false,
                }}
                className={`w-full h-full transition-opacity duration-300 ${
                  isCarouselReady ? "opacity-100" : "opacity-0"
                }`}
              >
                <CarouselContent className="h-[400px] -mt-2">
                  {cards.map((card, index) => (
                    <CarouselItem key={index} className="pt-2 basis-1/2">
                      <div className="p-1">
                        <Link href={`/uppdrag/${card.slug}`}>
                          <Card className="group relative overflow-hidden rounded-3xl border border-white/10 text-white hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl h-60 cursor-pointer">
                            {/* Background Image */}
                            <div className="absolute inset-0">
                              <Image
                                src={card.image}
                                alt={card.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                onLoad={() => handleImageLoad(card.image)}
                                priority={index < 2} // Prioritize first two images
                              />
                            </div>

                            {/* Glass morphism overlay */}

                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <CardContent className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-black/80 backdrop-blur-sm rounded-b-xl">
                              <div className="flex items-center justify-between">
                                <span className="text-base font-bold text-white">
                                  {card.title}
                                </span>
                              </div>
                              <h3 className="text-2xl font-bold mb-3 text-white">
                                {card.company}
                              </h3>
                              <div className="w-16 h-1.5 bg-white/30 rounded-full group-hover:w-24 group-hover:bg-white/50 transition-all duration-300"></div>
                            </CardContent>
                          </Card>
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Custom Navigation Buttons */}
                <CarouselPrevious className="absolute -top-12 left-1/2 -translate-x-1/2 rotate-90 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
                <CarouselNext className="absolute -bottom-12 left-1/2 -translate-x-1/2 rotate-90 bg-white/10 border-white/20 hover:bg-white/20 text-white" />
              </Carousel>
            </div>

            {/* Navigation dots - Outside carousel */}
            {isCarouselReady && (
              <div className="flex flex-col items-center space-y-3 ml-6">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current - 1
                        ? "bg-white"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
