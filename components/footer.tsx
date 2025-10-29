import { getAllProjects } from "@/lib/projects";
import Link from "next/link";

export default function Footer() {
  const projects = getAllProjects();
  return (
    <footer className="bg-brand-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-inter font-bold">amplify</h3>
            <p className="text-gray-400 text-sm">Growth. Made simple.</p>
            <p className="text-gray-400 text-sm">
              Sedan starten har vi skapat kreativa och värdeskapande digitala
              lösningar till företag som vill bygga och stärka sina varumärken.
            </p>
          </div>

          {/* Case */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Case</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/uppdrag/${project.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {project.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/uppdrag"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Uppdrag
              </Link>
              <Link
                href="/jobb"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Lediga jobb
              </Link>
              {/* <Link
                href="/artiklar"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Artiklar
              </Link> */}
              <Link
                href="/kontakt"
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© amplify 2025</p>
        </div>
      </div>
    </footer>
  );
}
