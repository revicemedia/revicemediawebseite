import Reveal from "@/components/Effects/Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  light = false,
  className = "",
  children,
}) {
  const centered = align === "center";
  return (
    <Reveal
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? "!text-brand-100 before:!bg-brand-100" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`h-section mt-4 ${light ? "!text-white" : ""}`}>{title}</h2>
      {text && (
        <p
          className={`mt-5 text-lg leading-8 ${light ? "text-white/70" : "text-navy/65"}`}
        >
          {text}
        </p>
      )}
      {children}
    </Reveal>
  );
}
