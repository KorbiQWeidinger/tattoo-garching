import { Layout } from '@/components/Layout';
import { BASE_PATH } from '@/constants/path';
import { useState } from 'react';

interface GallerySectionProps {
  title: string;
  images: string[];
  onImageClick: (src: string) => void;
}

function GallerySection({ title, images, onImageClick }: GallerySectionProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">{title}</h2>
      <div className="w-16 h-px bg-purple-500 mb-8" />
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => onImageClick(src)}
            className="aspect-square overflow-hidden rounded-lg bg-zinc-200 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <img
              src={src}
              alt={`${title} ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

interface LightboxProps {
  src: string;
  onClose: () => void;
}

function Lightbox({ src, onClose }: LightboxProps) {
  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-purple-400 transition-colors"
        aria-label="Schließen"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <img
        src={src}
        alt="Vergrößerte Ansicht"
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

// Image arrays
const tattooImages = Array.from({ length: 8 }, (_, i) => 
  `${BASE_PATH}/galerie/tattoos/tattoo-${i + 1}.webp`
);

const coverUpImages = Array.from({ length: 4 }, (_, i) => 
  `${BASE_PATH}/galerie/cover-up/cover-${i + 1}.webp`
);

const studioImages = Array.from({ length: 8 }, (_, i) => 
  `${BASE_PATH}/galerie/studio/studio-${i + 1}.png`
);

export function Galerie() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
            Galerie
          </h1>
          <div className="w-24 h-px bg-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Eine Auswahl meiner Arbeiten. Klicke auf ein Bild für eine größere Ansicht.
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <GallerySection 
          title="Tattoos" 
          images={tattooImages} 
          onImageClick={setLightboxImage}
        />
        
        <GallerySection 
          title="Cover Up" 
          images={coverUpImages} 
          onImageClick={setLightboxImage}
        />
        
        <GallerySection 
          title="Studio" 
          images={studioImages} 
          onImageClick={setLightboxImage}
        />
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <Lightbox 
          src={lightboxImage} 
          onClose={() => setLightboxImage(null)} 
        />
      )}
    </Layout>
  );
}
