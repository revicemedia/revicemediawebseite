import { NewspaperIcon } from "@heroicons/react/24/outline";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import SubPageHeader from "@/components/SubPageHeader/SubPageHeader";
import Reveal from "@/components/Effects/Reveal";
import CTA from "@/components/ui/CTA";
import PostCard from "@/components/BlogSectionSmall/PostCard";
import { getPosts } from "@/lib/cms";

export const revalidate = 3600;

export const metadata = {
  title: "Blog – Tipps zu Web, Social Media & Marketing",
  description:
    "Wissen und Einblicke von Revice Media, deiner Werbeagentur aus Montabaur: Tipps zu Webseiten, Social Media, Fotografie, Video und Marketing.",
  alternates: { canonical: "/blog" },
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      <Navigation />
      <SubPageHeader
        eyebrow="Blog"
        headline="Wissen & Einblicke."
        text="Tipps, Hintergründe und Erfahrungen aus unserem Agenturalltag – rund um Web, Social Media, Foto & Video."
        icon={NewspaperIcon}
        breadcrumb={[{ name: "Blog" }]}
      />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {posts.length ? (
            <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal as="li" key={post.id} delay={(i % 3) * 80}>
                  <PostCard post={post} />
                </Reveal>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-navy/60">Bald gibt es hier die ersten Beiträge.</p>
          )}
        </div>
      </section>
      <CTA tight />
      <Footer />
    </main>
  );
}
