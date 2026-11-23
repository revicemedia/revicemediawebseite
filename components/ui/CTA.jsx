import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Reveal from "@/components/Effects/Reveal";
import { brand } from "@/brandConfig";

/**
 * Kontakt-Box vor dem Footer.
 * `tight`: kein Abstand nach oben – nutzen, wenn davor bereits eine weiße Section steht.
 */
export default function CTA({
  title = "Lassen Sie uns gemeinsam etwas Großes starten.",
  text = "Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns schnellstmöglich und besprechen mit Ihnen unverbindlich die nächsten Schritte.",
  subject = "Projektanfrage",
  tight = false,
}) {
  return (
    <section className={`bg-white pb-16 sm:pb-20 ${tight ? "" : "pt-16 sm:pt-20"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-navy px-6 py-12 sm:px-12 sm:py-14 lg:px-16">
          <img
            src="/logo-small.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 -z-10 h-[20rem] w-auto opacity-[0.07] brightness-0 invert"
          />
          <div
            aria-hidden="true"
            className="absolute -left-32 -top-32 -z-10 h-80 w-80 rounded-full bg-brand/30 blur-3xl"
          />
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow !text-brand-100 before:!bg-brand-100">Kontakt</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
                {text}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-end">
              <a
                href={`mailto:${brand.contact.email}?subject=${encodeURIComponent(subject)}`}
                className="btn-light"
              >
                Projekt anfragen
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${brand.contact.email}`}
                className="px-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                {brand.contact.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
