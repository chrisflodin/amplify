"use client";

import ContactComponent from "@/components/ContactComponent";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

export default function ContactSection({
  title = "Kontakta oss",
  subtitle = "Boka ett möte eller skicka oss ett meddelande så återkommer vi inom kort",
}: ContactSectionProps) {
  return (
    <section id="kontakt" className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-gray-300 max-w-md mx-auto">{subtitle}</p>
        </div>

        <ContactComponent />
      </div>
    </section>
  );
}
