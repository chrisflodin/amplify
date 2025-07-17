import { ContactSection } from "@/components/sections";
import { getAllServices } from "@/lib/services";
import Link from "next/link";

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <main className="bg-brand-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-7xl font-inter font-bold text-white mb-8">
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
      <section className="pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={service.id}
                href={`/tjanster/${service.slug}`}
                className="group block"
              >
                <div className="bg-transparent border border-white/10 rounded-2xl p-8 h-full transition-all duration-500 hover:border-white/30 hover:bg-white/5 hover:scale-[1.02]">
                  {/* Service Icon/Initial */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                      <span className="text-white text-xl font-inter font-bold">
                        {service.name.charAt(0)}
                      </span>
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-inter font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <ul className="space-y-3">
                      {service.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-white font-inter font-semibold group-hover:text-gray-200 transition-colors">
                    <span className="mr-2">Läs mer</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
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

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
