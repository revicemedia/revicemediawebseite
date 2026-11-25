import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/Effects/Reveal";
import { LinkedInIcon } from "@/components/ui/SocialIcons";

const people = [
  {
    name: "Fabian Hanso",
    title: "Gründer",
    email: "f.hanso@revice-media.com?body=Hallo%20Fabian,",
    linkedin: "https://www.linkedin.com/in/fabian-hanso-2178a5185/",
    imageUrl: "/fabian.jpg",
  },
  {
    name: "Markus Nowak",
    title: "Gründer",
    email: "m.nowak@revice-media.com?body=Hallo%20Markus,",
    linkedin: "https://www.linkedin.com/in/markus-nowak-2b5681419",
    imageUrl: "/markus-nowak.jpg",
  },
  {
    name: "Luca Torres Neuer",
    title: "Kundenberatung & Projektleitung",
    email: "l.torres@revice-media.com?body=Hallo%20Luca,",
    linkedin: "https://www.linkedin.com/in/luca-torres-neuer",
    imageUrl: "", // Platzhalter – Foto folgt
  },
  // Vorerst ausgeblendet – zum Wiederherstellen Kommentarzeichen entfernen
  // {
  //   name: "Nico Kexel",
  //   title: "Kundenberatung & Projektleitung",
  //   email: "hey@revice-media.com?body=Hallo%20Nico,",
  //   linkedin: "https://www.linkedin.com/in/nico-kexel-4492941b8",
  //   imageUrl: "", // Platzhalter – Foto folgt
  // },
];

// Initialen für das Platzhalter-Bild
const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export default function TeamTest() {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Team"
          title="Die Köpfe hinter Revice"
          text="Wir finden: Man sollte wissen, mit wem man zusammenarbeitet."
        />
        <ul role="list" className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person, i) => {
            const actions = [
              { label: "E-Mail", href: `mailto:${person.email}`, icon: EnvelopeIcon },
              person.telephone && { label: "Anrufen", href: `tel:${person.telephone}`, icon: PhoneIcon },
              person.linkedin && { label: "LinkedIn", href: person.linkedin, icon: LinkedInIcon, external: true },
            ].filter(Boolean);
            return (
              <Reveal as="li" key={person.name} delay={i * 100} className="group overflow-hidden rounded-3xl bg-white">
                <div className="overflow-hidden">
                  {person.imageUrl ? (
                    <img
                      src={person.imageUrl}
                      alt={person.name}
                      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="relative isolate flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-navy">
                      <div
                        aria-hidden="true"
                        className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-brand/25 blur-3xl"
                      />
                      <span className="font-display text-6xl font-semibold tracking-tight text-white/90 transition-transform duration-700 group-hover:scale-105">
                        {initials(person.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-navy">{person.name}</h3>
                  <p className="text-sm text-brand">{person.title}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {actions.map((a) => (
                      <a
                        key={a.label}
                        href={a.href}
                        target={a.external ? "_blank" : undefined}
                        rel={a.external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-2 rounded-full border border-navy/10 px-4 py-2 text-xs font-semibold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                      >
                        <a.icon className="h-4 w-4" />
                        {a.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
