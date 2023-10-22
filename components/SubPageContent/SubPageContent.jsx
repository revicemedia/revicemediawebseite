export default function SubPageContent({ data }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {data.headline}
            </p>
          </div>
          <div className="mt-16 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2 lg:gap-16">
            <div>
              <p>{data.p1}</p>
              <p className="mt-8">{data.p2}</p>
            </div>
            <div>
              <p>{data.p3}</p>
              <p className="mt-8">{data.p4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
