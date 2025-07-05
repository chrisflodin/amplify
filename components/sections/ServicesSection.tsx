import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  return (
    <section id="om-oss" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="section-title">
              Upptäck hur vi hjälper våra kunder att nå sina mål
            </h2>
            <p className="paragraph-body text-gray-600">
              Digitala gränssnitt behöver inte vara fula, komplicerade eller
              krascha. Vi designar och utvecklar projekt med slutanvändaren i
              åtanke.
            </p>
            <Button className="bg-brand-black text-white hover:bg-gray-800">
              Se alla uppdrag
            </Button>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <div className="aspect-video bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Hero Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
