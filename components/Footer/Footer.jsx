import { brand } from "@/brandConfig";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/SocialIcons";
import { focusServices, moreServices } from "@/components/data/services";

const columns = [
  {
    title: "Schwerpunkte",
    items: focusServices.map((s) => ({ name: s.name, href: s.href })),
  },
  {
    title: "Weitere Leistungen",
    items: moreServices.map((s) => ({
      name: s.shortName || s.name,
      href: s.href,
      external: s.external,
    })),
  },
  {
    title: "Agentur",
    items: [
      { name: "Cases", href: "/cases" },
      { name: "Über uns", href: "/wir-sind-revice" },
      { name: "Blog", href: "/#blog" },
      { name: "Impressum", href: "/impressum" },
      {
        name: "Streitschlichtung",
        href: "https://www.haendlerbund.de/de/ratgeber/recht/3984-aussergerichtliche-streitbeilegung",
        external: true,
      },
    ],
  },
];

const social = [
  { name: "Instagram", href: "https://www.instagram.com/revice_media/", icon: InstagramIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/revicemedia/", icon: LinkedInIcon },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 sm:pt-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img className="h-9 w-auto brightness-0 invert" src="/logo.svg" alt="Revice Media" />
            <p className="mt-6 max-w-xs text-sm leading-6 text-white/60">
              Junge Werbeagentur für Web, App, Social Media, Foto & Video. Wir
              unterstützen Sie bei der Umsetzung Ihrer Webseite, Ihrer Kampagne oder
              Ihrer ganzen Idee.
            </p>
            <a
              href={`mailto:${brand.contact.email}`}
              className="mt-6 inline-block font-display text-lg font-medium text-white underline decoration-brand decoration-2 underline-offset-8 transition-colors hover:text-brand-100"
            >
              {brand.contact.email}
            </a>
            <div className="mt-8 flex gap-3">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                  {col.title}
                </h3>
                <ul role="list" className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/75 transition-colors hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Revice Media</p>
          <p>{brand.contact.region} · deutschlandweit digital</p>
        </div>
      </div>
    </footer>
  );
}
