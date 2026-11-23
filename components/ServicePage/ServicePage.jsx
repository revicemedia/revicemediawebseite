import { ArrowRightIcon, CheckIcon } from "@heroicons/react/24/outline";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";
import Vorteile from "@/components/Vorteile/Vorteile";
import FeaturedCases from "@/components/Cases/FeaturedCases";
import FAQ from "@/components/FAQ/FAQ";
import CTA from "@/components/ui/CTA";
import ProcessSteps from "./ProcessSteps";
import { brand } from "@/brandConfig";
import { focusServices, getProcess, getService } from "@/components/data/services";

/**
 * Einheitliche Vorlage für alle Leistungsseiten.
 * Inhalte werden in components/data/services.js gepflegt.
 */
export default function ServicePage({ slug }) {
  const service = getService(slug);
  const { page } = service;
  const related = focusServices.filter((s) => s.slug !== slug);

  return (
    <main>
      <Navigation />

      <SubPageHeader
        icon={service.icon}
        eyebrow={service.name}
        headline={page.headline}
        text={page.intro}
        tags={page.tags}
        breadcrumb={[{ name: service.shortName || service.name }]}
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={`mailto:${brand.contact.email}?subject=${encodeURIComponent(
              `Anfrage ${service.name}`
            )}`}
            className="btn-primary"
          >
            Unverbindlich anfragen
          </a>
          {service.caseCategory && (
            <a href={`/cases?kategorie=${service.caseCategory}`} className="btn-secondary">
              Passende Cases
            </a>
          )}
        </div>
      </SubPageHeader>

      {/* Einleitung + Vorteile */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <Reveal>
            <p className="eyebrow">Warum Revice</p>
            <h2 className="h-section mt-4">
              {service.tagline}
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-navy/70">
              {page.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Vorteile className="self-start" />
        </div>
      </section>

      {/* Leistungsumfang */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Leistungsumfang"
            title="Was wir für Sie umsetzen"
            text="Ob einzelner Baustein oder Komplettpaket – Sie entscheiden, was Sie brauchen."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.deliverables.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 80}
                className="group rounded-3xl border border-navy/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-navy/5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 text-brand transition-colors group-hover:bg-navy group-hover:text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-navy/60">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps steps={getProcess(service)} />

      {service.caseCategory && (
        <FeaturedCases
          category={service.caseCategory}
          eyebrow="Cases"
          title={`${service.shortName || service.name} in der Praxis`}
        />
      )}

      {page.faq && (
        <FAQ items={page.faq} title={`Fragen zu ${service.shortName || service.name}`} />
      )}

      {/* Verwandte Leistungen */}
      <section className="border-t border-navy/10 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-navy/50">Das passt dazu</p>
          <ul className="mt-4 flex flex-wrap gap-3">
            {related.map((s) => (
              <li key={s.slug}>
                <a
                  href={s.href}
                  className="group inline-flex items-center gap-2 rounded-full border border-navy/10 px-5 py-3 font-display text-sm font-medium text-navy transition-all hover:border-navy hover:bg-navy hover:text-white"
                >
                  <s.icon className="h-4 w-4 text-brand group-hover:text-white" />
                  {s.name}
                  <ArrowRightIcon className="h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA tight subject={`Anfrage ${service.name}`} />
      <Footer />
    </main>
  );
}
