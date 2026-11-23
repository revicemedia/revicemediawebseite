"use client";

import { useCallback, useEffect, useState } from "react";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";

/**
 * Masonry-Galerie mit Lightbox (Pfeiltasten, Esc, Wischen auf Mobilgeräten).
 * `images`: [{ src, alt?, caption? }]
 */
export default function Gallery({ images, title = "" }) {
  const [index, setIndex] = useState(null);
  const [touchX, setTouchX] = useState(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const current = open ? images[index] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src + i}
            onClick={() => setIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl bg-mist focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <img
              src={img.src}
              alt={img.alt || `${title} – Bild ${i + 1}`}
              loading="lazy"
              className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/25 group-hover:opacity-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-lg">
                <ArrowsPointingOutIcon className="h-5 w-5" />
              </span>
            </span>
            {img.caption && (
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-navy">
                {img.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Bildansicht"
          className="fixed inset-0 z-[100] flex flex-col bg-navy-900/95 backdrop-blur-sm animate-fade animate-duration-200"
          onClick={close}
          onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX === null) return;
            const dx = e.changedTouches[0].clientX - touchX;
            if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
            setTouchX(null);
          }}
        >
          <div className="flex items-center justify-between px-4 py-4 text-sm text-white/70 sm:px-6">
            <span>
              {index + 1} / {images.length}
            </span>
            <button
              onClick={close}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <span className="sr-only">Schließen</span>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 sm:px-20">
            <img
              key={current.src}
              src={current.src}
              alt={current.alt || ""}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full rounded-xl object-contain shadow-2xl animate-fade animate-duration-300"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-3 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:flex"
                >
                  <span className="sr-only">Vorheriges Bild</span>
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-3 hidden h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:flex"
                >
                  <span className="sr-only">Nächstes Bild</span>
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
          {current.caption && (
            <p className="pb-6 text-center text-sm text-white/80">{current.caption}</p>
          )}
        </div>
      )}
    </>
  );
}
