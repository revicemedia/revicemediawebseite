import ClientProjects from "@/components/ClientProjects/ClientProjects";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";
import SubPageContent from "@/components/SubPageContent/SubPageContent";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Vorteile from "@/components/Vorteile/Vorteile";

const content = {
  headline: "Mit uns wird Ihr Unternehmen online gefunden",
  subHeadline: "Suchmaschinenoptimierung",
  p1: "Suchmaschinen wie Google und Bing werden täglich von Millionen Menschen rund um die Welt genutzt, um Produkte und Dienstleistungen zu suchen. Wenn Sie Ihrer Zielgruppe unter den Top-Ergebnissen angezeigt werden, steigern Sie nicht nur Ihre Verkäufe, sondern auch Ihre generellen Besucherzahlen.",
  p2: "Wer online verkaufen möchte oder seine Zielgruppe über das Internet ansprechen möchte, kommt um Suchmaschinenoptimierung (Search Engine Optimization) nicht herum. Wir haben uns auf SEO Texte spezialisiert, die nicht nur für die Suchmaschnine optimiert sind, sondern auch für den tatsächtlichen Leser gut lesbar und verständlich sind.",
  p3: "Ein SEO Text, welcher ausschließlich für die Suchmaschinen optimiert wurde, ist meist für die Besucher nicht so gut lesbar. Aus diesem Grund setzen wir auf eine gesunde Mischung, die Ihnen zu einer höheren Kundenzufriedenheit verhilft und darüberhinaus für ein gutes Rating sorgt.",
  p4: "Bei Fragen zu diesen Themen, stehen Ihnen unsere Kundenbetreuer jederzeit per Mail zur Verfügung.",
};

export default function Webentwicklung() {
  return (
    <div>
      <Navigation />
      <SubPageHeader headline="Suchmaschinenoptimierung (SEO)" text="" />
      <SubPageContent data={content} />
      <Vorteile />
      <ClientProjects />
      <Footer />
    </div>
  );
}
