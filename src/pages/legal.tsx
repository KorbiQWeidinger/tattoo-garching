import { Layout } from '@/components/Layout';

export function Legal() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
            Datenschutz & Impressum
          </h1>
          <div className="w-24 h-px bg-purple-500 mx-auto" />
        </div>
      </div>

      {/* Impressum Section */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
            Impressum
          </h2>
          <div className="w-16 h-px bg-purple-500 mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-400 mb-4">Verantwortlich</h3>
              <address className="text-gray-300 not-italic leading-relaxed">
                Petra Hermann<br />
                Rathausplatz 13<br />
                85748 Garching bei München
              </address>
            </div>
            
            <div className="bg-zinc-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-400 mb-4">Kontakt</h3>
              <div className="text-gray-300 space-y-2">
                <p>
                  <a href="mailto:petra@tattoo-garching.de" className="hover:text-white transition-colors">
                    petra@tattoo-garching.de
                  </a>
                </p>
                <p>
                  <a href="tel:+498937961304" className="hover:text-white transition-colors">
                    +49 89 37961304
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-zinc-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-purple-400 mb-4">Rechtliche Angaben</h3>
            <div className="text-gray-300 space-y-2">
              <p>Amtsgericht Garching</p>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: 147/195/81154</p>
              <p>Gerichtsstand: Garching</p>
            </div>
          </div>
        </div>
      </div>

      {/* Datenschutz Section */}
      <div className="bg-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
            Datenschutzerklärung
          </h2>
          <div className="w-16 h-px bg-purple-500 mb-8" />
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium text-white mb-4">Haftung für Inhalte</h3>
              <p className="text-gray-300 leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                Tätigkeit hinweisen.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-4">Haftung für Links</h3>
              <p className="text-gray-300 leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche 
                Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Links umgehend entfernen.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-white mb-4">Urheberrecht</h3>
              <p className="text-gray-300 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der 
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung 
                des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den 
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen 
                entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte 
                umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
