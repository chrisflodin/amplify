export default function ClientShowcaseSection() {
  const clients = [
    "SkiStar",
    "Hästens Restore",
    "Ica ToGo",
    "Barncancerfonden",
    "ICA - Ordersystem",
    "Trifam",
    "CIBoost",
    "Bokadirekt",
    "Jula",
    "Equestrian Stockholm",
  ];

  return (
    <section id="uppdrag" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">
            Vi skapar digitala tjänster som förbättrar vardagen
          </h2>
        </div>

        {/* Featured Apps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - App Showcase */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8 text-center">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-600">
                  Ica ToGo
                </span>
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ICA</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">App</h3>
              <div className="text-6xl font-bold text-brand-black mb-4">
                +10
              </div>
              <p className="text-gray-600">
                miljoner försäljning i månaden per butik
              </p>
            </div>
          </div>

          {/* Right - App Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl"></div>
              <div>
                <h4 className="font-semibold">App Store</h4>
                <p className="text-sm text-gray-600">Google Play</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="border-t border-gray-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-center">
                <div className="text-sm font-medium text-gray-400">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
