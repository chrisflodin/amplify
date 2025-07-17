import {
  ContactSection,
  HeroSection,
  ServicesGridSection,
  ServicesSection,
  TestimonialsSection,
} from "@/components/sections";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
  // Fetch projects on the server side
  const projects = getAllProjects();

  return (
    <main>
      <HeroSection projects={projects} />
      <ServicesGridSection />
      <TestimonialsSection />
      {/* <ClientShowcaseSection /> */}
      <ServicesSection />
      {/* <KPIMonitoringSection /> */}
      {/* <ArticleSection /> */}
      <ContactSection />
    </main>
  );
}
