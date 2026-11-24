import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  ArrowPathRoundedSquareIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import Reveal from "@/components/Effects/Reveal";

const features = [
  {
    name: "Schneller Projektstart",
    description:
      "Wir starten kurz nach deiner Anfrage mit der Planung und verschenken so keine kostbare Zeit.",
    icon: BoltIcon,
  },
  {
    name: "Alles aus einer Hand",
    description:
      "Web, App, Social, Foto, Video und Design aus einem Team – ein Ansprechpartner, ein Look.",
    icon: Squares2X2Icon,
  },
  {
    name: "Blitzschneller Support",
    description:
      "Über unseren Support-Chat beantworten wir deine Fragen während und nach dem Projekt.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Stetige Updates",
    description:
      "Moderne Technologien bedeuten: wichtige Updates landen schnell auch in deinem Projekt.",
    icon: ArrowPathRoundedSquareIcon,
  },
];

export default function Vorteile({ className = "" }) {
  return (
    <dl className={`grid gap-4 sm:grid-cols-2 ${className}`}>
      {features.map((feature, i) => (
        <Reveal
          key={feature.name}
          delay={i * 80}
          className="rounded-2xl border border-navy/10 bg-white p-6"
        >
          <dt className="flex items-center gap-3 font-display text-base font-semibold text-navy">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand">
              <feature.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            {feature.name}
          </dt>
          <dd className="mt-3 text-sm leading-6 text-navy/60">{feature.description}</dd>
        </Reveal>
      ))}
    </dl>
  );
}
