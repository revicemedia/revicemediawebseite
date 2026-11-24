/**
 * Überträgt den bisherigen (fest programmierten) Blogartikel einmalig ins CMS.
 * Aufruf: npm run seed   – legt nichts doppelt an.
 */
import path from "path";
import { fileURLToPath } from "url";
import { getPayload, type Payload } from "payload";
import config from "../payload.config";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(dirname, "../public");

// --- Hilfen für Lexical-JSON ------------------------------------------------
const text = (t: string) => ({ type: "text", text: t, format: 0, detail: 0, mode: "normal", style: "", version: 1 });
const block = { direction: "ltr", format: "", indent: 0, version: 1 };
const p = (t: string) => ({ ...block, type: "paragraph", textFormat: 0, textStyle: "", children: [text(t)] });
const h2 = (t: string) => ({ ...block, type: "heading", tag: "h2", children: [text(t)] });
const doc = (...children: object[]) => ({ root: { ...block, type: "root", children } });

const SLUG = "warum-sind-webseiten-so-wichtig";

export const script = async (payload: Payload) => {
  const existing = await payload.find({ collection: "posts", where: { slug: { equals: SLUG } }, limit: 1, draft: true });
  if (existing.totalDocs) {
    payload.logger.info("Artikel existiert bereits – nichts zu tun.");
    return;
  }

  const upload = (file: string, alt: string) =>
    payload.create({ collection: "media", data: { alt }, filePath: path.join(publicDir, file) });

  const authorImage = await upload("Fabian_Profil.jpg", "Fabian Hanso");
  const author = await payload.create({
    collection: "authors",
    data: { name: "Fabian Hanso", role: "Gründer von Revice Media", image: authorImage.id },
  });
  const cover = await upload("BlogPost1.jpg", "Laptop auf einem Holztisch neben einem weißen Stuhl");

  await payload.create({
    collection: "posts",
    context: { disableRevalidate: true },
    data: {
      _status: "published",
      title: "Warum sind Webseiten auch im Jahr 2023 noch so wichtig?",
      slug: SLUG,
      excerpt:
        "Social Media allein reicht nicht: Warum eine eigene Webseite für Unternehmen weiterhin entscheidend ist – erklärt von Revice Media, deiner Werbeagentur aus Montabaur.",
      publishedAt: "2023-09-26T10:00:00.000Z",
      author: author.id,
      categories: ["Webseiten", "Werbung", "Grundlagen"],
      coverImage: cover.id,
      ctaTitle: "Du brauchst eine neue Webseite?",
      content: doc(
        p("Auch zu Zeiten von sozialen Medien wie Instagram, Facebook, TikTok und co. spielen Webseiten im professionellen Umfeld noch immer eine große und entscheidende Rolle. Potenzielle Kunden bekommen schnell einen Überblick über angebotene Produkte oder die möglichen Dienstleistungen eines Unternehmens und lernen dabei auch das Unternehmen etwas genauer kennen. Dies bedeutet nicht, dass soziale Medien schlecht sind oder gar gemieden werden sollen. Ganz im Gegenteil. Eher sollte man dafür sorgen, dass alle Auftritte zu einem stimmigen Gesamtbild führen und sowohl potenzielle als auch Bestandskunden dich wiedererkennen."),
        p("Eine Webseite vereint den eigentlichen Werbezweck mit der schnellen und stressfreien Kontaktmöglichkeit, sowie der Option, Waren online zugänglich (bestellbar) zu machen. Darüber hinaus kann man als Unternehmen direkt mit dem Kunden kommunizieren, indem man Neuigkeiten, Erkenntnisse und Erfolge teilt. Dies sorgt für eine bessere Bindung zum Kunden und steigert die Wahrscheinlichkeit, mit diesen Kunden Umsatz zu generieren."),
        h2("Wie erstelle ich eine professionelle Webseite und was kostet diese?"),
        p("Eine einfache Webseite kann man sich bereits für wenige Euro mit Homepage-Baukästen zusammenstellen. Möchte man jedoch von einer professionellen Webseite profitieren, so macht der Gang zu einer Werbeagentur definitiv Sinn. Hier berät man dich von Anfang an professionell und sorgt mit dem nötigen Fachwissen für eine optimale Suchmaschinenoptimierung und eine nutzerfreundliche Oberfläche. Preise für Webseiten bei einer Agentur sind abhängen von verschiedensten Faktoren wie der Anzahl der Unterseiten, komplexität der Menüführung und vielem mehr. Kleinere Webseiten bekommst du bereits ab einem Betrag von 1.500,00€, komplexere Lösungen lassen sich nach oben frei skalieren."),
        p("Bei uns bekommst du nach einem ersten Gespräch bereits innerhalb kürzester Zeit einen fairen Kostenvoranschlag."),
        h2("Warum solltest du uns als Anbieter für deine neue Webseite wählen?"),
        p("Bei uns kannst du individuelle Webseiten in Auftrag geben und darüber hinaus aus unseren bereits bestehenden Komponenten wählen, welche sich je nach Wunsch anpassen lassen und somit die Entwicklungskosten mindern. Du wählst zum Beispiel aus bereits bestehenden Navigationsleisten, Footern, Text-Bild Bereichen und vielem mehr und kannst diese durch uns auf deine Bedürfnisse anpassen lassen. Dies spart je nach Komponente bis zu zwei Arbeitstage. Uns ist wichtig, dass JEDES Unternehmen, egal wie groß oder klein es ist, von einer professionellen Webseite profitieren kann. Aus diesem Grund beraten wir dich von Anfang an mit dem Gedanken, die Kosten so gering wie möglich zu halten."),
        p("Dies bedeutet selbstverständlich nicht, dass du kein gutes Produkt bekommst. Ganz im Gegenteil, wir arbeiten ausschließlich mit den aktuellsten und bewährtesten Technologien, die aktuell zur Verfügung stehen. Zum Hosting und für die Registrierung der Domain setzen wir außerdem auf Unternehmen wie Amazon (AWS), Google und Digital Ocean. Für Webseiten setzen wir auf eine modulare Bauweise, die sich jederzeit anpassen und erweitern lässt (Micro-Frontends)."),
      ),
      faq: {
        title: "5 Gründe für eine professionelle Webseite",
        items: [
          { question: "Werbezweck", answer: "Eine aktuelle, moderne und optimierte Webseite hat eine enorme Werbewirkung, wenn man mit ihr die richtige Zielgruppe anspricht. Vorteil: Effektiv und Einfach." },
          { question: "Kontaktmöglichkeit", answer: "Potenzielle Kunden finden wichtige Kontaktmöglichkeiten mit wenigen Klicks und können somit einfach und schnell mit dir in Verbindung treten. Niemand sucht gerne lange nach wichtigen Informationen." },
          { question: "Waren und Dienstleistungen aufzeigen", answer: "Manche Kunden kennen deine Dienstleistungen und Produkte bereits. Andere jedoch sind vielleicht genau auf der Suche nach einer Dienstleistung, die du anbietest. Diesen Kunden solltest du möglichst einfach Zugang zu den benötigten Informationen gewähren." },
          { question: "Verkaufsplattform (Shop)", answer: "Auf einer Webseite kannst du mit einfachen Hilfsmitteln einen Onlineshop einbinden, der dir zu mehr Umsatz verhilft. Somit nutzt du deinen Werbekanal optimal." },
          { question: "Neuigkeiten teilen", answer: "Halte Kunden und Interessenten auf dem aktuellsten Stand. Kommuniziere wichtige Ereignisse und Neuerungen auf deiner Webseite." },
        ],
      },
    } as any,
  });

  payload.logger.info("Blogartikel ins CMS übertragen ✔");
};

// Direkt ausführen (npm run seed)
const payload = await getPayload({ config });
await script(payload);
process.exit(0);
