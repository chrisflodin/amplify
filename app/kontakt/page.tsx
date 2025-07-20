import ContactComponent from "@/components/ContactComponent";

// Validation schema for the contact form

export default function ContactPage() {
  return (
    <main className="bg-brand-black">
      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-inter font-bold mb-6">
              Kontakta oss
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
              Redo att ta nästa steg? Vi hjälper dig att förverkliga dina
              digitala mål. Boka ett möte eller skicka oss ett meddelande så
              återkommer vi inom 24 timmar.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <div className="py-10">
        <ContactComponent />
      </div>
    </main>
  );
}
