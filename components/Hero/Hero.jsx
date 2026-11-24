import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { brand } from "@/brandConfig";
import { services } from "@/components/data/services";

// Hero-Bild – Alternative: "/hero/workspace.jpg"
const heroImage = {
  src: "/hero/team.jpg",
  alt: "Zwei Personen arbeiten gemeinsam an Laptops in einem hellen Büro",
};

export default function Hero() {
  const ticker = services.map((s) => s.shortName || s.name);

  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div aria-hidden="true" className="grid-pattern absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-brand-50 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pb-24 lg:pt-20">
        {/* Text */}
        <div className="lg:col-span-6">
          {/* H1 enthält das Such-Keyword („Werbeagentur Montabaur“) – optisch bleibt es die Eyebrow */}
          <h1>
            <span className="eyebrow animate-fade-up animate-duration-700">
              Werbeagentur in Montabaur &amp; im Westerwald
            </span>
            <span className="mt-6 block font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-navy animate-fade-up animate-delay-100 animate-duration-700 sm:text-6xl xl:text-7xl">
              {brand.headlines.heroLines[0]}
              <br />
              <span className="text-brand">{brand.headlines.heroLines[1]}</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-navy/65 animate-fade-up animate-delay-200 animate-duration-700">
            {brand.floatingText.heroDescription}
          </p>

          <div className="mt-10 flex flex-col gap-3 animate-fade-up animate-delay-300 animate-duration-700 sm:flex-row">
            <a
              href={`mailto:${brand.contact.email}?subject=Projektanfrage`}
              className="btn-primary"
            >
              {brand.cta.heroProjectRequest}
            </a>
            <a href="/cases" className="btn-secondary group">
              {brand.cta.heroLearnMore}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Bild */}
        <div className="relative animate-fade-up animate-delay-200 animate-duration-1000 lg:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-mist shadow-2xl shadow-navy/15 ring-1 ring-navy/5">
            <img
              src={heroImage.src}
              alt={heroImage.alt}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover object-[70%_50%] lg:aspect-[5/5] xl:aspect-[6/5]"
            />
            {/* leichter Navy-Verlauf, damit das Bild ins CI passt */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-navy/35 via-navy/5 to-transparent"
            />
          </div>

          {/* Bildmarke */}
          <div className="absolute -bottom-6 left-4 flex items-center gap-4 rounded-2xl bg-navy px-5 py-4 shadow-xl shadow-navy/25 sm:-left-6 sm:px-6 sm:py-5">
            <img src="/logo-small.svg" alt="" className="h-8 w-auto brightness-0 invert sm:h-9" />
            <p className="font-display text-sm font-medium leading-snug text-white sm:text-base">
              Alles aus
              <br />
              einer Hand.
            </p>
          </div>
        </div>
      </div>

      {/* Leistungs-Laufband */}
      <div className="marquee-mask border-y border-navy/10 bg-white py-5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {ticker.map((name) => (
                <li key={name} className="flex items-center font-display text-lg font-medium text-navy/35 sm:text-xl">
                  <span className="px-7">{name}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
