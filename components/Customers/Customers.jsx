export default function Customers() {
  return (
    <div className="bg-primary-dalu py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="mt-2 text-3xl px-4 font-bold tracking-tight text-white sm:text-4xl mb-16 text-center">
          Unsere Kunden
        </p>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-4">
        <div className="-mx-6 px-4 grid grid-cols-1 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <div className="bg-white/5 p-8 sm:p-10 rounded-lg">
            <img
              className="max-h-12 w-full object-contain"
              src="/kunden/anitahanso.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white/5 p-6 sm:p-10 rounded-lg">
            <img
              className="max-h-12 w-full object-contain"
              src="/kunden/Haarkulade_dunkel.svg"
              alt="Reform"
              width={158}
              height={48}
            />
          </div>
          <div className="bg-white/5 p-6 sm:p-10 rounded-lg">
            <img
              className="max-h-12 w-full object-contain"
              src="/kunden/Melodia.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
