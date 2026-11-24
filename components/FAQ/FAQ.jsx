"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
import { brand } from "@/brandConfig";

const defaultFaqs = [
  {
    q: "Für wen arbeitet ihr?",
    a: "Für kleine und mittelständische Unternehmen, Vereine, Selbstständige und Privatpersonen – in Montabaur, im Westerwald und der Region Koblenz / Limburg – und digital in ganz Deutschland.",
  },
  {
    q: "Kann mein bestehender Hosting-Anbieter genutzt werden?",
    a: "Solange dein Hosting-Anbieter moderne Webtechnologien wie React, Next.js und Node.js unterstützt, ist das ohne Probleme möglich. Andernfalls finden wir gemeinsam eine Lösung – weitere Details klären wir gerne im persönlichen Gespräch.",
  },
  {
    q: "Können bestehende Inhalte übernommen werden?",
    a: "Selbstverständlich können bereits bestehende Inhalte von deinen aktuellen Werbemedien übernommen werden. Sprich uns einfach darauf an.",
  },
  {
    q: "Wie lange dauert ein Projekt bei euch?",
    a: "Genaue Angaben zur Projektlaufzeit bekommst du nach dem ersten Gespräch. In der Regel liefern wir OnePager innerhalb einer Woche und Grafikvorlagen bereits innerhalb weniger Tage.",
  },
  {
    q: "Bekomme ich alles aus einer Hand?",
    a: "Ja. Web, App, Social Media, Foto, Video und Grafik kommen aus einem Team. Du hast einen festen Ansprechpartner und musst nicht zwischen mehreren Dienstleistern koordinieren.",
  },
];

export default function FAQ({
  items = defaultFaqs,
  eyebrow = "FAQ",
  title = "Häufig gestellte Fragen",
  className = "bg-mist",
}) {
  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="h-section mt-4">{title}</h2>
            <p className="mt-5 text-base leading-7 text-navy/65">
              Deine Frage ist nicht dabei? Schreib uns einfach – wir antworten
              schnell und unkompliziert.
            </p>
            <a
              href={`mailto:${brand.contact.email}?subject=Frage`}
              className="btn-secondary mt-8"
            >
              Frage stellen
            </a>
          </div>
        </div>

        <dl className="space-y-3 lg:col-span-8">
          {items.map((faq) => (
            <Disclosure
              as="div"
              key={faq.q}
              className={({ open }) =>
                `rounded-2xl border bg-white transition-all ${
                  open ? "border-navy/15 shadow-lg shadow-navy/5" : "border-navy/10"
                }`
              }
            >
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left">
                      <span className="font-display text-base font-medium text-navy sm:text-lg">
                        {faq.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 flex-none items-center justify-center rounded-full transition-all duration-300 ${
                          open ? "rotate-45 bg-navy text-white" : "bg-mist text-navy"
                        }`}
                      >
                        <PlusIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    enter="transition duration-200 ease-out"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                  >
                    <Disclosure.Panel as="dd" className="px-6 pb-6 pr-16">
                      <p className="text-base leading-7 text-navy/65">{faq.a}</p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </section>
  );
}
