"use client";

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
import HeroCarouselSkeleton from "./HeroCarouselSkeleton";

interface HeroCarouselProps {
  projects: Project[];
}

export default function HeroCarousel({ projects }: HeroCarouselProps) {
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
    <div
      className={"relative h-[500px] w-full flex items-center mt-10"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="flex-1 h-full relative">
        <Carousel
          setApi={setApi}
          orientation="vertical"
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            dragFree: false,
          }}
          className={`w-full h-full ${
            isCarouselReady
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <div>
            {/* Loading placeholder */}
            {!isCarouselReady && <HeroCarouselSkeleton />}
            {/* Top / bottom fade to black */}
            {isCarouselReady && (
              <div className="absolute inset-0 flex flex-col justify-between h-full">
                <div className="bg-gradient-to-b via-brand-black/80 from-brand-black to-transparent z-20 h-[15vh]"></div>
                <div className="bg-gradient-to-b via-brand-black/80 from-brand-black to-transparent z-20 h-[15vh] rotate-180"></div>
              </div>
            )}
            <CarouselContent className="h-[500px] -mt-2">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="pt-2 basis-1/2">
                  <div className="p-1">
                    <Link href={`/uppdrag/${card.slug}`}>
                      <Card
                        className={`group relative overflow-hidden rounded-3xl border border-white/10 text-white hover:scale-[1.01] transition-all duration-500 hover:shadow-2xl cursor-pointer ${
                          isCarouselReady ? "h-[30vh]" : "h-[10vh]"
                        }`}
                      >
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
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <CardContent className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-black/80 backdrop-blur-sm rounded-b-xl">
                          <div className="flex items-center justify-between">
                            <span className="text-base font-bold text-white">
                              {card.title}
                            </span>
                          </div>
                          <span className="text-2xl font-bold mb-3 text-white">
                            {card.company}
                          </span>
                          <div className="w-16 h-1.5 bg-white/30 rounded-full group-hover:w-24 group-hover:bg-white/50 transition-all duration-300"></div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>

          {/* Custom Navigation Buttons */}
          <CarouselPrevious className="absolute bottom-6 right-[70px] bg-brand-black border-white/20 hover:bg-white/20 text-white z-30" />
          <CarouselNext className="absolute bottom-6 right-[10px] bg-brand-black border-white/20 hover:bg-white/20 text-white z-30" />
        </Carousel>
      </div>

      {/* Navigation dots - Outside carousel */}
      {isCarouselReady && (
        <div className="flex flex-col items-center space-y-3 ml-6 animate-in fade-in-0 slide-in-from-right-2 duration-700">
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
  );
}
