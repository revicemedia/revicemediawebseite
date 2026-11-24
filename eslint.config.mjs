import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    rules: {
      // Bilder kommen teils aus dem CMS (Vercel Blob) – <img> ist hier bewusst erlaubt
      "@next/next/no-img-element": "off",
      // Interne Links sind bewusst normale <a>-Tags (volles Neuladen, keine Client-Navigation nötig)
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    ignores: [".next/**", "node_modules/**", "app/(payload)/**", "cms/migrations/**", "payload-types.ts"],
  },
];

export default config;
