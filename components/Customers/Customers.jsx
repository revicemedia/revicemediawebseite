// Kundenlogos – laufen als Endlos-Band über Navy.
// Weiße SVGs: klein & dezent. `large` → größeres Logo (optional mit `name` daneben), `white` färbt weiß.
const logos = [
  { src: "/kunden/2die4.png", alt: "2DIE4 Sports", large: true },
  { src: "/kunden/waeller-united.svg", alt: "JSG Wäller United", name: "JSG Wäller United", large: true, white: true },
  { src: "/kunden/anitahanso.svg", alt: "Logopädie Anita Hanso" },
  { src: "/kunden/Haarkulade_dunkel.svg", alt: "Haarkulade" },
  { src: "/kunden/Melodia.svg", alt: "Melodia" },
];

export default function Customers() {
  // Liste mehrfach wiederholen, damit das Band bei wenigen Logos lückenlos läuft
  const row = [...logos, ...logos, ...logos];

  return (
    <section className="bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-white/60">
          Unternehmen, Vereine und Marken, die uns vertrauen
        </p>
      </div>
      <div className="marquee-mask mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((copy) => (
            <ul key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {row.map((logo, i) => (
                <li key={`${logo.src}-${i}`} className="px-10 sm:px-14">
                  {logo.large ? (
                    <div className="flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100">
                      <img
                        src={logo.src}
                        alt={copy === 0 && i < logos.length ? logo.alt : ""}
                        className={`h-8 w-auto object-contain sm:h-10 ${logo.white ? "brightness-0 invert" : ""}`}
                      />
                      {logo.name && (
                        <span aria-hidden="true" className="whitespace-nowrap font-display text-sm font-semibold text-white sm:text-base">
                          {logo.name}
                        </span>
                      )}
                    </div>
                  ) : (
                    <img
                      src={logo.src}
                      alt={copy === 0 && i < logos.length ? logo.alt : ""}
                      className="h-9 w-40 object-contain opacity-70 transition-opacity hover:opacity-100 sm:h-11"
                    />
                  )}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
