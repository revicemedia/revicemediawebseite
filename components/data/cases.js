/**
 * ─────────────────────────────────────────────────────────────
 *  CASES / REFERENZEN
 * ─────────────────────────────────────────────────────────────
 *  So legst du einen neuen Case an (Beispiel: Oberliga-Spiel):
 *
 *  1. Bilder in einen eigenen Ordner legen, z. B.
 *       public/cases/oberliga-heimspiel-2026/01.jpg, 02.jpg, …
 *     Tipp: lange Kante max. ~2000 px, JPG mit ~80 % Qualität.
 *
 *  2. Unten in `cases` einen Eintrag ergänzen (neueste oben):
 *
 *     {
 *       slug: "oberliga-heimspiel-2026",          // URL: /cases/oberliga-heimspiel-2026
 *       title: "Oberliga-Heimspiel gegen …",
 *       client: "Vereinsname",
 *       categories: ["foto"],                     // foto | video | web | app | social | design
 *       year: 2026,
 *       featured: true,                            // optional: auf Startseite zeigen
 *       cover: "/cases/oberliga-heimspiel-2026/01.jpg",
 *       excerpt: "Ein Satz für die Übersicht.",
 *       description: ["Absatz 1 …", "Absatz 2 …"],
 *       services: ["Sportfotografie", "Social-Media-Content"],
 *       link: "https://…",                         // optional
 *       instagram: "https://www.instagram.com/…/",  // optional: Button zum Profil
 *       mockup: { url: "domain.de", mobile: "/pfad/mobil.jpg" }, // optional: Cover als Browser (+ Handy) zeigen
 *       stats: [{ value: "+250 %", label: "Reichweite" }], // optional
 *       videos: [{ youtube: "VIDEO_ID", title: "Highlights" }], // optional
 *       gallery: galleryFrom("/cases/oberliga-heimspiel-2026", 24), // 01.jpg … 24.jpg
 *     },
 *
 *  Die Galerie kann auch einzeln gepflegt werden:
 *     gallery: ["/pfad/a.jpg", { src: "/pfad/b.jpg", alt: "Torjubel", caption: "1:0 in der 89." }]
 * ─────────────────────────────────────────────────────────────
 */

export const categories = [
  { key: "web", label: "Web" },
  { key: "app", label: "App" },
  { key: "social", label: "Social Media" },
  { key: "foto", label: "Fotografie" },
  { key: "video", label: "Video" },
  { key: "design", label: "Grafikdesign" },
];

/** Erzeugt ["/ordner/01.jpg", "/ordner/02.jpg", …] */
export function galleryFrom(folder, count, ext = "jpg") {
  return Array.from(
    { length: count },
    (_, i) => `${folder}/${String(i + 1).padStart(2, "0")}.${ext}`
  );
}

