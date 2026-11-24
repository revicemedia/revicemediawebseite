"use client";

import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

/**
 * Inhaltsverzeichnis, das den aktuell gelesenen Abschnitt hervorhebt.
 * items: [{ id, title }]
 */
export default function TableOfContents({ items }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      // Abschnitt gilt als aktiv, sobald seine Überschrift ins obere Drittel scrollt
      const OFFSET = Math.max(160, window.innerHeight * 0.35);
      let current = null;
      for (const { id } of items) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= OFFSET) current = id;
      }
      // Ganz unten angekommen → letzten Abschnitt markieren
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && items.length) current = items[items.length - 1].id;
      setActive(current);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [items]);

  return (
    <nav aria-label="Inhalt" className="sticky top-28">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy/45">Inhalt</p>
      <ol className="mt-4 space-y-1 border-l border-navy/10">
        {items.map(({ id, title }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm leading-6 transition-colors ${
                  isActive
                    ? "border-navy font-semibold text-navy"
                    : "border-transparent text-navy/55 hover:border-navy/30 hover:text-navy"
                }`}
              >
                {title}
              </a>
            </li>
          );
        })}
      </ol>
      <a
        href="/blog"
        className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy/60 hover:text-navy"
      >
        <ArrowLeftIcon className="h-4 w-4" /> Alle Beiträge
      </a>
    </nav>
  );
}
