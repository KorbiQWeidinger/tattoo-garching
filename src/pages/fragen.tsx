import { Layout } from '@/components/Layout';
import { useState } from 'react';

interface FAQSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function FAQSection({ title, children, defaultOpen = false }: FAQSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-zinc-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <svg 
          className={`w-6 h-6 text-purple-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] pb-6' : 'max-h-0'}`}>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Fragen() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
            Häufige Fragen
          </h1>
          <div className="w-24 h-px bg-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hier findest du Antworten auf die wichtigsten Fragen rund um deinen Tattoo-Termin.
          </p>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="bg-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-white mb-8">Schnelle Antworten</h2>
          <div className="w-16 h-px bg-purple-500 mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-400 mb-3">Tut es weh?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Jeder Mensch hat ein individuelles Schmerzempfinden, deshalb kann man diese Frage 
                nicht pauschal beantworten.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-400 mb-3">Wie viel kostet ein Tattoo?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Der Mindestpreis beträgt 100,-€. Der endgültige Preis richtet sich nach Aufwand, 
                Größe und Körperstelle.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-400 mb-3">Mindestalter?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Du musst das 18. Lebensjahr erreicht haben. Unter 18 (mind. 17 Jahre) nur mit 
                Einverständniserklärung beider Elternteile.
              </p>
            </div>
            
            <div className="bg-zinc-900 rounded-lg p-6">
              <h3 className="text-lg font-medium text-purple-400 mb-3">Nachsorge?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Du bekommst beim Termin eine ausführliche Pflegeanleitung mit allen wichtigen 
                Informationen zur Nachbehandlung.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed FAQ Sections */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-light text-white mb-8">Ausführliche Informationen</h2>
          <div className="w-16 h-px bg-purple-500 mb-8" />
          
          <div className="divide-y divide-zinc-700">
            <FAQSection title="Allgemeines" defaultOpen>
              <p>
                Für eine Tätowierung musst du das 18. Lebensjahr erreicht haben. Bei Personen unter 18 
                (mindestens 17 Jahre) ist eine Einverständniserklärung beider Elternteile, sowie eine Kopie 
                des Personalausweises, des Jugendlichen und der Eltern nötig. Ein Erziehungsberechtigter muss 
                außerdem beim Beratungsgespräch, sowie beim Tattootermin anwesend sein.
              </p>
              <p className="mt-4">
                Mit dem Einverständnis des Kunden werden Fotos der Tätowierung im Internet oder im Studio 
                veröffentlicht. Die Rechte bleiben dem Tattoostudio vorbehalten.
              </p>
            </FAQSection>

            <FAQSection title="Vor dem Tattoo-Termin">
              <p className="font-medium text-white mb-4">Bitte beachte folgende Punkte:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Keine Drogen oder Alkohol 24 Std. vor dem Tattoo-Termin</li>
                <li>Keine Blutverdünner einnehmen (z.B. ASS, Aspirin...)</li>
                <li>Du solltest gut gegessen haben, damit dein Kreislauf stabil bleibt</li>
                <li>Du solltest gut ausgeschlafen, fit und gesund sein</li>
                <li>Am besten vor dem Termin auf Kaffee oder Red Bull verzichten</li>
                <li>Unter 18 Jahren wird nicht tätowiert</li>
              </ul>
              <p className="mt-4">
                <strong className="text-white">Medikamente:</strong> Bekommst du zur Zeit des Tattoo-Termins 
                Antibiotika, Cortison oder bist gerade frisch geimpft worden, oder schwanger, kann der Termin 
                nicht stattfinden.
              </p>
              <p className="mt-4">
                Wenn du dich in regelmäßiger ärztlicher Behandlung befindest, solltest du mich darüber informieren.
              </p>
            </FAQSection>

            <FAQSection title="Rechte und Pflichten des Kunden">
              <p className="mb-4">
                Der Kunde trägt Sorge dafür, dass er zu dem vereinbarten Termin in einem Zustand erscheint, 
                der den Eingriff für den Artist vertretbar macht. Dazu gehört insbesondere:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Keine Einnahme von Alkohol- oder Betäubungsmittel mind. 24 Stunden vor dem Termin</li>
                <li>Keine Einnahme von gerinnungshemmenden oder sonstigen Medikamenten</li>
                <li>Keine Applikation von Oberflächenanästhetika, soweit nicht mit dem Artist abgesprochen</li>
                <li>Keine Erkrankungen, welche die Durchführung der Arbeit ausschließen (insbes. Infektionserkrankungen)</li>
                <li>Keine bekannten Allergien gegen Inhaltsstoffe von Tätowierfarbe</li>
                <li>Hygienisch zumutbarer Zustand</li>
                <li>Nicht schwanger bzw. stillend zum Zeitpunkt des Termins</li>
              </ul>
              <p className="mt-4">
                Zu Beginn der Tätowierung wird durch den Artist eine Schablone (Stencil) auf die Haut appliziert. 
                Der Kunde nimmt sowohl die Positionierung, als auch den Inhalt der Schablone genauestens in 
                Augenschein und prüft evtl. Fehler (insb. bei Schriften und Zahlen). Mit dem Start der Arbeit 
                willigt der Kunde in Positionierung und Inhalt der Arbeit ein.
              </p>
            </FAQSection>

            <FAQSection title="Terminvereinbarung & Preise">
              <p>
                Ein Vertrag kommt zustande, wenn der Kunde den Entwurf für eine Tätowierung in Auftrag gibt, 
                oder einen Termin vereinbart. Die Tätowierung wird auf der Haut immer anders aussehen als die 
                Vorlage, es kann möglich sein, dass das Motiv anatomisch angepasst werden muss.
              </p>
              <div className="bg-zinc-800 rounded-lg p-4 my-4">
                <p className="text-white font-medium mb-2">Preisgestaltung:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Mindestpreis für eine Tätowierung: <strong className="text-purple-400">100,-€</strong></li>
                  <li>Stundensatz bei großen Motiven: <strong className="text-purple-400">100,-€/Std.</strong></li>
                  <li>Stundensatz für Entwürfe: <strong className="text-purple-400">50,-€/Std.</strong></li>
                  <li>Anzahlung bei Terminvereinbarung: <strong className="text-purple-400">50,- bis 100,-€</strong> (bar)</li>
                </ul>
              </div>
              <p className="mt-4">
                Das Tattoo sollte 6-8 Wochen abheilen, erst dann kann man beurteilen ob ein Nachstechen nötig ist. 
                Der Termin zum Nachstechen sollte nicht später als 3 Monate nach dem Tattootermin sein, dann fallen 
                keine Kosten an.
              </p>
              <p className="mt-4">
                <strong className="text-white">Terminabsage:</strong> Bei einer Terminabsage später als 2 Werktage 
                vor dem Termin wird die Anzahlung nicht zurückerstattet, da der Entwurf bereits angefertigt ist.
              </p>
            </FAQSection>

            <FAQSection title="Pflege & Nachbehandlung">
              <p>
                Über die Pflege und Nachbehandlung wird der Kunde ausführlich aufgeklärt und bekommt wenn gewünscht 
                eine schriftliche Pflegeanleitung ausgehändigt.
              </p>
              <p className="mt-4">
                Für eine falsche Pflege, z.B. falsche Creme, falschen Sonnenschutz, Allergien oder sonstige 
                Unverträglichkeiten, Vernarbung, verlaufene Farbe, wird keine Haftung übernommen.
              </p>
              <p className="mt-4">
                Der Kunde wird aufgefordert sich an die überlassene Pflegeanleitung zu halten und im Falle eines 
                unerwarteten Heilungsverlaufs unmittelbar mit uns in Kontakt zu treten oder, bei erheblichen 
                Problemen, einen Dermatologen aufzusuchen.
              </p>
              <div className="bg-purple-900/30 border border-purple-500/30 rounded-lg p-4 mt-4">
                <p className="text-purple-300 text-sm">
                  <strong>Tipp:</strong> Bitte trage zum Termin alte und/oder dunkle Kleidung und Schuhe, 
                  um eventuelle Verschmutzungen durch Farbe oder Desinfektionsmittel zu vermeiden.
                </p>
              </div>
            </FAQSection>

            <FAQSection title="Gewährleistung & Haftung">
              <p>
                Für eventuelle Folgeschäden durch die Tätowierung übernehme ich keine Haftung. Das Betreten des 
                Studios erfolgt auf eigene Gefahr.
              </p>
              <p className="mt-4">
                Mit der unterzeichneten Einverständniserklärung erklärt sich der Kunde bereit, auf alle rechtlichen 
                Schritte gegen das Tattoostudio oder den Tätowierer zu verzichten. Für Komplikationen oder 
                Nichtgefallen übernehme ich keine Haftung.
              </p>
              <p className="mt-4">
                Das Studio bzw. der Artist hat gemäß §642 BGB das Recht, bei Nichterscheinen zu einem vereinbarten 
                Termin ohne rechtzeitige Absage, eine angemessene Entschädigung zu verlangen.
              </p>
            </FAQSection>

            <FAQSection title="Sonstiges">
              <p>
                Es gelten ergänzend die Vorschriften des Bürgerlichen Gesetzbuches in der jeweils gültigen Fassung 
                soweit diese nicht zu diesen Geschäftsbedingungen im Widerspruch stehen. Der Gerichtsstand ist Garching.
              </p>
              <p className="mt-4">
                Ist oder wird eine Bestimmung aus diesen AGB oder aus dem Vertrag zwischen dem Studio bzw. dem Artist 
                und dem Kunden unwirksam, so bleiben diese AGB sowie der Vertrag im Übrigen davon unberührt.
              </p>
              <p className="mt-4">
                Die Urheber- und Verwertungsrechte eines Tattoo-Entwurfes verbleiben immer beim Artist. Der Artist 
                gewährt dem Kunden ein unbeschränktes, unbefristetes Nutzungsrecht an der durchgeführten Arbeit.
              </p>
            </FAQSection>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-white mb-4">
            Noch Fragen?
          </h2>
          <p className="text-gray-400 mb-8">
            Kontaktiere mich gerne für ein persönliches Beratungsgespräch.
          </p>
          <a 
            href="tel:+498937961304"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Jetzt anrufen
          </a>
        </div>
      </div>
    </Layout>
  );
}
