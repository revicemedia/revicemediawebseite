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
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

/**
 * Zentrale Pflege aller Leistungen.
 * - `focus: true`  → erscheint als Schwerpunkt (große Karte auf der Startseite)
 * - `page`         → Inhalte der jeweiligen Unterseite (components/ServicePage)
 * - `caseCategory` → welche Cases auf der Unterseite gezeigt werden (siehe data/cases.js)
 */

const defaultProcess = [
  {
    title: "Kennenlernen",
    text: "Im kostenlosen Erstgespräch klären wir Ziele, Zielgruppe, Budget und Zeitrahmen.",
  },
  {
    title: "Konzept",
    text: "Wir erarbeiten gemeinsam mit dir ein Konzept, das genau zu deinem Vorhaben passt.",
  },
  {
    title: "Umsetzung",
    text: "Wir setzen um – transparent, mit festen Ansprechpartnern und regelmäßigen Zwischenständen.",
  },
  {
    title: "Go Live & Betreuung",
    text: "Nach deiner Freigabe geht alles live. Auch danach sind wir bei Fragen für dich da.",
  },
];

const allServices = [
  /* ───────────────────────── Schwerpunkte ───────────────────────── */
  {
    slug: "webentwicklung",
    name: "Webentwicklung",
    href: "/webentwicklung",
    icon: CommandLineIcon,
    focus: true,
    caseCategory: "web",
    tagline: "Schnelle, moderne Webseiten & Web-Apps",
    description:
      "Vom OnePager bis zur umfangreichen Unternehmensseite – performant, sicher und jederzeit erweiterbar.",
    page: {
      headline: "Webseiten, die schnell sind, gut aussehen und verkaufen.",
      intro:
        "Webentwicklung ist ein großer Begriff. Wir kümmern uns um sämtliche Webseiten – von der kleinen Info-Seite für ein Produkt bis hin zur Multi-Page-Webseite mit diversen Unterseiten und Verzweigungen.",
      body: [
        "Nach einem ersten Kennenlernen legst du gemeinsam mit uns den Grundstein für deine neue Webseite und wirst bei jedem Schritt betreut und individuell beraten. Webseiten sollten von Anfang an gut durchdacht und auf die spätere Zielgruppe abgestimmt sein.",
        "Wir nutzen keine veralteten Baukästen, sondern setzen auf modernste Technologien wie Next.js und Cloud Hosting. So hast du auch langfristig die Möglichkeit, bestehende Komponenten zu nutzen, anzupassen oder weiterzuentwickeln.",
      ],
      tags: ["Next.js", "React", "Cloud Hosting", "Responsive", "SEO-ready"],
      deliverables: [
        { title: "Unternehmenswebseiten", text: "Dein professioneller Auftritt mit allen Unterseiten, die deine Kunden brauchen." },
        { title: "OnePager & Landingpages", text: "Kompakte Seiten für Produkte, Events oder Kampagnen – in kürzester Zeit online." },
        { title: "Web-Apps & Portale", text: "Individuelle Anwendungen im Browser, z. B. Buchungs- oder Kundenportale." },
        { title: "Inhalte selbst pflegen", text: "Auf Wunsch binden wir ein CMS an, damit du Texte und Bilder selbst ändern kannst." },
        { title: "Performance & SEO-Basis", text: "Kurze Ladezeiten, saubere Struktur und Meta-Daten ab dem ersten Tag." },
        { title: "Hosting & Wartung", text: "Wir kümmern uns um Server, Updates und Sicherheit – du dich um dein Geschäft." },
      ],
      faq: [
        {
          q: "Kann mein bestehender Hosting-Anbieter genutzt werden?",
          a: "Solange dein Hosting-Anbieter moderne Webtechnologien wie Node.js unterstützt, ist das kein Problem. Andernfalls finden wir gemeinsam eine passende Lösung.",
        },
        {
          q: "Können bestehende Inhalte übernommen werden?",
          a: "Selbstverständlich. Texte, Bilder und Inhalte deiner aktuellen Seite oder Werbemittel übernehmen wir gerne.",
        },
        {
          q: "Wie lange dauert die Umsetzung?",
          a: "Das hängt vom Umfang ab. OnePager liefern wir in der Regel innerhalb einer Woche, größere Projekte planen wir nach dem Erstgespräch verbindlich.",
        },
      ],
    },
  },
  {
    slug: "app-entwicklung",
    name: "App-Entwicklung",
    href: "/app-entwicklung",
    icon: DevicePhoneMobileIcon,
    focus: true,
    caseCategory: "app",
    tagline: "Apps für iOS, Android & Web",
    description:
      "Von der Idee bis in den App Store: mobile Apps und Web-Apps, die sich gut anfühlen und mit dir wachsen.",
    page: {
      headline: "Apps, die deine Kunden wirklich gerne nutzen.",
      intro:
        "Von der ersten Idee bis zur Veröffentlichung im App Store und bei Google Play: Wir entwickeln mobile Apps und Web-Apps, die sich modern anfühlen und mit deinem Unternehmen mitwachsen.",
      body: [
        "Wir starten nicht mit Code, sondern mit deinen Nutzern. In Workshops und Klick-Prototypen klären wir früh, welche Funktionen wirklich gebraucht werden – so investierst du nur in das, was einen Unterschied macht.",
        "Mit plattformübergreifenden Technologien entwickeln wir eine gemeinsame Codebasis für iOS und Android. Das spart Zeit und Budget und sorgt dafür, dass neue Funktionen auf allen Geräten gleichzeitig ankommen.",
      ],
      tags: ["iOS", "Android", "Cross-Platform", "Web-Apps", "Schnittstellen"],
      deliverables: [
        { title: "iOS & Android Apps", text: "Eine App für beide Plattformen – mit nativem Look & Feel." },
        { title: "Web-Apps & PWAs", text: "Apps, die direkt im Browser laufen und sich wie eine echte App installieren lassen." },
        { title: "Prototypen & MVPs", text: "Ideen schnell testbar machen, bevor das große Budget fließt." },
        { title: "UI/UX Design", text: "Intuitive Oberflächen, die zu deiner Marke passen." },
        { title: "Backend & Schnittstellen", text: "Anbindung an bestehende Systeme, Datenbanken und Drittanbieter." },
        { title: "Store-Release & Updates", text: "Wir begleiten die Veröffentlichung und halten deine App aktuell." },
      ],
      process: [
        { title: "Idee & Workshop", text: "Wir schärfen gemeinsam Ziel, Zielgruppe und Kernfunktionen deiner App." },
        { title: "Prototyp", text: "Ein klickbarer Prototyp macht die App greifbar, bevor entwickelt wird." },
        { title: "Entwicklung", text: "In kurzen Etappen mit regelmäßigen Testversionen auf deinem Smartphone." },
        { title: "Release & Wachstum", text: "Veröffentlichung in den Stores, danach Updates und neue Features." },
      ],
      faq: [
        {
          q: "Brauche ich eine native App oder reicht eine Web-App?",
          a: "Das hängt davon ab, welche Gerätefunktionen du benötigst und wie deine Nutzer die App finden sollen. Wir beraten dich ehrlich – manchmal ist eine Web-App die bessere und günstigere Wahl.",
        },
        {
          q: "Was kostet eine App?",
          a: "Das hängt stark vom Funktionsumfang ab. Nach dem Workshop bekommst du ein transparentes Angebot – gerne auch in Ausbaustufen, beginnend mit einem MVP.",
        },
        {
          q: "Kümmert ihr euch auch um die Veröffentlichung?",
          a: "Ja. Wir begleiten den gesamten Prozess bis in den App Store und Google Play Store und unterstützen auch nach dem Launch.",
        },
      ],
    },
  },
  {
    slug: "socialmedia",
    name: "Social Media",
    href: "/socialmedia",
    icon: ChartPieIcon,
    focus: true,
    caseCategory: "social",
    tagline: "Content, Kampagnen & Community",
    description:
      "Von der einzelnen Kampagne bis zur kompletten Betreuung deiner Kanäle – mit Content, der auffällt.",
    page: {
      headline: "Gemeinsam zum Social-Media-Auftritt, über den man spricht.",
      intro:
        "Ein professioneller Social-Media-Auftritt ist für Unternehmen nicht mehr wegzudenken und zählt zu den wichtigsten Werbekanälen unserer Zeit. Wir unterstützen dich von der einzelnen Kampagne bis hin zur kompletten Betreuung deiner Kanäle.",
      body: [
        "Netzwerke wie Instagram, TikTok und LinkedIn haben großen Einfluss auf Verkaufszahlen. Zielgruppenorientierter Content steigert das Kaufinteresse und stärkt eine Marke, ein Produkt oder ein Unternehmen langfristig.",
        "Weil Foto und Video bei uns im Haus sind, entsteht dein Content aus einer Hand: Wir planen, drehen, schneiden und veröffentlichen – und behalten dabei die Zahlen im Blick.",
      ],
      tags: ["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube"],
      deliverables: [
        { title: "Strategie & Redaktionsplan", text: "Klare Ziele, passende Formate und ein Plan, der funktioniert." },
        { title: "Content-Produktion", text: "Reels, TikToks, Fotos und Grafiken – produziert von unserem eigenen Team." },
        { title: "Kanal-Betreuung", text: "Wir veröffentlichen, moderieren und antworten deiner Community." },
        { title: "Kampagnen & Ads", text: "Bezahlte Kampagnen, die genau deine Zielgruppe erreichen." },
        { title: "Reporting", text: "Verständliche Auswertungen: Was funktioniert, was nicht – und warum." },
        { title: "Workshops", text: "Du möchtest Social Media selbst verstehen? Wir zeigen dir, wie es geht." },
      ],
      process: [
        { title: "Analyse", text: "Wir schauen uns deine Kanäle, deine Zielgruppe und deinen Wettbewerb an." },
        { title: "Strategie", text: "Formate, Tonalität und Redaktionsplan – abgestimmt auf deine Ziele." },
        { title: "Produktion", text: "Shooting- und Drehtage, Schnitt und Gestaltung aus einer Hand." },
        { title: "Posten & Optimieren", text: "Wir veröffentlichen, messen und verbessern kontinuierlich." },
      ],
      faq: [
        {
          q: "Muss ich meine Kanäle komplett abgeben?",
          a: "Nein. Von der einzelnen Kampagne über regelmäßige Content-Pakete bis zur vollständigen Betreuung ist alles möglich.",
        },
        {
          q: "Produziert ihr den Content selbst?",
          a: "Ja. Foto, Video und Grafik kommen aus unserem Team – das spart Abstimmungen und sorgt für einen einheitlichen Look.",
        },
        {
          q: "Welche Plattformen betreut ihr?",
          a: "Vor allem Instagram, TikTok, LinkedIn, Facebook und YouTube. Welche Kanäle für dich Sinn ergeben, besprechen wir gemeinsam.",
        },
      ],
    },
  },
  {
    slug: "fotografie",
    name: "Fotografie",
    href: "/fotografie",
    icon: CameraIcon,
    focus: true,
    caseCategory: "foto",
    tagline: "Sport, Events, Business & mehr",
    description:
      "Wir fangen besondere Momente ein – auf dem Platz, auf der Bühne, im Unternehmen oder bei deiner Hochzeit.",
    page: {
      headline: "Wir fangen Momente ein, die bleiben.",
      intro:
        "Unsere Fotografen haben ein Auge für besondere Momente – ob am Spielfeldrand, im Festival-Graben oder bei deiner Hochzeit. Die Bilder bekommst du innerhalb kürzester Zeit.",
      body: [
        "Egal ob Sportfotografie, Eventbegleitung, Hochzeit, Pärchen-Shooting oder Produktfotografie: Unser Ziel ist es, deine Wünsche voll und ganz zu erfüllen. Die ersten Bilder bekommst du bereits am Tag nach deiner Veranstaltung – je nach Absprache auch schon am gleichen Tag.",
        "Wir arbeiten hauptsächlich in Montabaur, im Westerwald und im Raum Koblenz / Limburg, sind aber auch darüber hinaus für dich unterwegs. Schreib uns einfach dein Wunschdatum.",
      ],
      tags: ["Sport", "Events & Konzerte", "Hochzeiten", "Business", "Produkte"],
      deliverables: [
        { title: "Sport & Vereine", text: "Spieltage, Mannschaftsfotos und Action-Bilder für Verein, Presse und Social Media." },
        { title: "Events & Konzerte", text: "Festivals, Konzerte und Firmenevents – nah dran und voller Atmosphäre." },
        { title: "Hochzeiten & Paare", text: "Einfühlsame Begleitung eures großen Tages und entspannte Paar-Shootings." },
        { title: "Business & Portrait", text: "Team- und Mitarbeiterfotos, die dein Unternehmen sympathisch zeigen." },
        { title: "Produktfotografie", text: "Saubere Produktbilder für Onlineshop, Katalog und Werbung." },
        { title: "Schnelle Lieferung", text: "Erste Bilder oft schon am Folgetag – bearbeitet und einsatzbereit." },
      ],
      process: [
        { title: "Anfrage", text: "Du nennst uns Anlass, Datum und Ort – wir melden uns schnellstmöglich." },
        { title: "Abstimmung", text: "Wir klären Bildstil, wichtige Motive und den Ablauf vor Ort." },
        { title: "Shooting", text: "Wir sind vor Ort und halten die entscheidenden Momente fest." },
        { title: "Bearbeitung & Lieferung", text: "Professionell bearbeitete Bilder in einer Online-Galerie." },
      ],
      faq: [
        {
          q: "Wie schnell bekomme ich die Bilder?",
          a: "Die ersten Bilder bekommst du in der Regel am Tag nach dem Termin, in Einzelfällen und nach Absprache auch schon am gleichen Tag.",
        },
        {
          q: "In welcher Region seid ihr unterwegs?",
          a: "Hauptsächlich im Raum Koblenz / Limburg / Montabaur. Anfragen außerhalb dieser Region sind nach Absprache möglich.",
        },
        {
          q: "Dürfen wir die Bilder für Social Media und Presse nutzen?",
          a: "Ja. Die Nutzungsrechte stimmen wir vorab mit dir ab – für Vereine und Unternehmen inklusive Social Media und Pressearbeit.",
        },
      ],
    },
  },
  {
    slug: "videografie",
    name: "Videografie",
    href: "/videografie",
    icon: VideoCameraIcon,
    focus: true,
    caseCategory: "video",
    tagline: "Imagefilme, Reels & Aftermovies",
    description:
      "Bewegte Bilder, die Emotionen wecken – vom kurzen Reel bis zum Imagefilm für dein Unternehmen.",
    page: {
      headline: "Bewegte Bilder, die deine Geschichte erzählen.",
      intro:
        "Video ist das reichweitenstärkste Format im Netz. Wir produzieren Imagefilme, Social-Media-Clips und Aftermovies, die im Gedächtnis bleiben – von der Idee bis zum fertigen Schnitt.",
      body: [
        "Ein gutes Video beginnt lange vor dem Dreh: Wir entwickeln mit dir die Idee, schreiben das Konzept und planen den Drehtag so, dass er für alle Beteiligten entspannt bleibt.",
        "Am Ende bekommst du dein Video in allen Formaten, die du brauchst – im Querformat für Webseite und YouTube, im Hochformat für Reels und TikTok.",
      ],
      tags: ["Imagefilm", "Reels & TikTok", "Aftermovie", "Sport-Highlights", "Interviews"],
      deliverables: [
        { title: "Imagefilme", text: "Zeig, wer du bist – authentisch und hochwertig produziert." },
        { title: "Social Clips & Reels", text: "Kurze, schnelle Formate im Hochformat für Instagram und TikTok." },
        { title: "Event- & Aftermovies", text: "Die Stimmung deines Events in wenigen Minuten eingefangen." },
        { title: "Sport-Highlights", text: "Tore, Emotionen und Spielszenen für deinen Verein und eure Fans." },
        { title: "Interviews & Testimonials", text: "Kunden, Mitarbeitende oder Gründer kommen selbst zu Wort." },
        { title: "Schnitt & Color Grading", text: "Professionelle Postproduktion inklusive Musik und Untertiteln." },
      ],
      process: [
        { title: "Idee", text: "Wir entwickeln die Story und das passende Format für deine Ziele." },
        { title: "Planung", text: "Drehbuch, Drehorte und Zeitplan – alles vorbereitet." },
        { title: "Dreh", text: "Unser Team produziert vor Ort mit professionellem Equipment." },
        { title: "Schnitt & Ausspielung", text: "Postproduktion und Export in alle benötigten Formate." },
      ],
      faq: [
        {
          q: "Wie lang sollte ein Video sein?",
          a: "Für Social Media meist 15–60 Sekunden, Imagefilme ein bis drei Minuten. Wir beraten dich je nach Ziel und Plattform.",
        },
        {
          q: "Bekomme ich auch Hochformat-Versionen?",
          a: "Ja, auf Wunsch schneiden wir dein Material in verschiedene Formate – z. B. 16:9 für YouTube und 9:16 für Reels.",
        },
        {
          q: "Könnt ihr Foto und Video am gleichen Tag produzieren?",
          a: "Ja, das ist sogar besonders effizient. So entsteht an einem Termin Material für Webseite, Social Media und Presse.",
        },
      ],
    },
  },

  /* ───────────────────────── Weitere Leistungen ───────────────────────── */
  {
    slug: "grafikdesign",
    name: "Grafikdesign",
    href: "/grafikdesign",
    icon: PhotoIcon,
    caseCategory: "design",
    tagline: "Logos, Corporate Design & Print",
    description:
      "Logos, Visitenkarten, Flyer und weitere Druck- sowie digitale Werbeprodukte aus einer Hand.",
    page: {
      headline: "Gemeinsam geben wir deinem Unternehmen ein Gesicht.",
      intro:
        "Fast jedes Unternehmen profitiert von einem passenden Logo, einer klaren Farbwelt und einheitlichen Werbemitteln – kurz: von einem durchdachten Corporate Design.",
      body: [
        "Durch unsere erfahrenen Mediengestalter bekommst du innerhalb kürzester Zeit nicht nur erste Entwürfe, sondern auch fertige Druckvorlagen oder ausgearbeitete digitale Werbemittel für Social Media und deine Webseite.",
        "Du entscheidest, wo du drucken lässt. Wir arbeiten mit einer regionalen Druckerei zusammen, unterstützen dich auf Wunsch aber auch bei der Bestellung bei einer Onlinedruckerei deiner Wahl.",
      ],
      tags: ["Logo", "Corporate Design", "Print", "Social Templates"],
      deliverables: [
        { title: "Logo & Markenzeichen", text: "Ein Zeichen, das dein Unternehmen auf den Punkt bringt." },
        { title: "Corporate Design", text: "Farben, Schriften und Regeln für einen einheitlichen Auftritt." },
        { title: "Geschäftsausstattung", text: "Visitenkarten, Briefpapier und Signaturen." },
        { title: "Flyer, Plakate & Banner", text: "Druckfertige Werbemittel für jeden Anlass." },
        { title: "Social-Media-Vorlagen", text: "Templates, mit denen deine Posts immer nach dir aussehen." },
        { title: "Druckabwicklung", text: "Auf Wunsch kümmern wir uns um die Produktion deiner Druckprodukte." },
      ],
    },
  },
  {
    slug: "webdesign",
    name: "Webdesign",
    href: "/webdesign",
    icon: PaintBrushIcon,
    caseCategory: "web",
    tagline: "UI/UX für Web & App",
    description:
      "Von der einzelnen Komponente bis zur kompletten Unternehmenspräsenz – durchdacht gestaltet.",
    page: {
      headline: "Design, das gut aussieht – und funktioniert.",
      intro:
        "Egal ob einzelne Komponente oder komplexe Webanwendung: Wir helfen dir bei der passgenauen und Styleguide-konformen Gestaltung deiner digitalen Produkte.",
      body: [
        "Auf Wunsch erstellen wir passende responsive Darstellungen. Lieferst du zum Beispiel ein Desktop-Design, kümmern wir uns um die Gestaltung für mobile Endgeräte. Die Kosten hast du dabei jederzeit im Blick.",
        "Wir arbeiten mit Figma, Adobe XD oder Adobe Illustrator. So kannst du jederzeit auf die offenen Daten zugreifen und sie auch im Nachgang selbst anpassen.",
      ],
      tags: ["Figma", "UI/UX", "Prototyping", "Design Systeme"],
      deliverables: [
        { title: "Website-Design", text: "Individuelle Layouts für Desktop, Tablet und Smartphone." },
        { title: "App-Design", text: "Oberflächen für iOS, Android und Web-Apps." },
        { title: "Klick-Prototypen", text: "Teste dein Design, bevor eine Zeile Code entsteht." },
        { title: "Design-Systeme", text: "Wiederverwendbare Komponenten für einen konsistenten Auftritt." },
      ],
    },
  },
  {
    slug: "shopsysteme",
    name: "Shopsysteme",
    href: "/shopsysteme",
    icon: ShoppingBagIcon,
    caseCategory: "web",
    tagline: "Onlineshops, die verkaufen",
    description:
      "Von der Erweiterung eines bestehenden Shops bis zur passgenauen Individuallösung.",
    page: {
      headline: "Wir bauen deinen erfolgreichen Onlineshop.",
      intro:
        "Onlineshops sollten vor allem eines: viele Kunden erreichen und möglichst viel verkaufen. Dafür braucht es Nutzerfreundlichkeit, Übersicht und ein Design, das Lust aufs Kaufen macht.",
      body: [
        "Um ein optimales Ergebnis zu erzielen, starten wir mit dir auf einem weißen Blatt Papier, erarbeiten Menüführung, Detailseiten und Layouts und denken dabei bereits an die technische Umsetzung.",
        "Ob Shopify-Template, individuelle Eigenentwicklung oder Baukasten deines aktuellen Anbieters: Wir gehen alle Optionen mit dir durch und achten besonders auf Skalierbarkeit – damit dein Shop mit dir wächst.",
      ],
      tags: ["Shopify", "Individuallösungen", "Payment", "Skalierbar"],
      deliverables: [
        { title: "Neue Onlineshops", text: "Von der Konzeption bis zum ersten Verkauf." },
        { title: "Shop-Erweiterungen", text: "Neue Funktionen, Designs oder Schnittstellen für deinen bestehenden Shop." },
        { title: "Produktfotos", text: "Dank eigener Fotografie direkt die passenden Bilder dazu." },
        { title: "Zahlung & Versand", text: "Anbindung gängiger Zahlungs- und Versanddienstleister." },
      ],
    },
  },
  {
    slug: "seo",
    name: "Suchmaschinenoptimierung (SEO)",
    shortName: "SEO",
    href: "/seo",
    icon: MagnifyingGlassIcon,
    caseCategory: "web",
    tagline: "Bei Google gefunden werden",
    description:
      "In Suchmaschinen gefunden zu werden ist für Unternehmen entscheidend. Wir unterstützen dich dabei.",
    page: {
      headline: "Mit uns wird dein Unternehmen online gefunden.",
      intro:
        "Suchmaschinen wie Google und Bing werden täglich von Millionen Menschen genutzt, um Produkte und Dienstleistungen zu finden. Wer dort oben steht, gewinnt Besucher – und Kunden.",
      body: [
        "Wir haben uns auf SEO-Texte spezialisiert, die nicht nur für Suchmaschinen optimiert, sondern auch für echte Leser gut verständlich sind.",
        "Ein Text, der ausschließlich für Suchmaschinen geschrieben wurde, liest sich selten gut. Deshalb setzen wir auf eine gesunde Mischung – für zufriedene Besucher und ein gutes Ranking.",
      ],
      tags: ["Google", "Local SEO", "Content", "Technik"],
      deliverables: [
        { title: "SEO-Analyse", text: "Wo stehst du, wo steht die Konkurrenz – und was ist möglich?" },
        { title: "SEO-Texte", text: "Inhalte, die Google und Menschen gleichermaßen überzeugen." },
        { title: "Technisches SEO", text: "Ladezeiten, Struktur und Meta-Daten auf dem neuesten Stand." },
        { title: "Lokale Sichtbarkeit", text: "Google-Unternehmensprofil und Präsenz in deiner Region." },
      ],
    },
  },
  {
    slug: "digitale-speisekarte",
    hidden: true, // vorerst ausgeblendet – Zeile entfernen, um sie wieder zu zeigen
    name: "Digitale Speisekarte",
    href: "https://www.meinedigitalespeisekarte.de",
    external: true,
    icon: BuildingStorefrontIcon,
    tagline: "Für Gastronomie",
    description:
      "Individuelle, digitale Speisekarten – jederzeit auf dem aktuellsten Stand.",
  },
];

