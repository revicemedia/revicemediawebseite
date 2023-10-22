import Navigation from "@/components/Navigation/Navigation";
import About from "@/components/AboutSection/AboutSection";
import Footer from "@/components/Footer/Footer";
import TeamTest from "@/components/Team/TeamTest";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";

export default function Home() {
  return (
    <main>
      <Navigation />
      <SubPageHeader headline="Über uns" text="" />
      <About />
      <TeamTest />
      <Footer />
    </main>
  );
}
