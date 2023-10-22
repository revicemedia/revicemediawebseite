"use client";

import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  XMarkIcon,
  Bars3Icon,
  CommandLineIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ChartPieIcon,
  PhotoIcon,
  ShoppingBagIcon,
  CameraIcon,
  VideoCameraIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    name: "Webentwicklung",
    description:
      "Umsetzung von Webseiten jeglicher Art und in allen Größen. Jederzeit auf Wunsch skalier- und erweiterbar.",
    icon: CommandLineIcon,
    href: "/webentwicklung",
  },
  {
    name: "Shopsysteme",
    description:
      "Von der Erweiterung eines bestehenden Shopsystems bis hin zur Entwicklung passgenauer Individualsysteme.",
    icon: ShoppingBagIcon,
    href: "/shopsysteme",
  },
  {
    name: "Webdesign",
    description:
      "Von der einzelnen Komponente bis hin zur komplexen Unternehmenspräsenz bieten wir Ihnen im Webdesign alles.",
    icon: PaintBrushIcon,
    href: "/webdesign",
  },
  {
    name: "Grafikdesign",
    description:
      "Logos, Visitenkarten, Flyer und weitere Druckprodukte sowie digitale Werbeprodukte können bei uns in Auftrag gegeben werden.",
    icon: PhotoIcon,
    href: "/grafikdesign",
  },
  {
    name: "Fotografie",
    description:
      "Egal ob Hochzeitsbegleitung, Pärchen-Shootings, Produktfotografie oder Eventfotografie.",
    icon: CameraIcon,
    href: "/fotografie",
  },
  {
    name: "Videografie",
    description:
      "Logos, Visitenkarten, Flyer und weitere Druckprodukte sowie digitale Werbeprodukte können bei uns in Auftrag gegeben werden.",
    icon: VideoCameraIcon,
    href: "/videografie",
  },
  {
    name: "Suchmaschinenoptimierung (SEO)",
    description:
      "In Suchmaschinen gefunden zu werden ist für ein Unternehmen von großer Bedeutung. Wir unterstützen Sie dabei gerne!",
    icon: MagnifyingGlassIcon,
    href: "/seo",
  },
  {
    name: "Social Media",
    description:
      "Egal ob einzelne oder mehrere Kampagnen. Wie unterstützen Sie bei Ihren online und offline Marketingkampagnen",
    icon: ChartPieIcon,
    href: "/socialmedia",
  },
  {
    name: "Digitale Speisekarte",
    description:
      "Wir erstellen individuelle und erweiterbare digitale Lösungen für Ihr Unternehmen. So ist alles jederzeit auf dem aktuellsten Stand.",
    icon: BuildingStorefrontIcon,
    href: "https://www.meinedigitalespeisekarte.de",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative isolate z-10 bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DaLu Services</span>
            <img className="h-8 w-auto" src="/logo.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover>
            <Popover.Button
              onClick={() => setIsOpen(!isOpen)}
              className="group flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none hover:text-secondary-dalu"
            >
              Dienstleistungen
              {isOpen ? (
                <ChevronUpIcon
                  className="h-5 w-5 flex-none text-gray-400 group-hover:text-secondary-dalu"
                  aria-hidden="true"
                />
              ) : (
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400 group-hover:text-secondary-dalu"
                  aria-hidden="true"
                />
              )}
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 -translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 -translate-y-1"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-900/5">
                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-light-gray-dalu"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-secondary-dalu"
                          aria-hidden="true"
                        />
                      </div>
                      <a
                        href={item.href}
                        className="mt-6 block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <a
            href="/#Blog"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary-dalu"
          >
            Blog
          </a>
          <a
            href="/wir-sind-revice"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-secondary-dalu"
          >
            Über uns
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end pointer">
          <a
            href="https://www.instagram.com/revice_media/"
            target="_blank"
            className="w-auto pointer"
          >
            <img
              src="/logo-instagram.svg"
              alt="Instagram"
              height={20}
              width={20}
            />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 focus:outline-none">
              <span className="sr-only">DaLu Services GbR</span>
              <img
                className="h-8 w-auto focus:outline-none"
                src="/logo.svg"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Dienstleistungen
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-light-gray-dalu"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="/#Blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
                <a
                  href="/wir-sind-revice"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Über uns
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
