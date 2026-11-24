import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Reveal from "@/components/Effects/Reveal";
import Accordion from "@/components/ui/Accordion";
import CTA from "@/components/ui/CTA";
import TableOfContents from "./TableOfContents";

// Anker-IDs für das Inhaltsverzeichnis
const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

// Lesezeit grob aus der Wortzahl (≈ 200 Wörter / Minute)
const readingTime = (data) => {
  const text = [
    ...data.content.flatMap((c) => [c.headline, ...c.p.map((p) => p.content)]),
    ...(data.blogfaq?.display ? data.blogfaq.data.map((f) => f.text) : []),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
};

export default function BlogDetails({ data }) {
  const showFaq = data.blogfaq?.display;
  const toc = [
    ...data.content.filter((c) => c.headline).map((c) => c.headline),
    ...(showFaq ? [data.blogfaq.headline] : []),
  ].map((title) => ({ id: slugify(title), title }));

  return (
    <>
      <SubPageHeader
        eyebrow="Blog"
        headline={data.headline}
        tags={data.categories}
        breadcrumb={[{ name: "Blog", href: "/#blog" }, { name: data.headline }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-navy/60">
          <div className="flex items-center gap-3">
            <img src={data.author.image} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="leading-5">
              <p className="font-semibold text-navy">{data.author.name}</p>
              <p className="text-xs text-navy/50">{data.author.role}</p>
            </div>
          </div>
          <span className="hidden h-8 w-px bg-navy/10 sm:block" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5">
            <CalendarDaysIcon className="h-4 w-4" aria-hidden="true" />
            {data.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4" aria-hidden="true" />
            {readingTime(data)} Min. Lesezeit
          </span>
        </div>
      </SubPageHeader>

      {/* Titelbild */}
      <section className="bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-[2rem] bg-mist">
            <img
              src={data.coverImage}
              alt=""
              className="aspect-[16/9] max-h-[70vh] w-full object-cover sm:aspect-[21/9]"
            />
          </Reveal>
        </div>
      </section>

      {/* Artikel */}
      <section className="bg-white pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {toc.length > 0 && (
            <aside className="hidden lg:col-span-3 lg:block">
              <TableOfContents items={toc} />
            </aside>
          )}

          <article className="lg:col-span-8 lg:col-start-5">
            {data.content.map((section, i) => (
              <div key={section.headline || i} className={i > 0 ? "mt-14" : ""}>
                {section.headline && (
                  <h2
                    id={slugify(section.headline)}
                    className="scroll-mt-28 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
                  >
                    {section.headline}
                  </h2>
                )}
                {section.p.map((paragraph, j) => (
                  <p
                    key={paragraph.key}
                    className={
                      i === 0 && j === 0
                        ? "text-lg leading-8 text-navy/80 sm:text-xl sm:leading-9"
                        : `mt-6 text-lg leading-8 text-navy/70 ${!section.headline && j === 0 ? "!mt-0" : ""}`
                    }
                  >
                    {paragraph.content}
                  </p>
                ))}
              </div>
            ))}

            {showFaq && (
              <div className="mt-16 rounded-[2rem] bg-mist p-6 sm:p-10">
                <p className="eyebrow">Auf einen Blick</p>
                <h2
                  id={slugify(data.blogfaq.headline)}
                  className="mt-4 scroll-mt-28 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
                >
                  {data.blogfaq.headline}
                </h2>
                <Accordion
                  className="mt-8"
                  items={data.blogfaq.data.map((f) => ({ q: f.headline, a: f.text }))}
                />
              </div>
            )}

            {/* Autor */}
            <div className="mt-16 flex items-center gap-5 rounded-3xl border border-navy/10 p-6">
              <img
                src={data.author.image}
                alt={data.author.name}
                className="h-16 w-16 flex-none rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">
                  Geschrieben von
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-navy">{data.author.name}</p>
                <p className="text-sm text-brand">{data.author.role}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <CTA
        tight
        title={data.cta?.title || "Du willst mehr aus deinem Auftritt machen?"}
        subject={`Anfrage zum Blogartikel: ${data.headline}`}
      />
    </>
  );
}
