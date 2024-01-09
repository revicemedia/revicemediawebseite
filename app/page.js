import Navigation from "@/components/Navigation/Navigation";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import TextImage from "@/components/TextImage/TextImage";
import FAQ from "@/components/FAQ/FAQ";
import Customers from "@/components/Customers/Customers";
import Herangehensweise from "@/components/Herangehensweise/Herangehensweise";
import BreakComponent from "@/components/BreakComponent/BreakComponent";
import TestService from "@/components/Services/TestServices";
import BlogSectionSmall from "@/components/BlogSectionSmall/BlogSectionSmall";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      {/* <Services /> */}
      <TestService />
      <BreakComponent />
      <Herangehensweise />
      <Customers />
      <FAQ />
      <TextImage />
      <BlogSectionSmall />
      <Footer />
    </main>
  );
}
