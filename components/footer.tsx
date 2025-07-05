import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-macklin font-bold">amplify</h3>
            <p className="text-gray-400 text-sm">Business success simplified</p>
            <p className="text-gray-400 text-sm">
              Sedan starten har vi skapat kreativa och värdeskapande digitala
              lösningar till företag som vill bygga och stärka sina varumärken.
            </p>
          </div>

          {/* Kunder */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Kunder</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  SkiStar
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Hästens Restore
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ica ToGo
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Barncancerfonden
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  ICA - Ordersystem
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Trifam
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  CIBoost
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Bokadirekt
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Jula
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Equestrian Stockholm
                </Link>
              </li>
            </ul>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-black text-sm">📱</span>
              </div>
              <span className="text-sm text-gray-400">
                +14 byggda appar på Sveriges topplista
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-black text-sm">🏢</span>
              </div>
              <span className="text-sm text-gray-400">
                Vi finns i Stockholm, Skövde och Kalmar
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm">G</span>
              </div>
              <span className="text-sm text-gray-400">Gasell</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="#uppdrag"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Uppdrag
              </Link>
              <Link
                href="#om-oss"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Om oss
              </Link>
              <Link
                href="#lediga-jobb"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Lediga jobb
              </Link>
              <Link
                href="#nyheter"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Nyheter
              </Link>
              <Link
                href="#kontakt"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </nav>

            {/* Social Media */}
            <div className="flex space-x-3 pt-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.624 5.367 11.99 11.988 11.99s11.987-5.366 11.987-11.99C23.971 5.367 18.641.001 12.017.001zM8.455 7.328c2.14 0 3.877 1.736 3.877 3.877 0 2.14-1.737 3.877-3.877 3.877s-3.877-1.737-3.877-3.877c0-2.141 1.737-3.877 3.877-3.877zm7.089 0c2.14 0 3.877 1.736 3.877 3.877 0 2.14-1.737 3.877-3.877 3.877s-3.877-1.737-3.877-3.877c0-2.141 1.737-3.877 3.877-3.877z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© amplify 2024</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Inställningar för cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
