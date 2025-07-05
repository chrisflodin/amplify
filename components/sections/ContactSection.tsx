import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="kontakt" className="py-20 bg-brand-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title text-white mb-4">Kontakta oss</h2>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Namn"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="E-post"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Telefonnummer"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              />
            </div>

            <div>
              <textarea
                placeholder="Skriv ditt meddelande här"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500"
              ></textarea>
            </div>

            <Button className="w-full bg-white text-brand-black hover:bg-gray-100 py-3">
              Skicka
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
