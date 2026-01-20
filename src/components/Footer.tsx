import { BASE_PATH } from "@/constants/path";
import { Link } from "react-router-dom";

const navItems = [
  { label: 'Tattoo Lounge', to: '/' },
  { label: 'Galerie', to: '/galerie' },
  { label: 'Fragen?', to: '/fragen' },
  { label: 'Petra', to: '/petra' },
  { label: 'Kontakt', to: '/kontakt' },
];

export function Footer() {
  return (
    <footer className="bg-[#EBD8B8] border-t border-[#d4c4a8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <img 
              src={`${BASE_PATH}/logo.png`} 
              alt="Tattoo Lounge by Petra" 
              className="h-16 w-auto"
            />
            <p className="text-zinc-600 text-sm leading-relaxed">
              Ihr Tattoo Studio in Garching bei München. Hier wird nach strengsten 
              Hygienevorschriften und mit zertifizierten Farben gearbeitet.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-purple-700 uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://maps.google.com/?q=Rathausplatz+13,+85748+Garching+bei+München" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  <svg className="w-5 h-5 mt-0.5 text-zinc-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Rathausplatz 13<br />85748 Garching bei München</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:petra@tattoo-garching.de"
                  className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  <svg className="w-5 h-5 text-zinc-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  petra@tattoo-garching.de
                </a>
              </li>
              <li>
                <a 
                  href="tel:+498937961304"
                  className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 transition-colors group"
                >
                  <svg className="w-5 h-5 text-zinc-500 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +49 89 37961304
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-purple-700 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link 
                    to={item.to}
                    className="text-zinc-600 hover:text-zinc-900 hover:pl-1 transition-all"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#d4c4a8] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Tattoo Garching München. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#datenschutz" className="text-zinc-500 hover:text-purple-700 transition-colors">
              Datenschutz
            </a>
            <a href="#impressum" className="text-zinc-500 hover:text-purple-700 transition-colors">
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
