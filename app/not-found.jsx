export default function notFound() {
  return (
    <>
      <main className="grid min-h-full h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-secondary-dalu">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Hoppla
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Diese Seite konnten wir leider nicht finden.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-secondary-dalu px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dalu focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Zur Startseite
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
