import { brand } from "@/brandConfig";

export default function Hero() {
  return (
    <div className="bg-gray-900">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 animate-fade-up animate-ease-in-out animate-delay-300">
          <div className="text-center">
            <h1 className="text-4xl px-2 font-bold tracking-tight text-white sm:text-6xl">
              {brand.headlines.heroHeadline}
            </h1>
            <p className="mt-6 px-2 text-lg leading-8 text-gray-300">
              {brand.floatingText.heroDescription}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:hey@revice-media.com?subject=Allgemeine Anfrage"
                target="_blank"
                className="rounded-md bg-secondary-dalu px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dalu focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                {brand.cta.heroProjectRequest}
              </a>
              <a
                href="/#services"
                className="text-sm font-semibold leading-6 text-white hover:text-gray-200"
              >
                {brand.cta.heroLearnMore}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
