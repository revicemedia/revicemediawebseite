import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";

export default function ProcessSteps({
  steps,
  eyebrow = "Ablauf",
  title = "So arbeiten wir zusammen",
  text = "Klare Schritte, feste Ansprechpartner und volle Transparenz – vom ersten Gespräch bis zum Ergebnis.",
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-20 sm:py-24">
      <img
        src="/logo-small.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-[30rem] w-auto opacity-[0.05] brightness-0 invert"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading light eyebrow={eyebrow} title={title} text={text} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.title}
              delay={i * 100}
              className="group relative bg-navy p-8 transition-colors hover:bg-navy-700"
            >
              <span className="font-display text-5xl font-semibold text-white/15 transition-colors group-hover:text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
