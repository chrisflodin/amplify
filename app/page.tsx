import {
  ContactSection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TestimonialsSection />
      {/* <ClientShowcaseSection /> */}
      <ServicesSection />
      {/* <KPIMonitoringSection /> */}
      {/* <ArticleSection /> */}
      <ContactSection />
    </main>
  );
}
