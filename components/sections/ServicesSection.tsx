import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section id="om-oss" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-inter font-bold text-brand-black mb-6">
            Upptäck hur vi hjälper våra
            <br />
            kunder att nå sina mål
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hemsidor ska inte glömmas bort. Vi bygger hemsidor som syns,
            konverterar och stärker varumärket – från design till SEO.
          </p>
        </div>

        <div className="mb-12 text-center">
          <Button className="bg-brand-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-semibold">
            Se alla uppdrag
          </Button>
        </div>

        <div className="relative rounded-3xl overflow-hidden bg-white shadow-2xl">
          <div className="aspect-[16/9] relative">
            <Image
              src="/images/hartwall.png"
              alt="Modern retail experience"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Optional overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
