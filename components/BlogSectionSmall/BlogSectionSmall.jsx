const posts = [
  {
    id: 1,
    title: "Warum ist eine Webseite auch im Jahr 2023 noch so wichtig?",
    href: "/blog/warum-sind-webseiten-so-wichtig",
    description:
      "Auch zu Zeiten von sozialen Medien wie Instagram, Facebook, TikTok und co. spielen Webseiten im professionellen Umfeld noch immer eine große und entscheidende Rolle. Potenzielle Kunden bekommen schnell einen Überblick über angebotene Produkte oder die möglichen ...",
    imageUrl: "/BlogPost1.jpg",
    date: "26. September 2023",
    datetime: "2023-09-26",
  },
];

export default function BlogSectionSmall() {
  return (
    <section id="Blog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary-dalu">
            Blog
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unsere aktuellen Beiträge
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.href}
              className="flex flex-col items-start justify-between cursor-pointer"
            >
              <div className="relative w-full cursor-pointer">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
