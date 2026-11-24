import { MapPinIcon } from "@heroicons/react/24/outline";
import Navigation from "@/components/Navigation/Navigation";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import FocusServices from "@/components/Services/FocusServices";
import FeaturedCases from "@/components/Cases/FeaturedCases";
import FAQ from "@/components/FAQ/FAQ";
import CTA from "@/components/ui/CTA";
import Footer from "@/components/Footer/Footer";
import Reveal from "@/components/Effects/Reveal";
import { brand } from "@/brandConfig";

// Lokale Landingpage für die Suche „Werbeagentur Montabaur“
export const metadata = {
  title: "Werbeagentur Montabaur – Web, Social Media, Foto & Video",
  description:
    "Revice Media ist deine Werbeagentur in Montabaur und im Westerwald: Webseiten, Apps, Social Media, Fotografie, Videografie und Grafikdesign – persönlich, schnell und aus einer Hand.",
  alternates: { canonical: "/werbeagentur-montabaur" },
  openGraph: {
    title: "Werbeagentur Montabaur | Revice Media",
    description:
      "Webseiten, Apps, Social Media, Foto & Video aus einer Hand – deine junge Werbeagentur aus Montabaur im Westerwald.",
    url: "/werbeagentur-montabaur",
  },
};

const places = ["Montabaur", "Westerwald", "Westerburg", "Koblenz", "Limburg", "Ruppach-Goldhausen"];

const reasons = [
  {
    title: "Persönlich vor Ort",
    text: "Wir sitzen direkt bei Montabaur. Statt Ticket-System gibt es feste Ansprechpartner – und bei Bedarf einen Kaffee bei dir oder bei uns.",
  },
  {
    title: "Wir kennen die Region",
    text: "Ob Handwerksbetrieb, Praxis, Salon oder Sportverein: Wir wissen, wie Menschen im Westerwald suchen, entscheiden und kaufen.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Webseite, Social Media, Fotos, Videos und Grafik aus einem Team. Das spart Abstimmung, Zeit und Geld.",
  },
];

const faqs = [
  {
    q: "Wo sitzt Revice Media?",
    a: `Unser Sitz ist in ${brand.contact.address.city} bei Montabaur im Westerwald. Wir arbeiten für Kunden in Montabaur, im gesamten Westerwald sowie in Koblenz und Limburg – und digital in ganz Deutschland.`,
  },
  {
    q: "Was macht eine Werbeagentur in Montabaur für mich?",
    a: "Wir sorgen dafür, dass dein Unternehmen gefunden wird und überzeugt: mit einer modernen Webseite, einem gepflegten Social-Media-Auftritt, starken Fotos und Videos sowie einem einheitlichen Design von Logo bis Visitenkarte.",
  },
  {
    q: "Kommt ihr für Foto- und Videoaufnahmen auch zu uns?",
    a: "Ja. Für Fotoshootings und Videodrehs kommen wir zu dir – in Montabaur, im Westerwald und in der Region Koblenz / Limburg.",
  },
  {
    q: "Was kostet eine Webseite oder Social-Media-Betreuung?",
    a: "Das hängt vom Umfang ab. Nach einem kostenlosen Erstgespräch bekommst du ein transparentes Angebot – ohne versteckte Kosten.",
  },
];

export default function WerbeagenturMontabaur() {
  return (
    <main>
      <Navigation />
      <SubPageHeader
        eyebrow="Werbeagentur Montabaur"
        headline="Deine Werbeagentur in Montabaur & im Westerwald."
        text="Webseiten, Apps, Social Media, Foto & Video – von einem jungen Team aus der Region. Persönlich, schnell und aus einer Hand."
        icon={MapPinIcon}
        tags={places}
        breadcrumb={[{ name: "Werbeagentur Montabaur" }]}
      />

      {/* Einleitung */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Aus der Region, für die Region</p>
            <h2 className="h-section mt-4">Marketing, das im Westerwald wirkt.</h2>
            <p className="mt-6 text-xl leading-9 text-navy/80">
              Revice Media ist eine junge Werbeagentur mit Sitz bei Montabaur.
              Wir unterstützen Unternehmen, Vereine und Marken aus Montabaur,
              dem Westerwald und der Region Koblenz / Limburg dabei, online
              sichtbar zu werden und neue Kunden zu gewinnen.
            </p>
            <p className="mt-6 text-lg leading-8 text-navy/65">
              Unser Schwerpunkt liegt auf Webentwicklung, App-Entwicklung,
              Social Media sowie Fotografie und Videografie. Dazu kommen
              Grafikdesign, Webdesign, Onlineshops und Suchmaschinenoptimierung –
              damit du bei Google genau dann gefunden wirst, wenn Kunden in
              deiner Nähe suchen.
            </p>
          </Reveal>

          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((r, i) => (
              <Reveal
                as="li"
                key={r.title}
                delay={100 + i * 80}
                className="rounded-3xl border border-navy/10 bg-mist p-7"
              >
                <span className="font-display text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">{r.title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy/60">{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FocusServices />
      <FeaturedCases
        eyebrow="Projekte aus der Region"
        title="Arbeiten aus dem Westerwald."
        showcase
        className="bg-white"
      />
      <FAQ items={faqs} title="Fragen zur Werbeagentur in Montabaur" />
      <CTA
        title="Lernen wir uns kennen – in Montabaur oder online."
        subject="Projektanfrage Montabaur"
      />
      <Footer />
    </main>
  );
}
