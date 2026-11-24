import BlogDetails from "@/components/BlogDetails/BlogDetails";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

export const metadata = {
  title: "Warum sind Webseiten noch so wichtig?",
  description:
    "Social Media allein reicht nicht: Warum eine eigene Webseite für Unternehmen weiterhin entscheidend ist – erklärt von Revice Media, deiner Werbeagentur aus Montabaur.",
  alternates: { canonical: "/blog/warum-sind-webseiten-so-wichtig" },
};

export default function BlogSeite() {
  const data = {
    headline: "Warum sind Webseiten auch im Jahr 2023 noch so wichtig?",
    date: "26. September 2023",
    author: {
      name: "Fabian Hanso",
      role: "Gründer von Revice Media",
      image: "/Fabian_Profil.jpg",
    },
    content: [
      {
        headline: "",
        p: [
          {
            key: 1,
            content:
              "Auch zu Zeiten von sozialen Medien wie Instagram, Facebook, TikTok und co. spielen Webseiten im professionellen Umfeld noch immer eine große und entscheidende Rolle. Potenzielle Kunden bekommen schnell einen Überblick über angebotene Produkte oder die möglichen Dienstleistungen eines Unternehmens und lernen dabei auch das Unternehmen etwas genauer kennen. Dies bedeutet nicht, dass soziale Medien schlecht sind oder gar gemieden werden sollen. Ganz im Gegenteil. Eher sollte man dafür sorgen, dass alle Auftritte zu einem stimmigen Gesamtbild führen und sowohl potenzielle als auch Bestandskunden dich wiedererkennen.",
          },
          {
            key: 2,
            content:
              "Eine Webseite vereint den eigentlichen Werbezweck mit der schnellen und stressfreien Kontaktmöglichkeit, sowie der Option, Waren online zugänglich (bestellbar) zu machen. Darüber hinaus kann man als Unternehmen direkt mit dem Kunden kommunizieren, indem man Neuigkeiten, Erkenntnisse und Erfolge teilt. Dies sorgt für eine bessere Bindung zum Kunden und steigert die Wahrscheinlichkeit, mit diesen Kunden Umsatz zu generieren.",
          },
        ],
      },
      {
        headline:
          "Wie erstelle ich eine professionelle Webseite und was kostet diese?",
        p: [
          {
            key: 1,
            content:
              "Eine einfache Webseite kann man sich bereits für wenige Euro mit Homepage-Baukästen zusammenstellen. Möchte man jedoch von einer professionellen Webseite profitieren, so macht der Gang zu einer Werbeagentur definitiv Sinn. Hier berät man dich von Anfang an professionell und sorgt mit dem nötigen Fachwissen für eine optimale Suchmaschinenoptimierung und eine nutzerfreundliche Oberfläche. Preise für Webseiten bei einer Agentur sind abhängen von verschiedensten Faktoren wie der Anzahl der Unterseiten, komplexität der Menüführung und vielem mehr. Kleinere Webseiten bekommst du bereits ab einem Betrag von 1.500,00€, komplexere Lösungen lassen sich nach oben frei skalieren.",
          },
          {
            key: 2,
            content:
              "Bei uns bekommst du nach einem ersten Gespräch bereits innerhalb kürzester Zeit einen fairen Kostenvoranschlag.",
          },
        ],
      },
      {
        headline:
          "Warum solltest du uns als Anbieter für deine neue Webseite wählen?",
        p: [
          {
            key: 1,
            content:
              "Bei uns kannst du individuelle Webseiten in Auftrag geben und darüber hinaus aus unseren bereits bestehenden Komponenten wählen, welche sich je nach Wunsch anpassen lassen und somit die Entwicklungskosten mindern. Du wählst zum Beispiel aus bereits bestehenden Navigationsleisten, Footern, Text-Bild Bereichen und vielem mehr und kannst diese durch uns auf deine Bedürfnisse anpassen lassen. Dies spart je nach Komponente bis zu zwei Arbeitstage. Uns ist wichtig, dass JEDES Unternehmen, egal wie groß oder klein es ist, von einer professionellen Webseite profitieren kann. Aus diesem Grund beraten wir dich von Anfang an mit dem Gedanken, die Kosten so gering wie möglich zu halten.",
          },
          {
            key: 2,
            content:
              "Dies bedeutet selbstverständlich nicht, dass du kein gutes Produkt bekommst. Ganz im Gegenteil, wir arbeiten ausschließlich mit den aktuellsten und bewährtesten Technologien, die aktuell zur Verfügung stehen. Zum Hosting und für die Registrierung der Domain setzen wir außerdem auf Unternehmen wie Amazon (AWS), Google und Digital Ocean. Für Webseiten setzen wir auf eine modulare Bauweise, die sich jederzeit anpassen und erweitern lässt (Micro-Frontends).",
          },
        ],
      },
    ],
    coverImage: "/BlogPost1.jpg",
    categories: ["Webseiten", "Werbung", "Grundlagen"],
    cta: { title: "Du brauchst eine neue Webseite?" },
    blogfaq: {
      headline: "5 Gründe für eine professionelle Webseite",
      display: true,
      data: [
        {
          headline: "Werbezweck",
          text: "Eine aktuelle, moderne und optimierte Webseite hat eine enorme Werbewirkung, wenn man mit ihr die richtige Zielgruppe anspricht. Vorteil: Effektiv und Einfach.",
        },
        {
          headline: "Kontaktmöglichkeit",
          text: "Potenzielle Kunden finden wichtige Kontaktmöglichkeiten mit wenigen Klicks und können somit einfach und schnell mit dir in Verbindung treten. Niemand sucht gerne lange nach wichtigen Informationen.",
        },
        {
          headline: "Waren und Dienstleistungen aufzeigen",
          text: "Manche Kunden kennen deine Dienstleistungen und Produkte bereits. Andere jedoch sind vielleicht genau auf der Suche nach einer Dienstleistung, die du anbietest. Diesen Kunden solltest du möglichst einfach Zugang zu den benötigten Informationen gewähren.",
        },
        {
          headline: "Verkaufsplattform (Shop)",
          text: "Auf einer Webseite kannst du mit einfachen Hilfsmitteln einen Onlineshop einbinden, der dir zu mehr Umsatz verhilft. Somit nutzt du deinen Werbekanal optimal.",
        },
        {
          headline: "Neuigkeiten teilen",
          text: "Halte Kunden und Interessenten auf dem aktuellsten Stand. Kommuniziere wichtige Ereignisse und Neuerungen auf deiner Webseite.",
        },
      ],
    },
  };

  // Strukturierte Daten für Google (Artikel)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.headline,
    datePublished: "2023-09-26",
    image: `https://www.revice-media.com${data.coverImage}`,
    author: { "@type": "Person", name: data.author.name },
    publisher: { "@type": "Organization", name: "Revice Media" },
    mainEntityOfPage: "https://www.revice-media.com/blog/warum-sind-webseiten-so-wichtig",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <BlogDetails data={data} />
      <Footer />
    </main>
  );
}
