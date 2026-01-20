import { Layout } from '@/components/Layout';

export function Fragen() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-light text-white mb-8">
          Häufige Fragen
        </h1>
        <div className="w-24 h-px bg-purple-500 mb-12" />
        
        <div className="space-y-8 text-gray-300">
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Wie läuft ein Termin ab?</h3>
            <p>Kontaktieren Sie mich für eine ausführliche Beratung. Wir besprechen Ihr Wunschmotiv und ich erstelle einen individuellen Entwurf für Sie.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Wie pflege ich mein neues Tattoo?</h3>
            <p>Nach dem Stechen erhalten Sie von mir detaillierte Pflegehinweise für eine optimale Heilung.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
