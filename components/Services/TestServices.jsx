"use client";

import {
  CommandLineIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ChartPieIcon,
  PhotoIcon,
  ShoppingBagIcon,
  CameraIcon,
  VideoCameraIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

import { useRef, useState, useEffect } from "react";

const features = [
  {
    name: "Webentwicklung",
    description:
      "Umsetzung von Webseiten jeglicher Art und in allen Größen. Jederzeit auf Wunsch skalier- und erweiterbar.",
    icon: CommandLineIcon,
    href: "/webentwicklung",
  },
  {
    name: "Shopsysteme",
    description:
      "Von der Erweiterung eines bestehenden Shopsystems bis hin zur Entwicklung passgenauer Individualsysteme.",
    icon: ShoppingBagIcon,
    href: "/shopsysteme",
  },
  {
    name: "Webdesign",
    description:
      "Von der einzelnen Komponente bis hin zur komplexen Unternehmenspräsenz bieten wir Ihnen im Webdesign alles.",
    icon: PaintBrushIcon,
    href: "/webdesign",
  },
  {
    name: "Grafikdesign",
    description:
      "Logos, Visitenkarten, Flyer und weitere Druckprodukte sowie digitale Werbeprodukte können bei uns in Auftrag gegeben werden.",
    icon: PhotoIcon,
    href: "/grafikdesign",
  },
  {
    name: "Fotografie",
    description:
      "Egal ob Hochzeitsbegleitung, Pärchen-Shootings, Produktfotografie oder Eventfotografie. Wir haben das Ziel, Ihre Wünsche voll und ganz zu erfüllen. ",
    icon: CameraIcon,
    href: "/fotografie",
  },
  {
    name: "Videografie",
    description:
      "Logos, Visitenkarten, Flyer und weitere Druckprodukte sowie digitale Werbeprodukte können bei uns in Auftrag gegeben werden.",
    icon: VideoCameraIcon,
    href: "/videografie",
  },
  {
    name: "Suchmaschinenoptimierung (SEO)",
    description:
      "In Suchmaschinen gefunden zu werden ist für ein Unternehmen von großer Bedeutung. Wir unterstützen Sie dabei gerne!",
    icon: MagnifyingGlassIcon,
    href: "/seo",
  },
  {
    name: "Social Media",
    description:
      "Egal ob einzelne oder mehrere Kampagnen. Wie unterstützen Sie bei Ihren online und offline Marketingkampagnen",
    icon: ChartPieIcon,
    href: "/socialmedia",
  },
  {
    name: "Digitale Speisekarte",
    description:
      "Wir erstellen individuelle und erweiterbare digitale Lösungen für Ihr Unternehmen. So ist alles jederzeit auf dem aktuellsten Stand.",
    icon: BuildingStorefrontIcon,
    href: "https://www.meinedigitalespeisekarte.de",
  },
];

// export function useIsVisible(ref) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) =>
//       setIntersecting(entry.isIntersecting)
//     );

//     observer.observe(ref.current);
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// }

export default function TestService() {
  // const ref = useRef();
  // const isVisible = useIsVisible(ref);

  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-secondary-dalu">
            Überblick
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unsere Dienstleistungen
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Wir bieten Ihnen eine große Auswahl an Dienstleistungen für Ihr
            Unternehmen oder Ihr anderweitiges Vorhaben.
          </p>
        </div>
        <div
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          // ref={ref}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                // className={
                //   isVisible
                //     ? "animate-fade-up animate-once animate-ease-out flex flex-col"
                //     : "flex flex-col"
                // }
                className={"flex flex-col group"}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-dalu">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-secondary-dalu transition-all group-hover:text-primary-dalu group-hover:pl-2 group-hover:transition-all"
                    >
                      Mehr erfahren{" "}
                      <span
                        aria-hidden="true"
                        className="hidden group-hover:inline-block"
                      >
                        →
                      </span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
