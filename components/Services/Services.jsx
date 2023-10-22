import {
  CommandLineIcon,
  PaintBrushIcon,
  MagnifyingGlassIcon,
  ChartPieIcon,
  PhotoIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Webentwicklung",
    description:
      "Umsetzung von Webseiten jeglicher Art und in allen Größen. Jederzeit auf Wunsch skalier- und erweiterbar.",
    icon: CommandLineIcon,
  },
  {
    name: "Shopsysteme",
    description:
      "Von der Erweiterung eines bestehenden Shopsystems bis hin zur Entwicklung passgenauer Individualsysteme.",
    icon: ShoppingBagIcon,
  },
  {
    name: "Webdesign",
    description:
      "Von der einzelnen Komponente bis hin zur komplexen Unternehmenspräsenz bieten wir Ihnen im Webdesign alles.",
    icon: PaintBrushIcon,
  },
  {
    name: "Grafikdesign",
    description:
      "Logos, Visitenkarten, Flyer und weitere Druckprodukte sowie digitale Werbeprodukte können bei uns in Auftrag gegeben werden.",
    icon: PhotoIcon,
  },
  {
    name: "Suchmaschinenoptimierung (SEO)",
    description:
      "In Suchmaschinen gefunden zu werden ist für ein Unternehmen von großer Bedeutung. Wir unterstützen Sie dabei gerne!",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Social Media",
    description:
      "Egal ob einzelne oder mehrere Kampagnen. Wie unterstützen Sie bei Ihren online und offline Marketingkampagnen",
    icon: ChartPieIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-white px-4 py-24 sm:py-32 lg:px-0">
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
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-dalu">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-dalu">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                {feature.name}
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
