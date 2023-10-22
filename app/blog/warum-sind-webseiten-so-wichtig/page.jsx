import BlogDetails from "@/components/BlogDetails/BlogDetails";
import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

export default function BlogSeite() {
  const data = {
    headline: "Warum sind Webseiten auch im Jahr 2023 noch so wichtig?",
    date: "26. September 2023",
    author: {
      name: "Fabian Hanso",
      role: "CTO & Founder von DaLu Services",
      image: "/Fabian_Profil.jpg",
    },
    content: [
      {
        headline: "",
        p: [
          {
            key: 1,
            content:
              "Auch zu Zeiten von sozialen Medien wie Instagram, Facebook, TikTok und co. spielen Webseiten im professionellen Umfeld noch immer eine große und entscheidende Rolle. Potenzielle Kunden bekommen schnell einen Überblick über angebotene Produkte oder die möglichen Dienstleistungen eines Unternehmens und lernen dabei auch das Unternehmen etwas genauer kennen. Dies bedeutet nicht, dass soziale Medien schlecht sind oder gar gemieden werden sollen. Ganz im Gegenteil. Eher sollte man dafür sorgen, dass alle Auftritte zu einem stimmigen Gesamtbild führen und sowohl potenzielle als auch Bestandskunden Sie wiedererkennen.",
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
              "Eine einfache Webseite kann man sich bereits für wenige Euro mit Homepage-Baukästen zusammenstellen. Möchte man jedoch von einer professionellen Webseite profitieren, so macht der Gang zu einer Werbeagentur definitiv Sinn. Hier berät man Sie von Anfang an professionell und sorgt mit dem nötigen Fachwissen für eine optimale Suchmaschinenoptimierung und eine nutzerfreundliche Oberfläche. Preise für Webseiten bei einer Agentur sind abhängen von verschiedensten Faktoren wie der Anzahl der Unterseiten, komplexität der Menüführung und vielem mehr. Kleinere Webseiten erhalten Sie bereits ab einem Betrag von 1.500,00€, komplexere Lösungen lassen sich nach oben frei skalieren.",
          },
          {
            key: 2,
            content:
              "Bei uns erhalten Sie nach einem ersten Gespräch bereits innerhalb kürzester Zeit einen fairen Kostenvoranschlag.",
          },
        ],
      },
      {
        headline:
          "Warum sollten Sie uns als Anbieter für Ihre neue Webseite wählen?",
        p: [
          {
            key: 1,
            content:
              "Bei uns können Sie individuelle Webseiten in Auftrag geben und darüber hinaus aus unseren bereits bestehenden Komponenten wählen, welche sich je nach Wunsch anpassen lassen und somit die Entwicklungskosten mindern. Sie wählen zum Beispiel aus bereits bestehenden Navigationsleisten, Footern, Text-Bild Bereichen und vielem mehr und können diese durch uns auf Ihre Bedürfnisse anpassen lassen. Dies spart je nach Komponente bis zu zwei Arbeitstage. Uns ist wichtig, dass JEDES Unternehmen, egal wie groß oder klein es ist, von einer professionellen Webseite profitieren kann. Aus diesem Grund beraten wir Sie von Angfang an mit dem Gedanken, die Kosten so gering wie möglich zu halten.",
          },
          {
            key: 2,
            content:
              "Dies bedeutet selbstverständlich nicht, dass Sie kein gutes Produkt erhalten. Ganz im Gegenteil, wir arbeiten ausschließlich mit den aktuellsten und bewährtesten Technologien, die aktuell zur Verfügung stehen. Zum Hosting und für die Registrierung der Domain setzen wir außerdem auf Unternehmen wie Amazon (AWS), Google und Digital Ocean. Für Webseiten setzen wir auf eine modulare Bauweise, die sich jederzeit anpassen und erweitern lässt (Micro-Frontends).",
          },
        ],
      },
    ],
    coverImage: "/BlogPost1.jpg",
    categories: ["Webseiten", "Werbung", "Grundlagen"],
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
          text: "Potenzielle Kunden finden wichtige Kontaktmöglichkeiten mit wenigen Klicks und können somit einfach und schnell mit Ihnen in Verbindung treten. Niemand sucht gerne lange nach wichtigen Informationen.",
        },
        {
          headline: "Waren und Dienstleistungen aufzeigen",
          text: "Manche Kunden kennen Ihre Dienstleistungen und Produkte bereits. Andere jedoch sind vielleicht genau auf der Suche nach einer Dienstleistung, die Sie anbieten. Diesen Kunden sollten Sie möglichst einfach Zugang zu den benötigten Informationen gewähren.",
        },
        {
          headline: "Verkaufsplattform (Shop)",
          text: "Auf einer Webseite können Sie mit einfachen Hilfsmittel einen Online Shop einbinden, der Ihnen zu mehr Umsatz verhilft. Somit nutzen Sie Ihren Werbekanal optimal.",
        },
        {
          headline: "Neuigkeiten teilen",
          text: "Halten Sie Kunden und Interessenten auf dem aktuellsten Stand. Kommunizieren Sie wichtige Ereignisse und Neuerungen auf Ihrer Webseite mit diesen.",
        },
      ],
    },
  };

  return (
    <div className="bg-white">
      <Navigation />
      <BlogDetails data={data} />
      <Footer />
    </div>
  );
}
