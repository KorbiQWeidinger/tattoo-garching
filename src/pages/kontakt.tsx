import { Layout } from '@/components/Layout';

export function Kontakt() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-8">
          Kontakt
        </h1>
        <div className="w-24 h-px bg-purple-500 mb-12" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-2">Adresse</h3>
              <p className="text-gray-300">
                Rathausplatz 13<br />
                85748 Garching bei München
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-2">Telefon</h3>
              <a href="tel:+498937961304" className="text-gray-300 hover:text-white transition-colors">
                +49 89 37961304
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-2">E-Mail</h3>
              <a href="mailto:petra@tattoo-garching.de" className="text-gray-300 hover:text-white transition-colors">
                petra@tattoo-garching.de
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-2">Öffnungszeiten</h3>
              <p className="text-gray-300">
                Termine nur nach Vereinbarung.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Anfragen werden jederzeit per E-Mail beantwortet.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-purple-400 mb-4">Anfahrt</h3>
            <div className="aspect-video bg-zinc-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.8!2d11.65!3d48.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRathausplatz+13%2C+85748+Garching!5e0!3m2!1sde!2sde!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - Tattoo Lounge Garching"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
