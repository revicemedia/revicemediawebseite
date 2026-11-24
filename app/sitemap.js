import { brand } from "@/brandConfig";
import { services } from "@/components/data/services";
import { cases } from "@/components/data/cases";
import { getPosts } from "@/lib/cms";

export const revalidate = 3600;

export default async function sitemap() {
  const posts = await getPosts();
  const base = brand.site.url;
  const now = new Date();
  const page = (path, priority = 0.7) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });

  return [
    page("/", 1),
    page("/werbeagentur-montabaur", 0.9),
    ...services.filter((s) => !s.external && s.href.startsWith("/")).map((s) => page(s.href, 0.8)),
    page("/cases", 0.8),
    ...cases.map((c) => page(`/cases/${c.slug}`, 0.6)),
    page("/wir-sind-revice", 0.6),
    page("/blog", 0.6),
    ...posts.map((p) => ({ ...page(`/blog/${p.slug}`, 0.5), lastModified: new Date(p.updatedAt) })),
    page("/impressum", 0.2),
  ];
}
