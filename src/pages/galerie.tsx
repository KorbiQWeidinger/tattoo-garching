import { Layout } from '@/components/Layout';

export function Galerie() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-8">
          Galerie
        </h1>
        <div className="w-24 h-px bg-purple-500 mb-12" />
        
        <p className="text-gray-300 text-lg">
          Hier finden Sie bald eine Auswahl meiner Arbeiten.
        </p>
      </div>
    </Layout>
  );
}
