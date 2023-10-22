const posts = [
  {
    id: 1,
    title: "Vorschlag für den Berliner Verein Delay Sports",
    href: "https://delaysports.dalu-services.com/",
    imageUrl: "/delay.jpg",
    subHeadline: "Webentwicklung",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Webseite, Logodesign und fotografische Begleitung",
    href: "https://marcelschink.de",
    imageUrl: "/Schink.jpg",
    subHeadline: "Webentwicklung & Grafikdesign",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "Webseite für die logopädische Praxis von Frau Anita Hanso",
    href: "https://anitahanso.de",
    imageUrl: "/anitahanso_image.jpg",
    subHeadline: "Webentwicklung",
    datetime: "2020-03-16",
  },
];

export default function ClientProjects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unsere Projekte
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 group-hover:via-gray-900/60 via-gray-900/40 transition-all" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time
                  dateTime={post.datetime}
                  className="mr-8 group-hover:text-secondary-dalu group-hover:pl-2 transition-all"
                >
                  {post.subHeadline + " "}
                  <span
                    aria-hidden="true"
                    className="hidden group-hover:inline-block"
                  >
                    →
                  </span>
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href} target="_blank">
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
