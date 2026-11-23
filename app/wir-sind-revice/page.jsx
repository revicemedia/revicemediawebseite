import Navigation from "@/components/Navigation/Navigation";
import About from "@/components/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";
import TeamTest from "@/components/Team/TeamTest";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import CTA from "@/components/ui/CTA";

export const metadata = {
  title: "Über uns",
  description:
    "Revice Media ist eine junge Werbeagentur für Web, App, Social Media, Foto & Video. Lernen Sie uns kennen.",
};

export default function WirSindRevice() {
  return (
    <main>
      <Navigation />
      <SubPageHeader
        eyebrow="Über uns"
        headline="Wir sind Revice."
        text="Eine junge Agentur mit Lust auf gute Ideen – und dem Anspruch, sie sauber umzusetzen."
        breadcrumb={[{ name: "Über uns" }]}
      />
      <About />
      <TeamTest />
      <CTA title="Lernen wir uns kennen." />
      <Footer />
    </main>
  );
}
