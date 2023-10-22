import {
  UsersIcon,
  PhoneIcon,
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Schneller Projektanlauf",
    description:
      "Wir starten mit der Planung Ihrer Projekte bereits kurz nach Ihrer Kontaktaufnahme mit unseren Kundenbetreuern und verschenken so keine kostbare Zeit.",
    icon: UsersIcon,
  },
  {
    name: "Blitzschneller Support",
    description:
      "Wir haben einen internen Support Chat, auf welchen Sie während und nach dem Abschluss des Projekts Zugriff erhalten. Hier beantworten wir Ihre Fragen blitzschnell.",
    icon: PhoneIcon,
  },
  {
    name: "Stetige Updates",
    description:
      "Da wir mit modernsten Technologien arbeiten, erhalten Sie wichtige Updates innerhalb kürzester Zeit auch in Ihrem Projekt. Mehr hierzu erfahren Sie während des Projekts.",
    icon: ArrowPathRoundedSquareIcon,
  },
];

export default function Vorteile() {
  return (
    <div className="bg-primary-dalu py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ihre Vorteile bei uns
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                    <feature.icon
                      className="h-6 w-6 text-primary-dalu"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-white">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