const allCases = [
  {
    slug: "2die4-sports",
    hidden: true, // vorerst ausgeblendet
    title: "Onlineshop für Paintball & Airsoft",
    client: "2DIE4 Sports, Westerburg",
    categories: ["web"],
    featured: true,
    cover: "/cases/2die4-sports/01.jpg",
    excerpt:
      "Shopify-Shop mit individuellen Erweiterungen für den Paintball- und Airsoft-Spezialisten aus dem Westerwald.",
    description: [
      "2DIE4 Sports ist Spezialist für Paintball (Tournament & MagFed) und Airsoft – mit einem Ladenlokal in Westerburg und einem neuen Onlineshop für Kunden in ganz Deutschland.",
      "Für den Shop haben wir das Shopify-Theme „Enterprise“ umfassend angepasst und um eigene Sections erweitert: einen filterbaren Event-Kalender für Spieltage und BigGames, eingebundene Google-Bewertungen, einen Hinweis auf versandkostenfreie Bestellungen, einen Einsteiger-Guide sowie eine Altersverifikation für den Airsoft-Bereich.",
      "Das Ergebnis ist ein Shop, der sich wie die Szene anfühlt: laut, schnell und übersichtlich – vom ersten Markierer bis zum kompletten Team-Setup.",
    ],
    services: ["Shopify-Shop", "Theme-Entwicklung", "Webdesign", "Shop-Setup"],
    link: "https://2die4-sports.myshopify.com/",
    linkLabel: "Shop ansehen",
    // Darstellung als Browser + Smartphone in der Showcase-Ansicht
    mockup: { url: "2die4-sports.myshopify.com", mobile: "/cases/2die4-sports/05.jpg" },
    instagram: "https://www.instagram.com/2die4sports/",
    gallery: [
      { src: "/cases/2die4-sports/01.jpg", alt: "Startseite des 2DIE4-Onlineshops" },
      { src: "/cases/2die4-sports/02.jpg", alt: "Produkt-Slider „Neu im Shop“" },
      { src: "/cases/2die4-sports/03.jpg", alt: "Eigener Event-Kalender für Spieltage und BigGames" },
      { src: "/cases/2die4-sports/04.jpg", alt: "Eingebundene Google-Bewertungen" },
      { src: "/cases/2die4-sports/05.jpg", alt: "Mobile Ansicht des Shops" },
    ],
  },
  {
    slug: "jsg-waeller-united",
    title: "Rundumbetreuung im Jugendfußball",
    client: "JSG Wäller United",
    categories: ["social", "foto", "video", "design"],
    featured: true,
    cover: "/cases/jsg-waeller-united/cover.jpg",
    excerpt:
      "Vom Logo über die komplette CI bis zum Instagram-Kanal: Wir geben der JSG ein Gesicht.",
    description: [
      "JSG Wäller United ist die Jugendspielgemeinschaft aus dem Westerwald – für alle, die Fußball nicht nur spielen, sondern leben wollen. Die A-Jugend spielt in der Rheinlandliga, die A-Jugend II in der Kreisoberliga.",
      "Am Anfang stand der Markenauftritt: Wir haben das Logo entwickelt und daraus Corporate Identity und Corporate Design abgeleitet – Farben, Typografie und Gestaltungsregeln, die vom Trikot bis zum Social-Media-Post funktionieren. Seitdem versorgen wir den Verein laufend mit Grafiken, etwa für Spieltage, Ergebnisse, Neuzugänge und Sponsoren.",
      "Außerdem betreuen wir den Instagram-Kanal der JSG: von Spieltagsfotos und Action-Bildern über Mannschafts- und Spielerportraits bis zu Kampagnen rund um Trikots und Sponsoren. Design, Fotografie, Video und Posting kommen dabei aus einer Hand.",
      "Das Ergebnis: Der Kanal übertrifft Reichweite und Erwartungen des Vereins bei Weitem – und gibt Spielern, Eltern, Fans und Sponsoren einen Ort, an dem der Verein sichtbar wird.",
    ],
    // Optional: echte Kennzahlen ergänzen, werden dann als Kacheln angezeigt
    // stats: [{ value: "+000 %", label: "Reichweite" }, { value: "0.000", label: "Follower" }],
    services: [
      "Logo-Entwicklung",
      "Corporate Identity & Design",
      "Grafiken",
      "Social-Media-Betreuung",
      "Content-Produktion",
      "Sportfotografie",
      "Videografie",
    ],
    instagram: "https://www.instagram.com/waeller_united/",
    // Optional: von uns entwickeltes Logo, wird im Steckbrief gezeigt
    logo: "/cases/jsg-waeller-united/logo.svg",
    gallery: galleryFrom("/cases/jsg-waeller-united", 13),
  },
  {
    slug: "haarkulade",
    title: "Markenauftritt für einen Friseursalon",
    client: "Haarkulade, Westerburg",
    categories: ["design"],
    cover: "/cases/haarkulade/cover.jpg",
    excerpt: "Vom Logo bis zur Stempelkarte: ein eleganter, eigenständiger Auftritt für den Friseursalon in Westerburg.",
    description: [
      "Für den Friseursalon Haarkulade in Westerburg haben wir den kompletten Markenauftritt entwickelt.",
      "Herzstück ist das Logo: ein handschriftliches „H“ mit integrierter Schere, kombiniert mit einer klaren, großzügig gesetzten Wortmarke. Es verbindet Handwerk und Eleganz und funktioniert auf der Ladenfront genauso wie im Instagram-Profil.",
      "Dazu haben wir Farbgebung und Typografie festgelegt, damit vom Social-Media-Post bis zur Visitenkarte alles wie aus einem Guss wirkt.",
      "Auf dieser Basis haben wir die Drucksachen des Salons gestaltet, darunter Visitenkarten und Stempelkarten für Stammkunden, und den Druck direkt über uns abgewickelt. Der Salon bekam damit alles aus einer Hand, vom ersten Entwurf bis zur fertigen Karte.",
    ],
    services: ["Logo-Entwicklung", "Farbgebung", "Typografie", "Corporate Design", "Visitenkarten & Stempelkarten", "Druckabwicklung"],
    instagram: "https://www.instagram.com/haarkulade_westerburg/",
    logo: "/cases/haarkulade/logo.svg",
    gallery: ["/cases/haarkulade/cover.jpg"],
  },
  {
    slug: "logopaedie-anita-hanso",
    title: "Webseite für eine logopädische Praxis",
    client: "Logopädie Anita Hanso",
    categories: ["web"],
    featured: true,
    cover: "/cases/logopaedie-anita-hanso/cover.jpg",
    excerpt: "Eine klare, freundliche Praxis-Webseite, auf der Patienten und Interessenten schnell finden, was sie suchen.",
    description: [
      "Für die logopädische Praxis von Anita Hanso haben wir die Webseite komplett neu aufgesetzt – modern, übersichtlich und auf jedem Gerät schnell erreichbar.",
      "Im Mittelpunkt stehen die Leistungen der Praxis: Patienten und Angehörige sehen auf einen Blick, welche Therapien angeboten werden, und finden ohne Umwege den Kontakt. Team und Praxis stellen sich persönlich vor und schaffen Vertrauen schon vor dem ersten Termin.",
      "Außerdem bietet die Seite einen eigenen Bereich für offene Stellen. So können Interessierte, die Teil des Teams werden möchten, sich direkt über Job-Möglichkeiten informieren.",
      "Über die Webseite hinaus betreuen wir die Praxis in den Bereichen Telekommunikation und Digitalisierung und sorgen dafür, dass auch die Abläufe hinter den Kulissen modern und zuverlässig laufen.",
    ],
    services: ["Webdesign", "Webentwicklung", "Karrierebereich", "Telekommunikation", "Digitalisierung"],
    link: "https://anitahanso.de",
    gallery: ["/anitahanso_image.jpg"],
  },
  {
    slug: "hochzeitsbegleitung",
    hidden: true, // vorerst ausgeblendet
    title: "Hochzeitsbegleitung",
    client: "Privat",
    categories: ["foto"],
    cover: "/Hasan_Sabria.jpg",
    excerpt: "Einfühlsame Begleitung eines ganz besonderen Tages.",
    description: [
      "Vom Getting Ready bis zur Party: Wir haben ein Brautpaar an seinem großen Tag begleitet und die schönsten Momente festgehalten.",
    ],
    services: ["Hochzeitsfotografie"],
    gallery: ["/Hasan_Sabria.jpg"],
  },
  {
    slug: "delay-sports",
    hidden: true, // vorerst ausgeblendet
    title: "Webseiten-Konzept für Delay Sports",
    client: "Delay Sports, Berlin",
    categories: ["web"],
    cover: "/delay.jpg",
    excerpt: "Ein Vorschlag für den neuen Webauftritt des Berliner Vereins.",
    description: [
      "Für den Berliner Verein Delay Sports haben wir einen Vorschlag für einen modernen Webauftritt entworfen und als funktionsfähigen Prototyp umgesetzt.",
    ],
    services: ["Konzept", "Webentwicklung"],
    link: "https://delaysports.dalu-services.com/",
    gallery: ["/delay.jpg"],
  },

  /* ───── Vorerst ausgeblendet (hidden: true entfernen, um sie wieder zu zeigen) ───── */
  {
    slug: "wake-up-festival-2023",
    hidden: true,
    title: "WAKE UP Festival 2023",
    client: "WAKE UP Festival",
    categories: ["foto"],
    year: 2023,
    cover: "/LeFly_1.jpg",
    excerpt: "Festivalfotografie zwischen Bühne, Graben und Publikum.",
    description: [
      "Beim WAKE UP Festival 2023 waren wir als Fotografen mittendrin: auf und vor der Bühne, im Fotograben und zwischen den Besuchern.",
      "Entstanden sind Bilder, die die Energie der Bands und die Stimmung des Festivals einfangen – für Social Media, Presse und die Erinnerung.",
    ],
    services: ["Festivalfotografie", "Bildbearbeitung"],
    link: "https://wakeupfestival.de/",
    gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => `/Fotografie/${n}.jpg`),
  },
  {
    slug: "marcel-schink",
    hidden: true,
    title: "Webseite, Logo & Eventfotografie",
    client: "Marcel Schink",
    categories: ["web", "design", "foto"],
    cover: "/Schink.jpg",
    excerpt: "Ein Auftritt aus einer Hand: Webseite, Logodesign und fotografische Begleitung.",
    description: [
      "Für Marcel Schink haben wir den kompletten Auftritt aus einer Hand umgesetzt: vom Logo über die Webseite bis zur fotografischen Begleitung von Events.",
      "So entstand ein einheitliches Erscheinungsbild, das online wie offline wiedererkennbar ist.",
    ],
    services: ["Webentwicklung", "Logodesign", "Eventfotografie"],
    link: "https://marcelschink.de",
    gallery: ["/Schink.jpg", "/MSSchink.jpg"],
  },
];

/** Nur sichtbare Cases werden auf der Seite verwendet */
export const cases = allCases.filter((c) => !c.hidden);

/* ───────────── Helfer ───────────── */

export function getCase(slug) {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByCategory(key) {
  return key ? cases.filter((c) => c.categories.includes(key)) : cases;
}

export function getFeaturedCases(limit = 3) {
  const featured = cases.filter((c) => c.featured);
  return (featured.length ? featured : cases).slice(0, limit);
}

export function categoryLabel(key) {
  return categories.find((c) => c.key === key)?.label || key;
}

export function normalizeImage(item) {
  return typeof item === "string" ? { src: item, alt: "" } : item;
}
