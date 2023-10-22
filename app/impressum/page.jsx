import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

export default function Impressum() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Impressum" text="" />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="mt-16 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-bold">Angaben gemäß §5 TMG</h2>
                <p className="mt-8">
                  Revice Media GbR
                  <br />
                  Gartenstraße 7
                  <br />
                  56412 Ruppach-Goldhausen
                  <br />
                  <br />
                  Vertreten durch: Luca Torres Neuer & Fabian Hanso
                  <br />
                  <br />
                  <a href="tel: 016092403158">
                    Telefon:{" "}
                    <span className="text-secondary-dalu">0160 / 92403158</span>
                  </a>
                  <br />
                  <a href="mailto:hey@dalu-services.com">
                    E-Mail:{" "}
                    <span className="text-secondary-dalu">
                      hey@revice-media.com
                    </span>
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-bold">Datenerhebung</h2>
                <p className="mt-8">
                  Wir erheben keine personenbezogenen Daten. Der Server
                  speichert standardgemäß Daten wie IP-Adresse, Land und Dauer
                  des Besuches. Diese Daten werden durch uns nicht erhoben,
                  ausgelesen oder verarbeitet. Sie dienen lediglich der
                  Sicherheit und werden selbstverständlich nicht verbreitet.
                </p>
              </div>
              <div>
                <h2 className="font-bold">Hafung für Inhalte und Links</h2>
                <p className="mt-8">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
                  Nutzung von Informationen nach den allgemeinen Gesetzen
                  bleiben hiervon unberührt. Eine diesbezügliche Haftung ist
                  jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
                  Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen. <br />
                  <br />
                  Revice Media übernimmt keinerlei Haftung für Links oder
                  Inhalte von anderen Quellen. Links werden vor der
                  Veröffentlichung auf dieser Webseite ordnungsgemäß geprüft.
                  Eventuelle Änderungen, sind selbstverständlich möglich. Aus
                  diesem Grund ist eine Haftung durch Revice Media nicht
                  möglich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
