export default function TextImage() {
  return (
    <div className="bg-white">
      <div className="relative bg-gray-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="/scribble.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-primary-dalu opacity-80"
        />
        <div className="relative mx-auto px-6 py-32 text-center sm:py-64 lg:px-0 max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Lassen Sie uns starten
          </p>
          <p className="mt-6 mb-8 text-lg leading-8 text-white">
            Gemeinsam mit Ihnen erarbeiten wir ein für Sie passendes Konzept und
            beginnen dann mit der Umsetzung. So erhalten Sie genau das Produkt,
            welches Sie benötigen.
          </p>

          <a
            href="mailto:hey@revice-media.com"
            target="_blank"
            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-primary-dalu hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Projekt anfragen
          </a>
        </div>
      </div>
    </div>
  );
}
