import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { brand } from "@/brandConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const { site, contact } = brand;

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Werbeagentur Montabaur – Web, App, Social Media, Foto & Video | Revice Media",
    template: "%s | Revice Media",
  },
  description:
    "Revice Media ist deine junge Werbeagentur aus Montabaur im Westerwald: Webentwicklung, App-Entwicklung, Social Media, Fotografie, Videografie und Grafikdesign – alles aus einer Hand.",
  keywords: [
    "Werbeagentur Montabaur",
    "Werbeagentur Westerwald",
    "Webdesign Montabaur",
    "Webentwicklung Westerwald",
    "Social Media Agentur Montabaur",
    "Fotograf Montabaur",
    "Videograf Westerwald",
    "Agentur Koblenz",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: "Revice Media – Werbeagentur aus Montabaur",
    description:
      "Web, App, Social Media, Foto & Video aus einer Hand – deine junge Werbeagentur aus Montabaur im Westerwald.",
    images: [{ url: "/hero/team.jpg", width: 1800, height: 1200, alt: "Revice Media – Werbeagentur Montabaur" }],
  },
  robots: { index: true, follow: true },
  themeColor: "#ffffff",
};

// Strukturierte Daten für Google (lokales Unternehmen)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  description:
    "Werbeagentur aus Montabaur im Westerwald für Webentwicklung, App-Entwicklung, Social Media, Fotografie, Videografie und Grafikdesign.",
  url: site.url,
  logo: `${site.url}/logo.svg`,
  image: `${site.url}/hero/team.jpg`,
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.address.street,
    postalCode: contact.address.zip,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    addressCountry: contact.address.country,
  },
  areaServed: site.areaServed.map((name) => ({ "@type": "Place", name })),
  knowsAbout: [
    "Webentwicklung",
    "App-Entwicklung",
    "Social Media Marketing",
    "Fotografie",
    "Videografie",
    "Grafikdesign",
    "Webdesign",
    "Suchmaschinenoptimierung",
  ],
  sameAs: [site.instagram],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`h-full min-h-full ${inter.variable} ${poppins.variable}`}
    >
      <head>
        {/* Markiert aktives JS, damit Reveal-Animationen nur dann greifen */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className="font-sans">
        {/* Strukturierte Daten im <body>: Browser-Erweiterungen verändern oft den <head> (Hydration-Warnungen) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
