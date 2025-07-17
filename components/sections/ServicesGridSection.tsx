import { getAllServices } from "@/lib/services";
import Link from "next/link";

export default function ServicesGridSection() {
  const services = getAllServices();

  return (
    <section className="py-20 bg-brand-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-inter font-bold text-white mb-6">
            Våra tjänster
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/tjanster/${service.slug}`}
              className="group block"
            >
              <div className="bg-transparent border border-white/20 rounded-lg p-8 h-full transition-all duration-300 hover:border-white/40 hover:bg-white/5">
                <div className="text-center">
                  <h3 className="text-xl font-inter font-semibold text-white mb-2">
                    {service.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
