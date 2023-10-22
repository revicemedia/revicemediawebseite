import "./globals.css";

export const metadata = {
  title: "DaLu Services",
  description:
    "DaLu Services ist eine Full-Service Agentur für kleine und mittelständige Unternehmen in ganz Deutschland.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full min-h-full">
      <body>{children}</body>
    </html>
  );
}
