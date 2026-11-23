import Reveal from "@/components/Effects/Reveal";

// Kennzahlen rechts neben dem Text
// TODO: Platzhalter „XX“ (Reichweite) durch echten Wert ersetzen
const stats = [
  { value: "2021", label: "gegründet, 2023 neu formiert" },
  { value: "60+", label: "umgesetzte Projekte" },
  { value: "XX", label: "Social-Media-Reichweite für unsere Kunden" },
];

const values = [
  {
    title: "Jung & digital",
    text: "Wir sind mit Social Media, Apps und dem Web aufgewachsen – und wissen, wie Ihre Zielgruppe tickt.",
  },
  {
    title: "Alles aus einer Hand",
    text: "Entwicklung, Design, Foto und Video in einem Team. Das spart Abstimmung und sorgt für einen einheitlichen Auftritt.",
  },
  {
    title: "Fair & transparent",
    text: "Faire Preise, schnelle Projektverläufe und Support, der auch bei einfachen Verständnisfragen gerne hilft.",
  },
];

export default function About() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Text */}
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Vorstellung</p>
            <h2 className="h-section mt-4">Wer wir sind</h2>
            <p className="mt-6 text-xl leading-9 text-navy/80">
              Revice Media ist eine junge Werbeagentur mit klarem Fokus auf
              Webentwicklung, App-Entwicklung, Social Media sowie Foto & Video.
              Gegründet 2021 und 2023 neu formiert, begleiten wir Unternehmen,
              Vereine und Marken dabei, digital sichtbar zu werden.
            </p>
            <p className="mt-6 text-lg leading-8 text-navy/65">
              Unsere Vision: Wir möchten die Digitalisierung voranbringen und in
              die Jahre gekommene Prozesse vereinfachen – und zwar so, dass
              jeder etwas davon hat. Eine professionelle Präsenz aus Webseite,
              App, Social Media und starken Bildern verhilft schnell zu mehr
              Reichweite, mehr Anfragen und mehr Umsatz.
            </p>
            <p className="mt-6 text-lg leading-8 text-navy/65">
              Sie benötigen eine individuelle Lösung, die in unseren Leistungen
              nicht aufgelistet ist? Schreiben Sie uns gerne – wir schauen
              gemeinsam, ob wir der richtige Partner für Sie sind.
            </p>
          </Reveal>

          {/* Zahlen */}
          <Reveal delay={100} className="lg:col-span-4 lg:col-start-9 lg:pt-24">
            <dl className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-10">
              {stats.map((st) => (
                <div key={st.label} className="border-l-2 border-brand pl-5">
                  <dt className="sr-only">{st.label}</dt>
                  <dd className="font-display text-5xl font-semibold leading-none text-navy">
                    {st.value}
                  </dd>
                  <dd className="mt-2 text-sm leading-6 text-navy/60">
                    {st.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Werte */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal
              as="li"
              key={v.title}
              delay={100 + i * 80}
              className="rounded-3xl border border-navy/10 bg-mist p-7"
            >
              <span className="font-display text-sm font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-display text-lg font-semibold text-navy">
                {v.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-navy/60">{v.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
