"use client";

import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  XMarkIcon,
  Bars3Icon,
  ArrowUpRightIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { focusServices, moreServices } from "@/components/data/services";
import { brand } from "@/brandConfig";
import { InstagramIcon } from "@/components/ui/SocialIcons";

const links = [
  { name: "Cases", href: "/cases", match: "/cases" },
  { name: "Über uns", href: "/wir-sind-revice", match: "/wir-sind-revice" },
  { name: "Blog", href: "/#blog", match: "/blog" },
];

// true, wenn der Pfad dem Bereich entspricht (inkl. Unterseiten)
const isActive = (pathname, base) =>
  !!pathname && !!base && (pathname === base || pathname.startsWith(`${base}/`));

const allServices = [...focusServices, ...moreServices];

const mail = `mailto:${brand.contact.email}?subject=Projektanfrage`;

function ServiceLink({ item, compact = false, active = false }) {
  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-current={active ? "page" : undefined}
      className={`group flex gap-4 rounded-2xl transition-colors ${
        active ? (compact ? "bg-white ring-1 ring-navy/10" : "bg-mist") : "hover:bg-mist"
      } ${compact ? "items-center p-3" : "p-4"}`}
    >
      <div
        className={`flex flex-none items-center justify-center rounded-xl transition-colors ${
          active
            ? "bg-navy text-white"
            : "bg-brand-50 text-brand group-hover:bg-navy group-hover:text-white"
        } ${compact ? "h-9 w-9" : "h-11 w-11"}`}
      >
        <item.icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <p className="flex items-center gap-1 text-sm font-semibold text-navy">
          {item.shortName || item.name}
          {item.external && <ArrowUpRightIcon className="h-3 w-3 text-navy/40" />}
        </p>
        {!compact && (
          <p className="mt-0.5 text-xs leading-5 text-navy/55">{item.tagline}</p>
        )}
      </div>
    </a>
  );
}

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const servicesActive = allServices.some((s) => !s.external && isActive(pathname, s.href));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-navy/10 bg-white/85 backdrop-blur-lg"
          : "border-transparent bg-white"
      }`}
    >
      <nav
        className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Hauptnavigation"
      >
        <a href="/" className="-m-1.5 p-1.5 lg:flex-1">
          <span className="sr-only">Revice Media</span>
          <img className="h-8 w-auto" src="/logo.svg" alt="" />
        </a>

        <Popover.Group className="hidden lg:flex lg:items-center lg:gap-x-1">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`flex items-center gap-x-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${
                    open
                      ? "bg-mist text-navy"
                      : servicesActive
                      ? "bg-brand-50 text-navy"
                      : "text-navy/75 hover:text-navy"
                  }`}
                >
                  Leistungen
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform duration-300 ${
                      open || servicesActive ? `${open ? "rotate-180 " : ""}text-brand` : "text-navy/40"
                    }`}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-2"
                >
                  <Popover.Panel className="absolute left-1/2 top-full mt-3 w-[52rem] -translate-x-1/2 overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-2xl shadow-navy/10">
                    <div className="grid grid-cols-5">
                      <div className="col-span-3 p-4">
                        <p className="px-4 pb-2 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy/40">
                          Unsere Schwerpunkte
                        </p>
                        <div className="grid grid-cols-2 gap-1">
                          {focusServices.map((item) => (
                            <ServiceLink key={item.slug} item={item} active={isActive(pathname, item.href)} />
                          ))}
                        </div>
                      </div>
                      <div className="col-span-2 bg-mist p-4">
                        <p className="px-3 pb-2 pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-navy/40">
                          Außerdem
                        </p>
                        <div className="grid gap-0.5">
                          {moreServices.map((item) => (
                            <ServiceLink key={item.slug} item={item} compact active={isActive(pathname, item.href)} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <a
                      href="/cases"
                      className="group flex items-center justify-between border-t border-navy/10 bg-navy px-8 py-4 text-sm font-medium text-white"
                    >
                      <span>
                        Sehen Sie sich an, was wir bereits umgesetzt haben
                      </span>
                      <span className="flex items-center gap-2 font-semibold">
                        Zu den Cases
                        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </a>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          {links.map((link) => {
            const active = isActive(pathname, link.match);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-brand-50 text-navy" : "text-navy/75 hover:text-navy"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </Popover.Group>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-5">
          <a
            href="https://www.instagram.com/revice_media/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/50 transition-colors hover:text-brand"
          >
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href={mail} className="btn-primary !px-5 !py-2.5">
            Projekt anfragen
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Menü öffnen</span>
          <Bars3Icon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-navy/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 flex w-full flex-col overflow-y-auto bg-white px-4 sm:max-w-sm sm:border-l sm:border-navy/10 sm:px-6">
          <div className="flex h-[72px] flex-none items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Revice Media</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="" />
            </a>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/15 text-navy"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Menü schließen</span>
              <XMarkIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flex-1 divide-y divide-navy/10">
            <Disclosure as="div" defaultOpen>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={`flex w-full items-center justify-between py-4 font-display text-2xl font-semibold ${
                      servicesActive ? "text-brand" : "text-navy"
                    }`}
                  >
                    Leistungen
                    <ChevronDownIcon
                      className={`h-6 w-6 transition-transform ${open ? "rotate-180 text-brand" : "text-navy/40"}`}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="grid grid-cols-1 gap-0.5 pb-4">
                    {allServices.map((item) => {
                      const active = isActive(pathname, item.href);
                      return (
                        <a
                          key={item.slug}
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm font-medium ${
                            active ? "bg-brand-50 text-navy" : "text-navy/80 hover:bg-mist"
                          }`}
                        >
                          <item.icon className={`h-5 w-5 ${active ? "text-navy" : "text-brand"}`} />
                          {item.name}
                          {active && <span className="ml-auto mr-1 h-1.5 w-1.5 rounded-full bg-brand" />}
                        </a>
                      );
                    })}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {links.map((link) => {
              const active = isActive(pathname, link.match);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 py-4 font-display text-2xl font-semibold ${
                    active ? "text-brand" : "text-navy"
                  }`}
                >
                  {link.name}
                  {active && <span className="h-2 w-2 rounded-full bg-brand" />}
                </a>
              );
            })}
          </div>

          <div className="sticky bottom-0 -mx-4 border-t border-navy/10 bg-white px-4 py-5 sm:-mx-6 sm:px-6">
            <a href={mail} className="btn-primary w-full">
              Projekt anfragen
            </a>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
