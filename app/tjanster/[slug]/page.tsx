import { ContactSection } from "@/components/sections";
import { getServiceDetailsBySlug } from "@/lib/services";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const serviceData = getServiceDetailsBySlug(slug);

  if (!serviceData) {
    return {
      title: "Tjänst inte funnen - amplify",
      description: "Den begärda tjänsten kunde inte hittas.",
    };
  }

  const { service } = serviceData;
  const title = `${service.title} - amplify`;
  const description =
    service.subtitle ||
    service.description ||
    `Läs mer om vår ${service.name} tjänst hos amplify.`;

  return {
    title,
    description,
    keywords: [
      service.name,
      "digital utveckling",
      "webbdesign",
      "tjänster",
      "amplify",
    ].filter(Boolean),
    openGraph: {
      title,
      description,
      type: "website",
      images: service.heroImage
        ? [
            {
              url: service.heroImage,
              width: 1200,
              height: 630,
              alt: service.name,
            },
          ]
        : [],
      siteName: "amplify",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: service.heroImage ? [service.heroImage] : [],
    },
    alternates: {
      canonical: `https://weareamplify.se/tjanster/${slug}`,
    },
  };
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
            <Link href="/" className="hover:text-white transition-colors">
              Hem
            </Link>
            <span className="mx-2">/</span>
            <Link
              href="/tjanster"
              className="hover:text-white transition-colors"
            >
              Tjänster
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{service.name}</span>
          </nav>

          {/* Service Title and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-inter font-bold text-white mb-6">
                {service.title}
              </h1>
              <div className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {service.subtitle}
                    </h3>
                    <p className="text-gray-300">
                      {service.detailedDescription}
                    </p>
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

            {/* Right Column - Service Image */}
            <div className="relative rounded-3xl overflow-hidden ">
              <Image
                src={`/images/service-hero-images/${slug}.webp`}
                className="object-cover"
                alt={"webbyrå" + service.title}
                width={800}
                height={533}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Sections */}
      <section className="pt-20 bg-white">
        {sections.map((section, index) => (
          <div key={index} className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-inter font-bold text-brand-black mb-12">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <p className="text-lg text-brand-black leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <div>
                    <ul className="space-y-6">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-green-600 mr-3">✓</span>
                          <div>
                            <h3 className="text-brand-black font-semibold text-lg mb-1">
                              {feature.title}
                            </h3>
                            {feature.description && (
                              <p className="text-gray-600 text-lg">
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
          </div>
        ))}
      </section>

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
