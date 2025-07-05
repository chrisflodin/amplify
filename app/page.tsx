"use client";

import {
  ClientShowcaseSection,
  ContactSection,
  HeroSection,
  KPIMonitoringSection,
  NewsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ClientShowcaseSection />
      <ServicesSection />
      <KPIMonitoringSection />
      <TestimonialsSection />
      <NewsSection />
      <ContactSection />
    </main>
  );
}
