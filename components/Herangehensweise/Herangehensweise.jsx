import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";

const steps = [
  {
    name: "Konzeption",
    description: "Du erarbeitest gemeinsam mit deinem Berater ein passendes Konzept.",
    imageSrc: "/Planning.jpg",
  },
  {
    name: "Umsetzung",
    description: "Dein Konzept wird an unser Team übergeben und passgenau umgesetzt.",
    imageSrc: "/code.jpg",
  },
  {
    name: "Review & Anpassungen",
    description: "Du prüfst gemeinsam mit deinem Berater das Ergebnis und gibst es frei.",
    imageSrc: "/Review.jpg",
  },
  {
    name: "Go Live",
    description: "Deine Webseite, App, Kampagne oder dein Druckprodukt wird veröffentlicht.",
    imageSrc: "/live.jpg",
  },
];

export default function Herangehensweise() {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Herangehensweise"
          title="Vier Schritte zum Ergebnis"
          text="Wir legen Wert auf einen klaren Projektverlauf, den alle Beteiligten jederzeit nachvollziehen können."
        />

        <ol className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Verbindungslinie */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-navy/0 via-navy/20 to-navy/0 lg:block"
          />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.name} delay={i * 120} className="group relative">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-navy/10 bg-white font-display text-sm font-semibold text-navy shadow-sm transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-6 overflow-hidden rounded-3xl bg-white">
                <img
                  src={step.imageSrc}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold text-navy">{step.name}</h3>
              <p className="mt-2 text-sm leading-6 text-navy/60">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
