import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import SubPageContent from "@/components/SubPageContent/SubPageContent";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

const content = {
  headline: "Gemeinsam geben wir Ihrem Unternehmen ein Gesicht",
  subHeadline: "Grafikdesign",
  p1: "Fast jedes Unternehmen profitiert von einem passenden Logo, einer geeigneten Farbgebung, von einheitlichen Werbeprodukten wie Visitenkarten und Flyer sowie von einer sich fortsetzenden Wiedererkennbarkeit (Corporate Design / Corporate Identity).",
  p2: "Durch unsere erfahrenen Mediengestalter erhalten Sie innerhalb kürzester Zeit nicht nur erste Entwürfe sondern auch fertige Druckvorlagen oder fertig ausgearbeitete digitlale Werbemedien für Postings auf sozialen Medien oder auf Ihrer Webseite.",
  p3: "Sie entscheiden, wo Sie ihre physischen Produkte drucken lassen möchten. Wir arbeiten mit einer regionalen Druckerei zusammen, unterstützen Sie jedoch auf Wunsch auch bei der Bestellung bei einer Onlinedruckerei Ihrer Wahl. Wir haben keine eigene Druckerei im Haus.",
  p4: "Bei Fragen zu diesen Themen, stehen Ihnen unsere Kundenbetreuer jederzeit per Mail zur Verfügung.",
};

export default function Webentwicklung() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Grafikdesign" text="" />
      <SubPageContent data={content} />
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
