"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/outline";

/**
 * Einheitliches Akkordeon (FAQ, Blog, …).
 * items: [{ q: "Frage / Titel", a: "Antwort / Text" }]
 * defaultOpen: Index des Punkts, der beim Laden bereits geöffnet ist (optional)
 */
export default function Accordion({ items, className = "", defaultOpen }) {
  return (
    <dl className={`space-y-3 ${className}`}>
      {items.map((item, i) => (
        <Disclosure
          as="div"
          key={item.q}
          defaultOpen={i === defaultOpen}
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
                    {item.q}
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
                  <p className="text-base leading-7 text-navy/65">{item.a}</p>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
