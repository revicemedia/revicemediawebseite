import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { formatDate, mediaUrl } from "@/lib/cms";

/**
 * Vorschaukarte für einen Blogartikel.
 * `featured`: große Karte (Bild links, Text rechts) für den neuesten Artikel.
 */
export default function PostCard({ post, featured = false }) {
  const image = mediaUrl(post.coverImage, "card");
  const category = post.categories?.[0];

  return (
    <a
      href={`/blog/${post.slug}`}
      className={`group grid h-full overflow-hidden rounded-3xl border border-navy/10 bg-white transition-shadow hover:shadow-2xl hover:shadow-navy/10 ${
        featured ? "lg:grid-cols-2" : ""
      }`}
    >
      <div className="overflow-hidden bg-mist">
        {image && (
          <img
            src={image}
            alt={post.coverImage?.alt || ""}
            loading="lazy"
            className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      <div className={`flex flex-col ${featured ? "justify-center p-8 sm:p-12" : "p-6 sm:p-8"}`}>
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {category && (
            <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand">{category}</span>
          )}
          <time dateTime={post.publishedAt} className="text-navy/50">
            {formatDate(post.publishedAt)}
          </time>
        </div>
        <h3
          className={`mt-5 font-display font-semibold leading-tight text-navy transition-colors group-hover:text-brand ${
            featured ? "text-2xl sm:text-3xl" : "text-xl"
          }`}
        >
          {post.title}
        </h3>
        <p className={`mt-4 text-base leading-7 text-navy/60 ${featured ? "line-clamp-3" : "line-clamp-2"}`}>
          {post.excerpt}
        </p>
        <span className={`inline-flex items-center gap-2 text-sm font-semibold text-navy ${featured ? "mt-8" : "mt-auto pt-6"}`}>
          Weiterlesen
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}
