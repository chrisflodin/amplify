import { Card, CardContent } from "@/components/ui/card";

export default function HeroCarouselSkeleton() {
  return (
    <div className="relative h-[600px] w-full flex items-center mt-10">
      {/* Carousel Container */}
      <div className="flex-1 h-full relative">
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
      </div>

      {/* Navigation dots skeleton */}
      <div className="flex flex-col items-center space-y-3 ml-6">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-white/40 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}
