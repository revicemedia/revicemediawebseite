import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import SubPageContent from "@/components/SubPageContent/SubPageContent";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

const content = {
  headline: "Wir erstellen Ihren erfolgreichen Onlineshop",
  subHeadline: "Shopsysteme",
  p1: "Onlineshops sollten erstrangig das Ziel haben, viele Kunden zu erreichen und möglichst viele Verkäufe zu verzeichnen. Hierfür sollte ein Shop Kriterien wie Nutzerfreundlichkeit, Übersichtlichkeit und die Steigerung des Kaufverlangens bei potenziellen Kunden erfüllen.",
  p2: "Um ein optimales Ergebnis erzielen zu können, starten wir mit Ihnen auf einem weißen Blatt Papier, erarbeiten eine Menüführung, Detailseiten, weitere Layouts und machen uns dabei bereits Gedanken über die technische Umsetzung.",
  p3: "Egal ob selbst entwickeltes Shopify-Template, individuelle und komplexe Eigenentwicklung oder Baukasten bei Ihrem aktuellen Anbieter. Wir gehen mit Ihnen sämtliche Optionen im Detail durch und beraten Sie passend für Ihre Bedürfnisse. Außerdem legen wir sehr viel Wert auf Skalierbarkeit. So wächst Ihre Anwendung passend zu Ihren Ansprüchen.",
  p4: "Sprechen Sie mit Ihrem persönlichen Kundenbetreuer noch heute über Ihre Ziele, Ihre Wünsche und Ansprüche, damit wir Ihnen diese erfüllen können.",
};

export default function Webentwicklung() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Shopsysteme" text="" />
      <SubPageContent data={content} />
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
