import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";
import { focusServices, moreServices } from "@/components/data/services";

// Kacheln mit Navy-Akzent (CI-Primärfarbe)
const accent = ["webentwicklung", "videografie"];

// Bento-Layout
const layout = [
  "lg:col-span-4 lg:row-span-2", // Webentwicklung – groß
  "lg:col-span-2", // App
  "lg:col-span-2", // Social
  "lg:col-span-3", // Foto
  "lg:col-span-3", // Video
];

export default function FocusServices() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Leistungen"
          title="Unsere Schwerpunkte"
          text="Wir konzentrieren uns auf das, was Marken heute sichtbar macht – und liefern alles aus einem Team."
        />

        <div className="mt-12 grid auto-rows-[minmax(15rem,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {focusServices.map((s, i) => {
            const big = i === 0;
            const blue = accent.includes(s.slug);
            // Farb-Varianten: blau (Akzent) oder hell
            const c = blue
              ? {
                  card: "bg-navy text-white hover:bg-navy-700",
                  chip: "bg-white/10 text-white group-hover:bg-brand",
                  text: "text-white/70",
                  tag: "border-white/15 bg-white/5 text-white/80",
                  mark: "text-white/[0.06]",
                }
              : {
                  card: "border border-navy/10 bg-mist text-navy hover:border-transparent hover:bg-navy hover:text-white",
                  chip: "bg-white text-brand group-hover:bg-white/10 group-hover:text-white",
                  text: "text-navy/60 group-hover:text-white/70",
                  tag: "border-navy/10 bg-white text-navy/70 group-hover:border-white/15 group-hover:bg-white/5 group-hover:text-white/80",
                  mark: "text-navy/[0.06] group-hover:text-white/[0.07]",
                };
            return (
              <Reveal
                key={s.slug}
                delay={i * 80}
                className={`${layout[i] || "lg:col-span-2"} ${big ? "sm:col-span-2" : ""}`}
              >
                <a
                  href={s.href}
                  className={`group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/15 sm:p-8 ${c.card}`}
                >
                  {blue && (
                    <div
                      aria-hidden="true"
                      className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-brand/25 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                    />
                  )}
                  {big && (
                    <s.icon
                      aria-hidden="true"
                      className={`pointer-events-none absolute -right-6 top-6 hidden h-64 w-64 stroke-[0.6] transition-colors duration-500 sm:block ${c.mark}`}
                    />
                  )}
                  <div className="relative flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-colors ${c.chip}`}>
                      <s.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-medium opacity-40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mt-10">
                    <h3 className={`font-display font-semibold ${big ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                      {s.name}
                    </h3>
                    <p
                      className={`mt-3 transition-colors ${c.text} ${
                        big ? "max-w-lg text-base leading-7" : "max-w-md text-sm leading-6"
                      }`}
                    >
                      {s.description}
                    </p>
                    {big && s.page?.tags && (
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {s.page.tags.map((tag) => (
                          <li
                            key={tag}
                            className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${c.tag}`}
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold">
                      Mehr erfahren
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        {/* Weitere Leistungen */}
        <Reveal className="mt-10 flex flex-col gap-4 rounded-3xl border border-navy/10 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-navy">Und außerdem …</p>
            <p className="text-sm text-navy/55">Alles, was Ihren Auftritt rund macht.</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {moreServices.map((s) => (
              <li key={s.slug}>
                <a
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                  {s.shortName || s.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
