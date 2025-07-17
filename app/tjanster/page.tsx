import { ContactSection } from "@/components/sections";
import { getAllServices } from "@/lib/services";
import Link from "next/link";

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main className="bg-brand-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-inter font-bold text-white mb-6">
              Våra tjänster
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Vi erbjuder omfattande digitala tjänster som hjälper ditt företag
              att växa och lyckas online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/tjanster/${service.slug}`}
                className="group block"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 h-full transition-all duration-300 hover:border-orange-500 hover:bg-gray-800">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                      <span className="text-white text-xl font-bold">
                        {service.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-inter font-bold text-white mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-400 mr-3">✓</span>
                          <span className="text-gray-400 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-orange-500 font-semibold group-hover:text-orange-400 transition-colors">
                    Läs mer →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
