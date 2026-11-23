import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="relative isolate grid min-h-[70vh] place-items-center overflow-hidden bg-white px-4 py-24">
        <div aria-hidden="true" className="grid-pattern absolute inset-0 -z-10" />
        <div className="text-center">
          <p className="font-display text-8xl font-semibold text-navy/10 sm:text-9xl">404</p>
          <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-navy sm:text-5xl">
            Hoppla – hier ist nichts.
          </h1>
          <p className="mt-6 text-base leading-7 text-navy/60">
            Diese Seite konnten wir leider nicht finden.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/" className="btn-primary">Zur Startseite</a>
            <a href="/cases" className="btn-secondary">Cases ansehen</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
