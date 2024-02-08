import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import PhotoCustomers from "@/components/PhotoCustomers/PhotoCustomers";
import PhotoText from "@/components/PhotoText/PhotoText";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

const content = {
  headline: "Wir fangen einzigartige und besondere Momente ein",
  subHeadline: "Fotografie",
  p1: "Wir arbeiten mit erfahrenen Fotografen zusammen, um Ihnen ein breites Spektrum an Dienstleistungen anbieten zu können. Unsere Fotografen haben ein Auge für besondere Momente und stellen Ihnen die eingefangenen Momente innerhalb kürzester Zeit zur Verfügung.",
  p2: "Egal ob Hochzeitsbegleitung, Pärchen-Shootings, Produktfotografie oder Eventfotografie. Wir haben das Ziel, Ihre Wünsche voll und ganz zu erfüllen. Die ersten Bilder erhalten Sie bereits am Tag nach Ihrer Veranstaltung - in Einzelfällen und je nach Absprache auch schon am gleichen Tag.",
  p3: "Kontaktieren Sie uns gerne mit Ihren Wünschen und dem gewünschten Datum und wir werden uns schnellstmöglich mit Ihnen in Verbindung setzen. Wir arbeiten hauptsächlich im Raum Koblenz / Limburg / Montabaur, können aber auch vereinzelt darüber hinaus agieren.",
  p4: "Bei Fragen zu diesen Themen, stehen Ihnen unsere Kundenbetreuer jederzeit per Mail zur Verfügung.",
};

export default function Fotografie() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Fotografie" text="" />
      <PhotoText data={content} />
      <PhotoCustomers />
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
