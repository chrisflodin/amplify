import { ContactSection } from "@/components/sections";
import { getServiceDetailsBySlug } from "@/lib/services";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const serviceData = getServiceDetailsBySlug(slug);

  if (!serviceData) {
    notFound();
  }

  const { service, sections } = serviceData;

  return (
    <main className="bg-brand-black text-white">
      {/* Service Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-gray-400 mb-8">
            <span>Hem</span>
            <span className="mx-2">/</span>
            <span>Tjänster</span>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          {/* Service Title */}
          <div className="mb-12">
            <h1 className="text-5xl lg:text-7xl font-inter font-bold text-white mb-6">
              {service.title}
            </h1>
            <div className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              <p className="mb-8">{service.shortDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Från hemsidor till REST-API
                  </h3>
                  <p className="text-gray-300">{service.detailedDescription}</p>
                </div>
                <div>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-400 mr-3">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service Image Placeholder */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-800 h-96">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {service.name.charAt(0)}
                  </span>
                </div>
                <p className="text-gray-400">Service illustration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Sections */}
      {sections.map((section, index) => (
        <section key={index} className="py-16 bg-orange-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-inter font-bold text-white mb-12">
                {section.title}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <p className="text-lg text-white leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-6">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-white mr-3">✓</span>
                        <div>
                          <h3 className="text-white font-semibold mb-1">
                            {feature.title}
                          </h3>
                          {feature.description && (
                            <p className="text-white/90 text-sm">
                              {feature.description}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}

// Generate static paths for all services
export async function generateStaticParams() {
  const services = await import("@/lib/services").then((mod) =>
    mod.getAllServices()
  );

  return services.map((service) => ({
    slug: service.slug,
  }));
}
