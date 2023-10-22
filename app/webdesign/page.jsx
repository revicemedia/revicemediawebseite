import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import SubPageContent from "@/components/SubPageContent/SubPageContent";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

const content = {
  headline: "Wir gestalten Ihre Webseite",
  subHeadline: "Webdesign",
  p1: "Egal ob es sich um eine einzelne Komponente oder eine komplexe Webanwendung handelt, wir helfen Ihnen bei der passgenauen und Style Guide konformen Gestaltung Ihrer Elemente.",
  p2: "Auf Wunsch erstellen wir Ihnen außerdem Vorschläge zu passenden responsiven Darstellunge. Liefern Sie zum Beispiel ein Design für eine Desktop-Anwendung, so kümmern wir uns um die Gestaltung für mobile Endgeräte. Die Kosten haben Sie zu jeder Zeit im Blick und unter Kontrolle.",
  p3: "Wir arbeiten auf Wunsch mit Figma, Adobe XD oder Adobe Illustrator. Somit können Sie auf die offenen Daten zugreifen, diese bearbeiten oder gar im Nachgang anpassen falls Sie dies wünschen. Wir richten uns zu 100% nach Ihren Ansprüchen und Wünschen.",
  p4: "Bei Fragen zu diesen Themen, stehen Ihnen unsere Kundenbetreuer jederzeit per Mail zur Verfügung. Senden Sie uns gerne einfach eine unverbindliche Anfrage und wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen.",
};

export default function Webentwicklung() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Webdesign" text="" />
      <SubPageContent data={content} />
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
