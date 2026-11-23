import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Reveal from "@/components/Effects/Reveal";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import { categoryLabel } from "@/components/data/cases";

/** Screenshot im Browserfenster, optional mit Smartphone davor */
function DeviceMockup({ item }) {
  return (
    <div className="relative px-6 pb-10 pt-8 sm:px-10 sm:pb-14 sm:pt-12">
      {/* Browser */}
      <div className="overflow-hidden rounded-xl bg-white shadow-2xl shadow-navy/25 ring-1 ring-navy/10 transition-transform duration-700 group-hover:-translate-y-1">
        <div className="flex items-center gap-2 border-b border-navy/10 bg-mist px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-navy/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-navy/15" />
          <span className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[11px] text-navy/45">
            {item.mockup.url}
          </span>
        </div>
        <img
          src={item.cover}
          alt=""
          loading="lazy"
          className="h-auto w-full"
        />
      </div>

      {/* Smartphone */}
      {item.mockup.mobile && (
        <div className="absolute bottom-4 left-3 w-[24%] max-w-[9rem] rounded-[1.6rem] bg-navy p-1.5 shadow-2xl shadow-black/50 ring-1 ring-white/10 transition-transform duration-700 group-hover:-translate-y-3 sm:bottom-6 sm:left-5">
          <div className="overflow-hidden rounded-[1.25rem] bg-white">
            <img
              src={item.mockup.mobile}
              alt=""
              loading="lazy"
              className="aspect-[9/19] w-full object-cover object-top"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Eine Showcase-Zeile pro Case – Motiv und Text wechseln die Seite.
 */
export default function ShowcaseRow({ item, index }) {
  const reversed = index % 2 === 1;
  const href = `/cases/${item.slug}`;
  const handle = item.instagram
    ?.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@")
    .replace(/\/$/, "");

  return (
    <Reveal as="article" className="group grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
      {/* Motiv */}
      <a
        href={href}
        aria-hidden="true"
        tabIndex={-1}
        className={`relative block overflow-hidden rounded-[2rem] lg:col-span-7 ${
          item.mockup ? "bg-gradient-to-br from-navy to-navy-700" : "bg-mist"
        } ${reversed ? "lg:order-2" : ""}`}
      >
        {item.mockup ? (
          <>
            <img
              src="/logo-small.svg"
              alt=""
              className="pointer-events-none absolute -left-10 -top-10 h-64 w-auto opacity-[0.06] brightness-0 invert"
            />
            <DeviceMockup item={item} />
          </>
        ) : (
          <img
            src={item.cover}
            alt=""
            loading="lazy"
            className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )}
      </a>

      {/* Text */}
      <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-4">
          <span className="font-display text-sm font-semibold text-brand">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-navy/10" />
          <span className="text-xs font-medium text-navy/45">
            {item.categories.map(categoryLabel).join(" · ")}
          </span>
        </div>

        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-navy/50">
          {item.client}
        </p>
        <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-navy sm:text-4xl">
          <a href={href} className="transition-colors hover:text-brand">
            {item.title}
          </a>
        </h3>
        <p className="mt-5 text-base leading-7 text-navy/65 sm:text-lg sm:leading-8">
          {item.excerpt}
        </p>

        {item.services?.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {item.services.map((s) => (
              <li
                key={s}
                className="rounded-full border border-navy/10 bg-white px-3 py-1 text-xs font-medium text-navy/70"
              >
                {s}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={href} className="btn-primary group/btn">
            Case ansehen
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </a>
          {handle && (
            <a
              href={item.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy/60 transition-colors hover:text-brand"
            >
              <InstagramIcon className="h-4 w-4" />
              {handle}
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
