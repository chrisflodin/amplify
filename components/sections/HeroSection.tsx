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
            <div className="grid grid-cols-2 gap-6">
              {/* App Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">
                      Stockholm Plastikkirurgi
                    </span>
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Marknadsföring</h3>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Hartwall</span>
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">App</h3>
                </div>
              </div>

              <div className="space-y-6 mt-8">
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">CRDBAG</span>
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">App</h3>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">SE ALLA PROJEKT</span>
                    <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">App</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
