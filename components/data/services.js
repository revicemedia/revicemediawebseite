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
    text: "Wir erarbeiten gemeinsam mit Ihnen ein Konzept, das genau zu Ihrem Vorhaben passt.",
  },
  {
    title: "Umsetzung",
    text: "Wir setzen um – transparent, mit festen Ansprechpartnern und regelmäßigen Zwischenständen.",
  },
  {
    title: "Go Live & Betreuung",
    text: "Nach Ihrer Freigabe geht alles live. Auch danach sind wir bei Fragen für Sie da.",
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
        "Nach einem ersten Kennenlernen legen Sie gemeinsam mit uns den Grundstein für Ihre neue Webseite und werden bei jedem Schritt betreut und individuell beraten. Webseiten sollten von Anfang an gut durchdacht und auf die spätere Zielgruppe abgestimmt sein.",
        "Wir nutzen keine veralteten Baukästen, sondern setzen auf modernste Technologien wie Next.js und Cloud Hosting. So haben Sie auch langfristig die Möglichkeit, bestehende Komponenten zu nutzen, anzupassen oder weiterzuentwickeln.",
      ],
      tags: ["Next.js", "React", "Cloud Hosting", "Responsive", "SEO-ready"],
      deliverables: [
        { title: "Unternehmenswebseiten", text: "Ihr professioneller Auftritt mit allen Unterseiten, die Ihre Kunden brauchen." },
        { title: "OnePager & Landingpages", text: "Kompakte Seiten für Produkte, Events oder Kampagnen – in kürzester Zeit online." },
        { title: "Web-Apps & Portale", text: "Individuelle Anwendungen im Browser, z. B. Buchungs- oder Kundenportale." },
        { title: "Inhalte selbst pflegen", text: "Auf Wunsch binden wir ein CMS an, damit Sie Texte und Bilder selbst ändern können." },
        { title: "Performance & SEO-Basis", text: "Kurze Ladezeiten, saubere Struktur und Meta-Daten ab dem ersten Tag." },
        { title: "Hosting & Wartung", text: "Wir kümmern uns um Server, Updates und Sicherheit – Sie um Ihr Geschäft." },
      ],
      faq: [
        {
          q: "Kann mein bestehender Hosting-Anbieter genutzt werden?",
          a: "Solange Ihr Hosting-Anbieter moderne Webtechnologien wie Node.js unterstützt, ist das kein Problem. Andernfalls finden wir gemeinsam eine passende Lösung.",
        },
        {
          q: "Können bestehende Inhalte übernommen werden?",
          a: "Selbstverständlich. Texte, Bilder und Inhalte Ihrer aktuellen Seite oder Werbemittel übernehmen wir gerne.",
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
      "Von der Idee bis in den App Store: mobile Apps und Web-Apps, die sich gut anfühlen und mit Ihnen wachsen.",
    page: {
      headline: "Apps, die Ihre Kunden wirklich gerne nutzen.",
      intro:
        "Von der ersten Idee bis zur Veröffentlichung im App Store und bei Google Play: Wir entwickeln mobile Apps und Web-Apps, die sich modern anfühlen und mit Ihrem Unternehmen mitwachsen.",
      body: [
        "Wir starten nicht mit Code, sondern mit Ihren Nutzern. In Workshops und Klick-Prototypen klären wir früh, welche Funktionen wirklich gebraucht werden – so investieren Sie nur in das, was einen Unterschied macht.",
        "Mit plattformübergreifenden Technologien entwickeln wir eine gemeinsame Codebasis für iOS und Android. Das spart Zeit und Budget und sorgt dafür, dass neue Funktionen auf allen Geräten gleichzeitig ankommen.",
      ],
      tags: ["iOS", "Android", "Cross-Platform", "Web-Apps", "Schnittstellen"],
      deliverables: [
        { title: "iOS & Android Apps", text: "Eine App für beide Plattformen – mit nativem Look & Feel." },
        { title: "Web-Apps & PWAs", text: "Apps, die direkt im Browser laufen und sich wie eine echte App installieren lassen." },
        { title: "Prototypen & MVPs", text: "Ideen schnell testbar machen, bevor das große Budget fließt." },
        { title: "UI/UX Design", text: "Intuitive Oberflächen, die zu Ihrer Marke passen." },
        { title: "Backend & Schnittstellen", text: "Anbindung an bestehende Systeme, Datenbanken und Drittanbieter." },
        { title: "Store-Release & Updates", text: "Wir begleiten die Veröffentlichung und halten Ihre App aktuell." },
      ],
      process: [
        { title: "Idee & Workshop", text: "Wir schärfen gemeinsam Ziel, Zielgruppe und Kernfunktionen Ihrer App." },
        { title: "Prototyp", text: "Ein klickbarer Prototyp macht die App greifbar, bevor entwickelt wird." },
        { title: "Entwicklung", text: "In kurzen Etappen mit regelmäßigen Testversionen auf Ihrem Smartphone." },
        { title: "Release & Wachstum", text: "Veröffentlichung in den Stores, danach Updates und neue Features." },
      ],
      faq: [
        {
          q: "Brauche ich eine native App oder reicht eine Web-App?",
          a: "Das hängt davon ab, welche Gerätefunktionen Sie benötigen und wie Ihre Nutzer die App finden sollen. Wir beraten Sie ehrlich – manchmal ist eine Web-App die bessere und günstigere Wahl.",
        },
        {
          q: "Was kostet eine App?",
          a: "Das hängt stark vom Funktionsumfang ab. Nach dem Workshop erhalten Sie ein transparentes Angebot – gerne auch in Ausbaustufen, beginnend mit einem MVP.",
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
      "Von der einzelnen Kampagne bis zur kompletten Betreuung Ihrer Kanäle – mit Content, der auffällt.",
    page: {
      headline: "Gemeinsam zum Social-Media-Auftritt, über den man spricht.",
      intro:
        "Ein professioneller Social-Media-Auftritt ist für Unternehmen nicht mehr wegzudenken und zählt zu den wichtigsten Werbekanälen unserer Zeit. Wir unterstützen Sie von der einzelnen Kampagne bis hin zur kompletten Betreuung Ihrer Kanäle.",
      body: [
        "Netzwerke wie Instagram, TikTok und LinkedIn haben großen Einfluss auf Verkaufszahlen. Zielgruppenorientierter Content steigert das Kaufinteresse und stärkt eine Marke, ein Produkt oder ein Unternehmen langfristig.",
        "Weil Foto und Video bei uns im Haus sind, entsteht Ihr Content aus einer Hand: Wir planen, drehen, schneiden und veröffentlichen – und behalten dabei die Zahlen im Blick.",
      ],
      tags: ["Instagram", "TikTok", "LinkedIn", "Facebook", "YouTube"],
      deliverables: [
        { title: "Strategie & Redaktionsplan", text: "Klare Ziele, passende Formate und ein Plan, der funktioniert." },
        { title: "Content-Produktion", text: "Reels, TikToks, Fotos und Grafiken – produziert von unserem eigenen Team." },
        { title: "Kanal-Betreuung", text: "Wir veröffentlichen, moderieren und antworten Ihrer Community." },
        { title: "Kampagnen & Ads", text: "Bezahlte Kampagnen, die genau Ihre Zielgruppe erreichen." },
        { title: "Reporting", text: "Verständliche Auswertungen: Was funktioniert, was nicht – und warum." },
        { title: "Workshops", text: "Sie möchten Social Media selbst verstehen? Wir zeigen Ihnen, wie es geht." },
      ],
      process: [
        { title: "Analyse", text: "Wir schauen uns Ihre Kanäle, Ihre Zielgruppe und Ihren Wettbewerb an." },
        { title: "Strategie", text: "Formate, Tonalität und Redaktionsplan – abgestimmt auf Ihre Ziele." },
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
          a: "Vor allem Instagram, TikTok, LinkedIn, Facebook und YouTube. Welche Kanäle für Sie Sinn ergeben, besprechen wir gemeinsam.",
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
      "Wir fangen besondere Momente ein – auf dem Platz, auf der Bühne, im Unternehmen oder bei Ihrer Hochzeit.",
    page: {
      headline: "Wir fangen Momente ein, die bleiben.",
      intro:
        "Unsere Fotografen haben ein Auge für besondere Momente – ob am Spielfeldrand, im Festival-Graben oder bei Ihrer Hochzeit. Die Bilder erhalten Sie innerhalb kürzester Zeit.",
      body: [
        "Egal ob Sportfotografie, Eventbegleitung, Hochzeit, Pärchen-Shooting oder Produktfotografie: Unser Ziel ist es, Ihre Wünsche voll und ganz zu erfüllen. Die ersten Bilder erhalten Sie bereits am Tag nach Ihrer Veranstaltung – je nach Absprache auch schon am gleichen Tag.",
        "Wir arbeiten hauptsächlich im Raum Koblenz / Limburg / Montabaur, sind aber auch darüber hinaus für Sie unterwegs. Schreiben Sie uns einfach Ihr Wunschdatum.",
      ],
      tags: ["Sport", "Events & Konzerte", "Hochzeiten", "Business", "Produkte"],
      deliverables: [
        { title: "Sport & Vereine", text: "Spieltage, Mannschaftsfotos und Action-Bilder für Verein, Presse und Social Media." },
        { title: "Events & Konzerte", text: "Festivals, Konzerte und Firmenevents – nah dran und voller Atmosphäre." },
        { title: "Hochzeiten & Paare", text: "Einfühlsame Begleitung Ihres großen Tages und entspannte Paar-Shootings." },
        { title: "Business & Portrait", text: "Team- und Mitarbeiterfotos, die Ihr Unternehmen sympathisch zeigen." },
        { title: "Produktfotografie", text: "Saubere Produktbilder für Onlineshop, Katalog und Werbung." },
        { title: "Schnelle Lieferung", text: "Erste Bilder oft schon am Folgetag – bearbeitet und einsatzbereit." },
      ],
      process: [
        { title: "Anfrage", text: "Sie nennen uns Anlass, Datum und Ort – wir melden uns schnellstmöglich." },
        { title: "Abstimmung", text: "Wir klären Bildstil, wichtige Motive und den Ablauf vor Ort." },
        { title: "Shooting", text: "Wir sind vor Ort und halten die entscheidenden Momente fest." },
        { title: "Bearbeitung & Lieferung", text: "Professionell bearbeitete Bilder in einer Online-Galerie." },
      ],
      faq: [
        {
          q: "Wie schnell bekomme ich die Bilder?",
          a: "Die ersten Bilder erhalten Sie in der Regel am Tag nach dem Termin, in Einzelfällen und nach Absprache auch schon am gleichen Tag.",
        },
        {
          q: "In welcher Region seid ihr unterwegs?",
          a: "Hauptsächlich im Raum Koblenz / Limburg / Montabaur. Anfragen außerhalb dieser Region sind nach Absprache möglich.",
        },
        {
          q: "Dürfen wir die Bilder für Social Media und Presse nutzen?",
          a: "Ja. Die Nutzungsrechte stimmen wir vorab mit Ihnen ab – für Vereine und Unternehmen inklusive Social Media und Pressearbeit.",
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
      "Bewegte Bilder, die Emotionen wecken – vom kurzen Reel bis zum Imagefilm für Ihr Unternehmen.",
    page: {
      headline: "Bewegte Bilder, die Ihre Geschichte erzählen.",
      intro:
        "Video ist das reichweitenstärkste Format im Netz. Wir produzieren Imagefilme, Social-Media-Clips und Aftermovies, die im Gedächtnis bleiben – von der Idee bis zum fertigen Schnitt.",
      body: [
        "Ein gutes Video beginnt lange vor dem Dreh: Wir entwickeln mit Ihnen die Idee, schreiben das Konzept und planen den Drehtag so, dass er für alle Beteiligten entspannt bleibt.",
        "Am Ende erhalten Sie Ihr Video in allen Formaten, die Sie brauchen – im Querformat für Webseite und YouTube, im Hochformat für Reels und TikTok.",
      ],
      tags: ["Imagefilm", "Reels & TikTok", "Aftermovie", "Sport-Highlights", "Interviews"],
      deliverables: [
        { title: "Imagefilme", text: "Zeigen Sie, wer Sie sind – authentisch und hochwertig produziert." },
        { title: "Social Clips & Reels", text: "Kurze, schnelle Formate im Hochformat für Instagram und TikTok." },
        { title: "Event- & Aftermovies", text: "Die Stimmung Ihres Events in wenigen Minuten eingefangen." },
        { title: "Sport-Highlights", text: "Tore, Emotionen und Spielszenen für Ihren Verein und Ihre Fans." },
        { title: "Interviews & Testimonials", text: "Kunden, Mitarbeitende oder Gründer kommen selbst zu Wort." },
        { title: "Schnitt & Color Grading", text: "Professionelle Postproduktion inklusive Musik und Untertiteln." },
      ],
      process: [
        { title: "Idee", text: "Wir entwickeln die Story und das passende Format für Ihre Ziele." },
        { title: "Planung", text: "Drehbuch, Drehorte und Zeitplan – alles vorbereitet." },
        { title: "Dreh", text: "Unser Team produziert vor Ort mit professionellem Equipment." },
        { title: "Schnitt & Ausspielung", text: "Postproduktion und Export in alle benötigten Formate." },
      ],
      faq: [
        {
          q: "Wie lang sollte ein Video sein?",
          a: "Für Social Media meist 15–60 Sekunden, Imagefilme ein bis drei Minuten. Wir beraten Sie je nach Ziel und Plattform.",
        },
        {
          q: "Bekomme ich auch Hochformat-Versionen?",
          a: "Ja, auf Wunsch schneiden wir Ihr Material in verschiedene Formate – z. B. 16:9 für YouTube und 9:16 für Reels.",
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
      headline: "Gemeinsam geben wir Ihrem Unternehmen ein Gesicht.",
      intro:
        "Fast jedes Unternehmen profitiert von einem passenden Logo, einer klaren Farbwelt und einheitlichen Werbemitteln – kurz: von einem durchdachten Corporate Design.",
      body: [
        "Durch unsere erfahrenen Mediengestalter erhalten Sie innerhalb kürzester Zeit nicht nur erste Entwürfe, sondern auch fertige Druckvorlagen oder ausgearbeitete digitale Werbemittel für Social Media und Ihre Webseite.",
        "Sie entscheiden, wo Sie drucken lassen. Wir arbeiten mit einer regionalen Druckerei zusammen, unterstützen Sie auf Wunsch aber auch bei der Bestellung bei einer Onlinedruckerei Ihrer Wahl.",
      ],
      tags: ["Logo", "Corporate Design", "Print", "Social Templates"],
      deliverables: [
        { title: "Logo & Markenzeichen", text: "Ein Zeichen, das Ihr Unternehmen auf den Punkt bringt." },
        { title: "Corporate Design", text: "Farben, Schriften und Regeln für einen einheitlichen Auftritt." },
        { title: "Geschäftsausstattung", text: "Visitenkarten, Briefpapier und Signaturen." },
        { title: "Flyer, Plakate & Banner", text: "Druckfertige Werbemittel für jeden Anlass." },
        { title: "Social-Media-Vorlagen", text: "Templates, mit denen Ihre Posts immer nach Ihnen aussehen." },
        { title: "Druckabwicklung", text: "Auf Wunsch kümmern wir uns um die Produktion Ihrer Druckprodukte." },
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
        "Egal ob einzelne Komponente oder komplexe Webanwendung: Wir helfen Ihnen bei der passgenauen und Styleguide-konformen Gestaltung Ihrer digitalen Produkte.",
      body: [
        "Auf Wunsch erstellen wir passende responsive Darstellungen. Liefern Sie zum Beispiel ein Desktop-Design, kümmern wir uns um die Gestaltung für mobile Endgeräte. Die Kosten haben Sie dabei jederzeit im Blick.",
        "Wir arbeiten mit Figma, Adobe XD oder Adobe Illustrator. So können Sie jederzeit auf die offenen Daten zugreifen und sie auch im Nachgang selbst anpassen.",
      ],
      tags: ["Figma", "UI/UX", "Prototyping", "Design Systeme"],
      deliverables: [
        { title: "Website-Design", text: "Individuelle Layouts für Desktop, Tablet und Smartphone." },
        { title: "App-Design", text: "Oberflächen für iOS, Android und Web-Apps." },
        { title: "Klick-Prototypen", text: "Testen Sie Ihr Design, bevor eine Zeile Code entsteht." },
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
      headline: "Wir bauen Ihren erfolgreichen Onlineshop.",
      intro:
        "Onlineshops sollten vor allem eines: viele Kunden erreichen und möglichst viel verkaufen. Dafür braucht es Nutzerfreundlichkeit, Übersicht und ein Design, das Lust aufs Kaufen macht.",
      body: [
        "Um ein optimales Ergebnis zu erzielen, starten wir mit Ihnen auf einem weißen Blatt Papier, erarbeiten Menüführung, Detailseiten und Layouts und denken dabei bereits an die technische Umsetzung.",
        "Ob Shopify-Template, individuelle Eigenentwicklung oder Baukasten Ihres aktuellen Anbieters: Wir gehen alle Optionen mit Ihnen durch und achten besonders auf Skalierbarkeit – damit Ihr Shop mit Ihnen wächst.",
      ],
      tags: ["Shopify", "Individuallösungen", "Payment", "Skalierbar"],
      deliverables: [
        { title: "Neue Onlineshops", text: "Von der Konzeption bis zum ersten Verkauf." },
        { title: "Shop-Erweiterungen", text: "Neue Funktionen, Designs oder Schnittstellen für Ihren bestehenden Shop." },
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
      "In Suchmaschinen gefunden zu werden ist für Unternehmen entscheidend. Wir unterstützen Sie dabei.",
    page: {
      headline: "Mit uns wird Ihr Unternehmen online gefunden.",
      intro:
        "Suchmaschinen wie Google und Bing werden täglich von Millionen Menschen genutzt, um Produkte und Dienstleistungen zu finden. Wer dort oben steht, gewinnt Besucher – und Kunden.",
      body: [
        "Wir haben uns auf SEO-Texte spezialisiert, die nicht nur für Suchmaschinen optimiert, sondern auch für echte Leser gut verständlich sind.",
        "Ein Text, der ausschließlich für Suchmaschinen geschrieben wurde, liest sich selten gut. Deshalb setzen wir auf eine gesunde Mischung – für zufriedene Besucher und ein gutes Ranking.",
      ],
      tags: ["Google", "Local SEO", "Content", "Technik"],
      deliverables: [
        { title: "SEO-Analyse", text: "Wo stehen Sie, wo steht die Konkurrenz – und was ist möglich?" },
        { title: "SEO-Texte", text: "Inhalte, die Google und Menschen gleichermaßen überzeugen." },
        { title: "Technisches SEO", text: "Ladezeiten, Struktur und Meta-Daten auf dem neuesten Stand." },
        { title: "Lokale Sichtbarkeit", text: "Google-Unternehmensprofil und Präsenz in Ihrer Region." },
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
