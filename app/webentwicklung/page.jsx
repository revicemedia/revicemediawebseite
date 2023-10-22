import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import SubPageContent from "@/components/SubPageContent/SubPageContent";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

const content = {
  headline: "Wir erstellen einzigartige Webseiten",
  subHeadline: "Webentwicklung",
  p1: "Webentwicklung ist ein großer Begriff. Wir kümmern uns um sämtliche Webseiten von der kleinen Info-Seite für ein Produkt, bis hin zur Multi-Page Webseite mit diversen Unterseiten und Verzweigungen.",
  p2: "Nach einem ersten Kennenlernen setzen Sie zusammen mit unseren Kundenbetreuern den Grundstein für Ihre neue Webseite und werden hierbei bei jedem Schritt betreut und jederzeit individuell passend beraten. Webseiten sollten von Anfang an gut durchdacht und auf die spätere Zielgruppe abgestimmt werden.",
  p3: "Wir nutzen keine veralteten Technologien, sondern setzen auf modernste Technologien wie Next.js und Cloud Hosting. So haben Sie auch langfristig mehr Möglichkeiten, bestehende Komponenten zu nutzen, zu adaptieren oder weiterzuentwickeln. Des weiteren setzen wir auf sogenannte Micro-Frontends, welche zusammen eine stets funktionierende und stimmige Webseite abbilden.",
  p4: "Bei Fragen zu diesen Themen, stehen Ihnen unsere Kundenbetreuer jederzeit per Mail zur Verfügung.",
};

export default function Webentwicklung() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Webentwicklung" text="" />
      <SubPageContent data={content} />
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
