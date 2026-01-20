import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BASE_PATH } from '@/constants/path';
import { Link } from 'react-router-dom';

export function Main() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section 
        className="relative min-h-screen flex items-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${BASE_PATH}/bg-image-one.png)`,
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Decorative tattoo image */}
            <div className="hidden lg:flex justify-center lg:justify-start">
              <img 
                src={`${BASE_PATH}/tattoo-one.png`}
                alt="Decorative tattoo art"
                className="w-full max-w-md xl:max-w-lg h-auto opacity-90"
              />
            </div>
            
            {/* Text content */}
            <div className="text-white space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight">
                Willkommen in meiner Tattoo Lounge.
              </h1>
              
              <div className="w-24 h-px bg-purple-500" />
              
              <div className="space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed">
                <p>
                  <strong className="text-white">Tattoo Lounge by Petra -</strong> Ihr Tattoo Studio in Garching bei München. 
                  Hier wird nach strengsten Hygienevorschriften und mit zertifizierten Farben gearbeitet.
                </p>
                
                <p>
                  Wenn ihr eine Idee habt, aber nicht wisst wie ihr diese umsetzen sollt, 
                  bin ich gerne bereit, einen Entwurf für euch zu zeichnen. Freundliche und 
                  ausführliche Beratung ist selbstverständlich.
                </p>
                
                <p>
                  Ich freue mich auf Euren Besuch!
                </p>
              </div>
              
              <Link 
                to="/kontakt"
                className="inline-block mt-4 px-12 py-4 bg-purple-700 hover:bg-purple-600 text-white font-medium text-lg rounded transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile decorative image (shows below content on small screens) */}
        <div className="lg:hidden absolute bottom-0 left-0 w-64 opacity-30 pointer-events-none">
          <img 
            src={`${BASE_PATH}/tattoo-one.png`}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
