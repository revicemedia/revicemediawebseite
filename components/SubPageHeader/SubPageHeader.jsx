import { ChevronRightIcon } from "@heroicons/react/20/solid";

/**
 * Heller Seiten-Header für alle Unterseiten.
 * `headline` ist Pflicht, alles andere optional.
 */
export default function SubPageHeader({
  headline,
  eyebrow,
  text,
  breadcrumb,
  icon: Icon,
  tags,
  children,
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-navy/10 bg-white">
      <div aria-hidden="true" className="grid-pattern absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-56 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand-50 blur-3xl"
      />
      <img
        src="/logo-small.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 -z-10 hidden h-[26rem] w-auto -translate-y-1/2 opacity-[0.04] lg:block"
      />

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:px-8">
        <nav aria-label="Breadcrumb" className="animate-fade-up animate-duration-500">
          <ol className="flex flex-wrap items-center gap-1 text-xs font-medium text-navy/45">
            <li>
              <a href="/" className="hover:text-brand">
                Start
              </a>
            </li>
            {(breadcrumb || [{ name: headline }]).map((item) => (
              <li key={item.name} className="flex items-center gap-1">
                <ChevronRightIcon className="h-4 w-4" />
                {item.href ? (
                  <a href={item.href} className="hover:text-brand">
                    {item.name}
                  </a>
                ) : (
                  <span className="text-navy/70">{item.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-8 max-w-4xl animate-fade-up animate-delay-100 animate-duration-700">
          {(eyebrow || Icon) && (
            <div className="flex items-center gap-3">
              {Icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            </div>
          )}
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          {text && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-navy/65">{text}</p>
          )}
          {tags?.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-xs font-medium text-navy/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
