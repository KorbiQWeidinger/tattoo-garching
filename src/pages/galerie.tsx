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
          
          <a
            href="https://www.instagram.com/tattooloungepetra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Mehr auf Instagram
          </a>
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
