import Image from "next/image";
import BlogFAQ from "../FAQ/BlogFAQ";

export default function BlogDetails({ data }) {
  return (
    <div className="w-full py-8 mb-20 bg-white">
      <div className="max-w-3xl ml-auto mr-auto leading-7 text-base px-4 lg:px-8 text-gray-800">
        <div className="flex">
          {data.categories.map((tag, index) => (
            <div
              key={index}
              className="font-semibold text-secondary-dalu max-w-max pr-5"
            >
              {tag}
            </div>
          ))}
        </div>
        <h1 className="font-bold text-3xl text-gray-800 pt-2 sm:text-4xl">
          {data.headline}
        </h1>
        <p className="pt-4 text-gray-800">Veröffentlicht: {data.date}</p>
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
                <h4 className="text-xl font-bold text-gray-800 pt-12">
                  {cont.headline}
                </h4>
              )}
              {cont.p.map((paragraph) => (
                <p key={paragraph.index} className="pt-8 text-gray-800">
                  {paragraph.content}
                </p>
              ))}
            </div>
          ))}
          {data.blogfaq.display && (
            <>
              <h4 className="text-xl font-bold text-gray-800 pt-12">
                {data.blogfaq.headline}
              </h4>
              <BlogFAQ data={data} />
            </>
          )}
        </div>
        <div className="relative mt-12 pt-12 flex items-center gap-x-4">
          <Image
            src={data.author.image}
            width={200}
            height={200}
            alt=""
            className="h-12 w-12 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6 pr-5">
            <p className="font-semibold text-gray-900">{data.author.name}</p>
            <p className="text-gray-600">{data.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
