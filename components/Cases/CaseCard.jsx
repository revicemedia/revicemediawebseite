import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { categoryLabel } from "@/components/data/cases";

export default function CaseCard({ item, large = false }) {
  return (
    <a
      href={`/cases/${item.slug}`}
      className="group block focus:outline-none"
    >
      <div
        className={`relative overflow-hidden rounded-3xl bg-mist ring-1 ring-navy/5 ${
          large ? "aspect-[4/3] lg:aspect-[16/11]" : "aspect-[4/3]"
        }`}
      >
        <img
          src={item.cover}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/20" />
        <ul className="absolute left-4 top-4 flex flex-wrap gap-1.5">
          {item.categories.map((cat) => (
            <li
              key={cat}
              className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy backdrop-blur"
            >
              {categoryLabel(cat)}
            </li>
          ))}
        </ul>
        <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-navy opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRightIcon className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            {item.client}
          </p>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-navy transition-colors group-hover:text-brand">
            {item.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-navy/60">
            {item.excerpt}
          </p>
        </div>
        {item.year && (
          <span className="flex-none text-sm font-medium text-navy/40">{item.year}</span>
        )}
      </div>
    </a>
  );
}
