import { Layout } from '@/components/Layout';
import { BASE_PATH } from '@/constants/path';

export function Petra() {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-24 sm:py-32 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-6">
            Über mich – Petra
          </h1>
          <div className="w-24 h-px bg-purple-500 mx-auto" />
        </div>
      </div>

      {/* Intro Section */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              Nach spezieller Ausbildung und mehrjähriger Berufserfahrung, nehme ich auch an verschiedenen 
              Workshops teil um mein Wissen zu erweitern. Desinfektion und Sterilisation ist mir sehr wichtig 
              und nachdem ich auch den Beruf der medizinischen Fachangestellten gelernt hab, bin ich bestens 
              geschult in Sachen Hygiene. Freundliche und ausführliche Beratung ist selbstverständlich.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mt-6">
              Wenn du eine Idee für dein Tattoo hast, aber diese nicht umsetzen kannst, bin ich gerne bereit, 
              einen Entwurf für dich zu zeichnen. Der Entwurf muss bei einem persönlichen Erscheinen besprochen 
              werden und wird nicht per e-mail o.ä. verschickt. Terminvereinbarungen können nicht per SMS, email, 
              facebook oder Whatsapp gemacht werden. Bitte dafür immer im Studio anrufen. Vielen Dank!
            </p>
          </div>
        </div>
      </div>

      {/* Parallax Image Section - fixed attachment only on desktop (mobile doesn't support it) */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-cover lg:bg-fixed"
          style={{
            backgroundImage: `url(${BASE_PATH}/bg-image-two.png)`,
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* My Journey Section */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
            Mein Weg zur Tattoo-Kunst
          </h2>
          <div className="w-16 h-px bg-purple-500 mb-8" />
          
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Ich bin gelernte medizinische Fachangestellte und Zeichnen gehörte schon immer in mein Leben.
              Nachdem ich 2008 ein Seminar zum Erlernen der Tattookunst besuchte, habe ich die Leidenschaft 
              fürs tätowieren entdeckt.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Ich hatte die Möglichkeit in zwei Tattoostudios in München und Dachau meine Kenntnisse zu erweitern 
              und eröffnete dann im Mai 2011 mein eigenes Studio in Garching. Hygiene ist in einem Tattoostudio 
              sehr wichtig und nach den vielen Hygieneseminaren, die ich als med. Fachangestellte schon besuchte, 
              bin ich bestens gerüstet.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Es werden auch ausschließlich zertifizierte Farben verwendet.
            </p>
          </div>
        </div>
      </div>

      {/* Hygiene Section */}
      <div className="bg-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
            Hygiene & Sicherheit
          </h2>
          <div className="w-16 h-px bg-purple-500 mb-8" />
          
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Der Arbeitsplatz wird selbstverständlich nach jedem Kunden sorgfältig gereinigt und desinfiziert. 
              Aufgrund der jetzigen Situation wird im Studio von jedem, Kunde – sowie Tätowierer eine FFP2 Maske 
              getragen und alle Flächen die vom Kunden kontaktiert werden sorgfältig desinfiziert.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Hygienetechnisch seid ihr schon mal gut aufgehoben. Ich versuche auch sonst alles mir mögliche 
              beizutragen, damit du dich bei mir wohlfühlst. Gerne gehe ich auf deine Wünsche ein, die wir am 
              besten bei einem persönlichen Beratungsgespräch besprechen.
            </p>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="bg-zinc-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-8">
            Beratung & Entwurf
          </h2>
          <div className="w-16 h-px bg-purple-500 mb-8" />
          
          <div className="prose prose-lg prose-invert max-w-none space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Wenn du schon eine Vorstellung von deinem Motiv hast, bring mir dazu gerne eine von Hand gezeichnete 
              Skizze (muss nicht schön sein, aber ich kann mir dann evtl noch besser vorstellen welche Idee ihr im 
              Kopf habt), Bilder auf dem Handy oder andere Vorlagen mit. Wenn du nichts davon hast, werde ich 
              versuchen die Bilder die du im Kopf hast, nach deiner Beschreibung in einer Zeichnung umzusetzen.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Zusammen können wir dann besprechen wie es am Ende aussehen soll, welche Körperstelle geeignet wäre, 
              welche Kosten ca auf dich zukommen, usw. Bei der Motivwahl solltest du dir sicher sein, wenn du einen 
              Entwurf bei mir in Auftrag gibst. Wenn der Entwurf schon in Arbeit, oder fertig ist und du dich 
              umentscheiden solltest und ein anderes Motiv willst, ist für einen erneuten Entwurf eine weitere 
              Anzahlung zu leisten.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Gerne bin ich bereit einen Entwurf individuell für dich, nach deinen Angaben zu zeichnen, wenn du dir 
              nach dem Beratungsgespräch sicher bist, dass du ein Tattoo von mir haben willst. Wenn du noch Bedenkzeit 
              brauchst ist das auch kein Problem. Ein Tattoo sollte gut durchdacht werden und nicht überstürzt 
              entschieden werden.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-zinc-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl sm:text-3xl font-light text-white italic">
            "Ich freue mich auf dich und deine Ideen"
          </p>
          <p className="text-purple-400 mt-4 text-lg">– Petra</p>
        </div>
      </div>
    </Layout>
  );
}
