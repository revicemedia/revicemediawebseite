const posts = [
  {
    id: 1,
    title: "WAKE UP Festival 2023",
    href: "https://wakeupfestival.de/",
    imageUrl: "/LeFly_1.jpg",
    subHeadline: "Festivalfotografie",
    datetime: "2020-03-16",
  },
  {
    id: 2,
    title: "Eventbegleitung für Marcel Schink",
    href: "https://marcelschink.de",
    imageUrl: "/MSSchink.jpg",
    subHeadline: "Eventfotografie",
    datetime: "2020-03-16",
  },
  {
    id: 3,
    title: "Hochzeitsbegleitung",
    imageUrl: "/Hasan_Sabria.jpg",
    subHeadline: "Hochzeitsfotografie",
    datetime: "2020-03-16",
  },
];

export default function PhotoCustomers() {
  return (
    <div className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative group isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-96"
            >
              <img
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-bottom"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 group-hover:via-gray-900/60 via-gray-900/40 transition-all" />

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
                {post.href ? (
                  <a href={post.href} target="_blank">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                ) : (
                  <p>
                    <span className="absolute inset-0" />
                    {post.title}
                  </p>
                )}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
