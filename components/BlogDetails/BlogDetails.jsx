import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Reveal from "@/components/Effects/Reveal";
import Accordion from "@/components/ui/Accordion";
import CTA from "@/components/ui/CTA";
import TableOfContents from "./TableOfContents";
import RichContent, { headingsOf, nodeText } from "./RichContent";
import { formatDate, mediaUrl } from "@/lib/cms";
import { toSlug } from "@/lib/slug";

// Lesezeit grob aus der Wortzahl (≈ 200 Wörter / Minute)
const readingTime = (post) => {
  const text = [
    nodeText(post.content?.root),
    ...(post.faq?.items || []).map((f) => `${f.question} ${f.answer}`),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
};

/** Blogartikel aus dem CMS (Payload-Dokument der Collection „posts“) */
export default function BlogDetails({ post }) {
  const author = typeof post.author === "object" ? post.author : null;
  const authorImage = mediaUrl(author?.image, "card");
  const cover = mediaUrl(post.coverImage, "large");
  const faqItems = post.faq?.items || [];
  const showFaq = faqItems.length > 0;
  const faqTitle = post.faq?.title || "Auf einen Blick";

  const toc = [
    ...headingsOf(post.content),
    ...(showFaq ? [{ id: toSlug(faqTitle), title: faqTitle }] : []),
  ];

  return (
    <>
      <SubPageHeader
        eyebrow="Blog"
        headline={post.title}
        tags={post.categories}
        breadcrumb={[{ name: "Blog", href: "/blog" }, { name: post.title }]}
      >
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm text-navy/60">
          {author && (
            <>
              <div className="flex items-center gap-3">
                {authorImage && (
                  <img src={authorImage} alt="" className="h-10 w-10 rounded-full object-cover" />
                )}
                <div className="leading-5">
                  <p className="font-semibold text-navy">{author.name}</p>
                  {author.role && <p className="text-xs text-navy/50">{author.role}</p>}
                </div>
              </div>
              <span className="hidden h-8 w-px bg-navy/10 sm:block" aria-hidden="true" />
            </>
          )}
          <span className="inline-flex items-center gap-1.5">
            <CalendarDaysIcon className="h-4 w-4" aria-hidden="true" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4" aria-hidden="true" />
            {readingTime(post)} Min. Lesezeit
          </span>
        </div>
      </SubPageHeader>

      {/* Titelbild */}
      {cover && (
        <section className="bg-white pt-12 sm:pt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="overflow-hidden rounded-[2rem] bg-mist">
              <img
                src={cover}
                alt={post.coverImage?.alt || ""}
                className="aspect-[16/9] max-h-[70vh] w-full object-cover sm:aspect-[21/9]"
              />
            </Reveal>
          </div>
        </section>
      )}

      {/* Artikel */}
      <section className="bg-white pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {toc.length > 0 && (
            <aside className="hidden lg:col-span-3 lg:block">
              <TableOfContents items={toc} />
            </aside>
          )}

          <article className="lg:col-span-8 lg:col-start-5">
            <RichContent content={post.content} />

            {showFaq && (
              <div className="mt-16 rounded-[2rem] bg-mist p-6 sm:p-10">
                <p className="eyebrow">Auf einen Blick</p>
                <h2
                  id={toSlug(faqTitle)}
                  className="mt-4 scroll-mt-28 font-display text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
                >
                  {faqTitle}
                </h2>
                <Accordion
                  className="mt-8"
                  items={faqItems.map((f) => ({ q: f.question, a: f.answer }))}
                />
              </div>
            )}

            {author && (
              <div className="mt-16 flex items-center gap-5 rounded-3xl border border-navy/10 p-6">
                {authorImage && (
                  <img
                    src={authorImage}
                    alt={author.name}
                    className="h-16 w-16 flex-none rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">
                    Geschrieben von
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-navy">{author.name}</p>
                  {author.role && <p className="text-sm text-brand">{author.role}</p>}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      <CTA
        tight
        title={post.ctaTitle || "Du willst mehr aus deinem Auftritt machen?"}
        subject={`Anfrage zum Blogartikel: ${post.title}`}
      />
    </>
  );
}
