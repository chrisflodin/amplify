import { Card, CardContent } from "@/components/ui/card";

export default function HeroCarouselSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-full flex flex-col space-y-2 justify-center">
        {/* Two visible skeleton cards to match the carousel structure */}
        {[...Array(2)].map((_, index) => (
          <div key={index} className="p-1">
            <Card className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 text-white h-60 w-full animate-pulse">
              {/* Background skeleton */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/2"></div>

              {/* Content skeleton at bottom */}
              <CardContent className="absolute bottom-0 left-0 right-0 z-10 p-4 bg-black/40 backdrop-blur-sm rounded-b-xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-4 bg-white/20 rounded w-24"></div>
                </div>
                <div className="h-6 bg-white/20 rounded mb-3 w-32"></div>
                <div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Navigation buttons skeleton */}
    </div>
  );
}
