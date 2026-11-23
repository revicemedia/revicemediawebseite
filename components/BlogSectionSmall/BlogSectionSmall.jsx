import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";

const posts = [
  {
    id: 1,
    title: "Warum ist eine Webseite auch heute noch so wichtig?",
    href: "/blog/warum-sind-webseiten-so-wichtig",
    description:
      "Auch zu Zeiten von Instagram, TikTok und Co. spielen Webseiten im professionellen Umfeld eine entscheidende Rolle. Potenzielle Kunden bekommen schnell einen Überblick über Produkte und Dienstleistungen …",
    imageUrl: "/BlogPost1.jpg",
    category: "Webentwicklung",
    date: "26. September 2023",
    datetime: "2023-09-26",
  },
];

export default function BlogSectionSmall() {
  return (
    <section id="blog" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Blog" title="Wissen & Einblicke" />
        <div className="mt-12 grid gap-8">
          {posts.map((post) => (
            <Reveal key={post.id}>
              <a
                href={post.href}
                className="group grid overflow-hidden rounded-3xl border border-navy/10 bg-white transition-shadow hover:shadow-2xl hover:shadow-navy/10 lg:grid-cols-2"
              >
                <div className="overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt=""
                    loading="lazy"
                    className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand">
                      {post.category}
                    </span>
                    <time dateTime={post.datetime} className="text-navy/50">
                      {post.date}
                    </time>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-navy transition-colors group-hover:text-brand sm:text-3xl">
                    {post.title}
                  </h3>
                  <p className="mt-4 line-clamp-3 text-base leading-7 text-navy/60">
                    {post.description}
                  </p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    Weiterlesen
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
