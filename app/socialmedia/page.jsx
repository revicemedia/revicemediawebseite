import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import SubPageContent from "@/components/SubPageContent/SubPageContent";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

const content = {
  headline: "Gemeinsam zum erfolgreichen Social Media Auftritt",
  subHeadline: "Social Media",
  p1: "Ein professioneller Social Media Auftritt ist für Unternehmen nicht wegzudenken und zählt zu den wichtigsten Werbekanälen dieses Jahrhunderts. Wir unterstützen Sie von einer einfachen Kampagne bis hin zur kompletten Betreuung Ihrer Kanäle auf Basis Ihrer Wünsche und Ansprüche.",
  p2: "Social Media Netzwerke wie Instagram, TikTok und LinkedIn haben einen großen Einfluss auf Verkaufszahlen, steigern bei Zielgruppenorientiertem Content das Kaufverlangen und stärken eine Marke, ein Produkt oder ein Unternehmen langfristig.",
  p3: "Sie wünschen eine einzige Werbekampagne, möchten Social Media verstehen oder gar die gesamte Betreuung an eine Agentur abgeben? Wir bieten sämtliche Services, welche Social Media Kanäle betreffen. Gemeinsam stärken wir mit Ihnen diesen Werbekanal und steigern Ihre Reichweite langfristig.",
  p4: "Bei Fragen zu diesen Themen, stehen Ihnen unsere Kundenbetreuer jederzeit per Mail zur Verfügung. Senden Sie uns gerne einfach eine unverbindliche Anfrage und wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.",
};

export default function Webentwicklung() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Social Media" text="" />
      <SubPageContent data={content} />
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
