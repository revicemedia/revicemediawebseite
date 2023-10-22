"use client";

import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Kann mein bestehender Hosting Anbieter genutzt werden?",
    answer:
      "Solange Ihr Hostinganbieter moderne Webtechnologien wie React und Next.js sowie Node.js unterstützt, ist dies ohne Probleme möglich. Sollte dem nicht so sein, müssen wir entweder andere Technologien nutzen oder gemeinsam über einen Anbieter-Wechsel nachdenken. Weitere Details können jederzeit mit Ihrem persönlichen Berater besprochen werden.",
  },
  {
    question: "Können bestehende Inhalte übernommen werden?",
    answer:
      "Selbstverständlich. Wir beiten einen Service zur Datenübernahme von bestehenden Systemen an. Wie lange dies dann dauert, ist abhängig von der Menge der zu übertragenden Daten.",
  },
  {
    question: "Können Sie meine Domain erwerben?",
    answer:
      "Sollten Sie noch nicht im Besitz Ihrer eigenen Domain sein, so übernehmen wir gerne die Registrierung und die damit verbundene Verwaltung.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto divide-y divide-gray-900/10">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-secondary-dalu">
              FAQ
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Häufig gestellte Fragen
            </p>
          </div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