/** Nur sichtbare Leistungen (ohne `hidden: true`) */
export const services = allServices.filter((s) => !s.hidden);

export const focusServices = services.filter((s) => s.focus);
export const moreServices = services.filter((s) => !s.focus);

export function getService(slug) {
  return services.find((s) => s.slug === slug);
}

export function getProcess(service) {
  return service.page?.process || defaultProcess;
}

// SEO: lokale Seitentitel je Leistung (Suchbegriff + Ort)
const seoTitles = {
  webentwicklung: "Webentwicklung in Montabaur & im Westerwald",
  "app-entwicklung": "App-Entwicklung in Montabaur & im Westerwald",
  socialmedia: "Social-Media-Agentur in Montabaur & im Westerwald",
  fotografie: "Fotograf in Montabaur & im Westerwald",
  videografie: "Videograf in Montabaur & im Westerwald",
  grafikdesign: "Grafikdesign in Montabaur & im Westerwald",
  webdesign: "Webdesign in Montabaur & im Westerwald",
  shopsysteme: "Onlineshop erstellen lassen – Montabaur & Westerwald",
  seo: "SEO-Agentur in Montabaur & im Westerwald",
};

export function serviceMetadata(slug) {
  const s = getService(slug);
  const title = seoTitles[slug] || s.name;
  const description = `${s.page.intro} Deine Werbeagentur aus Montabaur im Westerwald.`;
  return {
    title,
    description,
    alternates: { canonical: s.href },
    openGraph: { title: `${title} | Revice Media`, description, url: s.href },
  };
}
