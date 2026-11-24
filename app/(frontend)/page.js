import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import FocusServices from "@/components/Services/FocusServices";
import FeaturedCases from "@/components/Cases/FeaturedCases";
import Herangehensweise from "@/components/Herangehensweise/Herangehensweise";
import Customers from "@/components/Customers/Customers";
import FAQ from "@/components/FAQ/FAQ";
import BlogSectionSmall from "@/components/BlogSectionSmall/BlogSectionSmall";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/Footer/Footer";

// Blog-Vorschau kommt aus dem CMS
export const revalidate = 3600;

export const metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <FocusServices />
      <Customers />
      <FeaturedCases
        eyebrow="Ausgewählte Cases"
        title="Arbeiten, die wirken."
        text="Vom Social-Media-Kanal, der durch die Decke geht, bis zur Praxis-Webseite – ein Auszug aus unseren Projekten."
        showcase
        className="bg-white"
      />
      <Herangehensweise />
      <BlogSectionSmall />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
