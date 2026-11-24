import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import CasesExplorer from "@/components/Cases/CasesExplorer";
import CTA from "@/components/ui/CTA";

export const metadata = {
  title: "Cases – Projekte unserer Werbeagentur aus Montabaur",
  alternates: { canonical: "/cases" },
  description:
    "Ausgewählte Projekte von Revice Media: Webentwicklung, App-Entwicklung, Social Media, Fotografie, Videografie und Grafikdesign.",
};

export default function CasesPage() {
  return (
    <main>
      <Navigation />
      <SubPageHeader
        eyebrow="Cases"
        headline="Arbeiten, die für sich sprechen."
        text="Ein Auszug aus unseren Projekten – von Webseiten und Apps über Social Media bis zur Sportfotografie."
      />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CasesExplorer />
        </div>
      </section>
      <CTA tight title="Dein Projekt könnte das nächste sein." />
      <Footer />
    </main>
  );
}
