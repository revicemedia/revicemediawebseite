import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";
import PostCard from "./PostCard";
import { getPosts } from "@/lib/cms";

// Blog-Vorschau auf der Startseite: neuester Artikel groß, zwei weitere darunter
export default async function BlogSectionSmall() {
  const posts = await getPosts({ limit: 3 });
  if (!posts.length) return null;
  const [latest, ...more] = posts;

  return (
    <section id="blog" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Blog" title="Wissen & Einblicke" />
          <a href="/blog" className="btn-secondary self-start sm:self-auto">
            Alle Beiträge
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-12 grid gap-8">
          <Reveal>
            <PostCard post={latest} featured />
          </Reveal>
          {more.length > 0 && (
            <div className="grid gap-8 md:grid-cols-2">
              {more.map((post, i) => (
                <Reveal key={post.id} delay={100 + i * 80}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
