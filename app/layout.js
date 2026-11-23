import "./globals.css";
import { Inter, Poppins } from "next/font/google";

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

export const metadata = {
  metadataBase: new URL("https://revice-media.com"),
  title: {
    default: "Revice Media – Web, App, Social Media, Foto & Video",
    template: "%s | Revice Media",
  },
  description:
    "Revice Media ist eine junge Werbeagentur für Webentwicklung, App-Entwicklung, Social Media, Fotografie, Videografie und Grafikdesign.",
  themeColor: "#ffffff",
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
      <body className="font-sans">{children}</body>
    </html>
  );
}
