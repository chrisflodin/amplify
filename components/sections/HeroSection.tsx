"use client";

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-brand-black text-white min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="hero-title text-white">
                Vi bygger din digitala framgång
              </h1>
              <p className="hero-subtitle text-gray-300">
                Vi har hjälpt några av Sveriges mest framgångsrika entreprenörer
                att växla upp. Gör det du med.
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

          {/* Right Column - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* App Cards */}
              <div className="space-y-4">
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-white hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-white/80">
                        Stockholm Plastikkirurgi
                      </span>
                      <div className="w-10 h-10 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Marknadsföring
                    </h3>
                    <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-16 group-hover:bg-white/50 transition-all duration-300"></div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-white hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-white/80">
                        Hartwall
                      </span>
                      <div className="w-10 h-10 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      App
                    </h3>
                    <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-16 group-hover:bg-white/50 transition-all duration-300"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-white hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-white/80">
                        CRDBAG
                      </span>
                      <div className="w-10 h-10 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      App
                    </h3>
                    <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-16 group-hover:bg-white/50 transition-all duration-300"></div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 text-white hover:bg-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-sm font-medium text-white/80">
                        SE ALLA PROJEKT
                      </span>
                      <div className="w-10 h-10 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                        <div className="w-4 h-4 bg-white/60 rounded-sm"></div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Projekt
                    </h3>
                    <div className="w-12 h-1 bg-white/30 rounded-full group-hover:w-16 group-hover:bg-white/50 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
