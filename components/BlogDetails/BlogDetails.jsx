import Image from "next/image";
import BlogFAQ from "../FAQ/BlogFAQ";

export default function BlogDetails({ data }) {
  return (
    <div className="w-full bg-white pb-24 pt-12 sm:pt-16">
      <div className="mx-auto max-w-3xl px-4 text-lg leading-8 text-navy/75 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {data.categories.map((tag, index) => (
            <div
              key={index}
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand"
            >
              {tag}
            </div>
          ))}
        </div>
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-navy sm:text-5xl">
          {data.headline}
        </h1>
        <p className="mt-4 text-sm text-navy/50">Veröffentlicht: {data.date}</p>
        <Image
          src={data.coverImage}
          width={800}
          height={500}
          alt=""
          className="mt-8 rounded-3xl w-full aspect-[3/2] object-cover"
        />
        <div className="RichTextContent">
          {data.content.map((cont, index) => (
            <div key={index}>
              {cont.headline && (
                <h4 className="pt-12 font-display text-2xl font-semibold text-navy">
                  {cont.headline}
                </h4>
              )}
              {cont.p.map((paragraph) => (
                <p key={paragraph.index} className="pt-6">
                  {paragraph.content}
                </p>
              ))}
            </div>
          ))}
          {data.blogfaq.display && (
            <>
              <h4 className="pt-12 font-display text-2xl font-semibold text-navy">
                {data.blogfaq.headline}
              </h4>
              <BlogFAQ data={data} />
            </>
          )}
        </div>
        <div className="relative mt-16 flex items-center gap-x-4 border-t border-navy/10 pt-10">
          <Image
            src={data.author.image}
            width={200}
            height={200}
            alt=""
            className="h-12 w-12 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6 pr-5">
            <p className="font-semibold text-navy">{data.author.name}</p>
            <p className="text-navy/60">{data.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
