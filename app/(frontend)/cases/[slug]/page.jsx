import { notFound } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Gallery from "@/components/Cases/Gallery";
import Reveal from "@/components/Effects/Reveal";
import CTA from "@/components/ui/CTA";
import { InstagramIcon } from "@/components/ui/SocialIcons";
import {
  cases,
  categoryLabel,
  getCase,
  normalizeImage,
} from "@/components/data/cases";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return {
    title: `${item.title} – ${item.client}`,
    description: item.excerpt,
    alternates: { canonical: `/cases/${item.slug}` },
    openGraph: { images: [item.cover] },
  };
}

export default async function CaseDetail({ params }) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const index = cases.findIndex((c) => c.slug === item.slug);
  const nextCase = cases[(index + 1) % cases.length];
  const images = (item.gallery || []).map(normalizeImage);

  const facts = [
    { label: "Kunde", value: item.client },
    item.year && { label: "Jahr", value: item.year },
    { label: "Bereich", value: item.categories.map(categoryLabel).join(", ") },
    item.services?.length && { label: "Leistungen", value: item.services.join(", ") },
  ].filter(Boolean);

  return (
    <main>
      <Navigation />
      <SubPageHeader
        eyebrow={item.client}
        headline={item.title}
        text={item.excerpt}
        breadcrumb={[{ name: "Cases", href: "/cases" }, { name: item.title }]}
      />

      {/* Titelbild */}
      <section className="bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="overflow-hidden rounded-[2rem] bg-mist">
            <img src={item.cover} alt="" className="max-h-[75vh] w-full object-cover" />
          </Reveal>
        </div>
      </section>

      {/* Steckbrief + Beschreibung */}
      <section className="bg-white pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-4">
            <dl className="divide-y divide-navy/10 rounded-3xl border border-navy/10">
              {item.logo && (
                <div className="flex items-center gap-5 px-6 py-5">
                  <div className="flex h-20 min-w-[5rem] shrink-0 items-center justify-center rounded-2xl bg-mist px-4 py-3">
                    <img src={item.logo} alt={`Logo ${item.client}`} className="h-full w-auto max-w-[9rem] object-contain" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">Logo & CI</dt>
                    <dd className="mt-1 text-sm font-medium text-navy">Von Revice entwickelt</dd>
                  </div>
                </div>
              )}
              {facts.map((f) => (
                <div key={f.label} className="px-6 py-4">
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-navy">{f.value}</dd>
                </div>
              ))}
              {(item.link || item.instagram) && (
                <div className="flex flex-wrap gap-2 px-6 py-5">
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-4 !py-2 !text-xs"
                    >
                      {item.linkLabel || "Projekt ansehen"}
                      <ArrowUpRightIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {item.instagram && (
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary !px-4 !py-2 !text-xs"
                    >
                      <InstagramIcon className="h-4 w-4" />
                      {item.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//, "@").replace(/\/$/, "")}
                    </a>
                  )}
                </div>
              )}
            </dl>
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-lg leading-8 text-navy/70 lg:col-span-7 lg:col-start-6">
            {item.description.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            {item.stats?.length > 0 && (
              <dl className="!mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {item.stats.map((s) => (
                  <div key={s.label} className="rounded-3xl bg-navy p-6 text-white">
                    <dt className="text-xs font-medium text-white/60">{s.label}</dt>
                    <dd className="mt-1 font-display text-3xl font-semibold">{s.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </Reveal>
        </div>
      </section>

      {/* Videos */}
      {item.videos?.length > 0 && (
        <section className="bg-white pb-16">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            {item.videos.map((v) => (
              <div key={v.youtube} className="overflow-hidden rounded-3xl bg-navy">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.youtube}`}
                  title={v.title || item.title}
                  loading="lazy"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video w-full"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Galerie */}
      {images.length > 1 && (
        <section className="bg-mist py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between">
              <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
                Galerie
              </h2>
              <p className="text-sm text-navy/50">{images.length} Bilder</p>
            </div>
            <Gallery images={images} title={item.title} />
          </div>
        </section>
      )}

      {/* Navigation zwischen Cases */}
      <section className="border-t border-navy/10 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 py-10 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <a href="/cases" className="inline-flex items-center gap-2 text-sm font-semibold text-navy/60 hover:text-navy">
            <ArrowLeftIcon className="h-4 w-4" /> Alle Cases
          </a>
          {nextCase && nextCase.slug !== item.slug && (
            <a href={`/cases/${nextCase.slug}`} className="group flex items-center gap-4 text-right">
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">
                  Nächster Case
                </span>
                <span className="font-display text-lg font-semibold text-navy group-hover:text-brand">
                  {nextCase.title}
                </span>
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white transition-transform group-hover:translate-x-1">
                <ArrowRightIcon className="h-5 w-5" />
              </span>
            </a>
          )}
        </div>
      </section>

      <CTA tight title="Du möchtest etwas Ähnliches umsetzen?" subject={`Anfrage nach Case: ${item.title}`} />
      <Footer />
    </main>
  );
}
