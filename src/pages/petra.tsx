import { Layout } from '@/components/Layout';

export function Petra() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-8">
          Über Petra
        </h1>
        <div className="w-24 h-px bg-purple-500 mb-12" />
        
        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 text-lg leading-relaxed">
            Mit jahrelanger Erfahrung und Leidenschaft für die Tattoo-Kunst freue ich mich, 
            Sie in meiner Tattoo Lounge in Garching bei München begrüßen zu dürfen.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Mein Ziel ist es, Ihre Ideen und Wünsche in einzigartige Kunstwerke auf Ihrer Haut 
            zu verwandeln. Dabei lege ich größten Wert auf höchste Hygienestandards und 
            verwende ausschließlich zertifizierte Farben.
          </p>
        </div>
      </div>
    </Layout>
  );
}
