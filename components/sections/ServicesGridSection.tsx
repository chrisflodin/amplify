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
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Vi erbjuder omfattande digitala tjänster som hjälper ditt företag
            att växa och lyckas online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/tjanster/${service.slug}`}
              className="group block"
            >
              <div className="bg-transparent border border-white/10 rounded-2xl p-6 h-full transition-all duration-500 hover:border-white/30 hover:bg-white/5 hover:scale-[1.02]">
                {/* Service Title */}
                <h3 className="text-xl font-inter font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                  {service.name}
                </h3>

                {/* CTA */}
                <div className="flex items-center text-white font-inter font-semibold group-hover:text-gray-200 transition-colors text-sm">
                  <span className="mr-2">Läs mer</span>
                  <svg
                    className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
