"use client";

import { useEffect, useState } from "react";
import CaseCard from "./CaseCard";
import { cases, categories } from "@/components/data/cases";

/**
 * Case-Übersicht mit Filter. Vorauswahl per URL möglich: /cases?kategorie=foto
 */
export default function CasesExplorer() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("kategorie");
    // Filter aus der URL einmalig nach dem Laden übernehmen (window gibt es erst im Browser)
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (param && categories.some((c) => c.key === param)) setActive(param);
  }, []);

  function select(key) {
    setActive(key);
    const url = new URL(window.location.href);
    if (key) url.searchParams.set("kategorie", key);
    else url.searchParams.delete("kategorie");
    window.history.replaceState(null, "", url);
  }

  const available = categories.filter((cat) =>
    cases.some((c) => c.categories.includes(cat.key))
  );
  const list = active ? cases.filter((c) => c.categories.includes(active)) : cases;

  return (
    <div>
      <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        <div className="flex w-max gap-2" role="tablist" aria-label="Cases filtern">
          {[{ key: null, label: "Alle" }, ...available].map((cat) => {
            const isActive = active === cat.key;
            const count = cat.key
              ? cases.filter((c) => c.categories.includes(cat.key)).length
              : cases.length;
            return (
              <button
                key={cat.label}
                role="tab"
                aria-selected={isActive}
                onClick={() => select(cat.key)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-navy text-white"
                    : "border border-navy/10 bg-white text-navy/70 hover:border-navy/30 hover:text-navy"
                }`}
              >
                {cat.label}
                <span
                  className={`rounded-full px-1.5 text-[11px] ${
                    isActive ? "bg-white/15" : "bg-mist text-navy/50"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {list.map((item, i) => (
          <div
            key={item.slug}
            className="animate-fade-up animate-duration-500"
            style={{ animationDelay: `${Math.min(i, 6) * 60}ms` }}
          >
            <CaseCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
