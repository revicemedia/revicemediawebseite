import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import CaseCard from "./CaseCard";
import ShowcaseRow from "./ShowcaseRow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";
import {
  categoryLabel,
  getCasesByCategory,
  getFeaturedCases,
} from "@/components/data/cases";

/** Große Karte für die Hauptreferenz */
function HighlightCase({ item }) {
  return (
    <a
      href={`/cases/${item.slug}`}
      className="group grid overflow-hidden rounded-[2rem] bg-navy text-white lg:grid-cols-5"
    >
      <div className="relative overflow-hidden lg:col-span-3">
        <img
          src={item.cover}
          alt=""
          className="aspect-[16/10] h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col justify-between gap-10 p-8 sm:p-10 lg:col-span-2">
        <div>
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100">
            Hauptreferenz
          </p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            {item.client}
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-white/70">{item.excerpt}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {(item.services || item.categories.map(categoryLabel)).map((s) => (
              <li key={s} className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          Case ansehen
          <ArrowUpRightIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

/**
 * Case-Auswahl für Startseite (featured) oder Leistungsseiten (category).
 * Wird nichts gefunden, rendert die Section nichts.
 */
export default function FeaturedCases({
  category,
  eyebrow = "Cases",
  title = "Ausgewählte Projekte",
  text,
  limit = 3,
  highlightFirst = false,
  showcase = false,
  className = "bg-white",
}) {
  const list = category
    ? getCasesByCategory(category).slice(0, limit)
    : getFeaturedCases(limit);

  if (!list.length) return null;

  const moreHref = category ? `/cases?kategorie=${category}` : "/cases";
  const [first, ...rest] = list;
  const grid = highlightFirst ? rest : list;

  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} text={text} />
          <Reveal>
            <a href={moreHref} className="btn-secondary group">
              Alle Cases ansehen
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {showcase && (
          <div className="mt-14 space-y-20 sm:mt-16 lg:space-y-28">
            {list.map((item, i) => (
              <ShowcaseRow key={item.slug} item={item} index={i} />
            ))}
          </div>
        )}

        {!showcase && highlightFirst && (
          <Reveal className="mt-12">
            <HighlightCase item={first} />
          </Reveal>
        )}

        {!showcase && grid.length > 0 && (
          <div
            className={`mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 ${
              highlightFirst ? "" : "lg:grid-cols-3"
            }`}
          >
            {grid.map((item, i) => (
              <Reveal key={item.slug} delay={i * 100}>
                <CaseCard item={item} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
