import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import { getPost, getPosts, mediaUrl } from "@/lib/cms";
import { brand } from "@/brandConfig";

// Neue Artikel ohne Neu-Deployment erreichbar; Änderungen werden per Hook neu erzeugt
export const dynamicParams = true;
export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const image = mediaUrl(post.coverImage, "large");
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const image = mediaUrl(post.coverImage, "large");
  const author = typeof post.author === "object" ? post.author : null;

  // Strukturierte Daten für Google (Artikel)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    image: image ? new URL(image, brand.site.url).toString() : undefined,
    author: author ? { "@type": "Person", name: author.name } : undefined,
    publisher: { "@type": "Organization", name: "Revice Media", url: brand.site.url },
    mainEntityOfPage: `${brand.site.url}/blog/${post.slug}`,
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <BlogDetails post={post} />
      <Footer />
    </main>
  );
}
