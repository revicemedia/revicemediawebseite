import path from "path";
import { fileURLToPath } from "url";
import { buildConfig } from "payload";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { de } from "@payloadcms/translations/languages/de";
import sharp from "sharp";

import { Users } from "./cms/collections/Users";
import { Authors } from "./cms/collections/Authors";
import { Media } from "./cms/collections/Media";
import { Posts } from "./cms/collections/Posts";
import { migrations } from "./cms/migrations";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Datenbank: auf Vercel Turso (libSQL), lokal eine SQLite-Datei
const databaseUrl = process.env.TURSO_DATABASE_URL || process.env.DATABASE_URL || "file:./payload.db";
const databaseToken = process.env.TURSO_AUTH_TOKEN || process.env.DATABASE_AUTH_TOKEN;

// Bilder: auf Vercel im Blob-Speicher, lokal im Ordner /media
const blobToken = process.env.BLOB_READ_WRITE_TOKEN;

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  secret: process.env.PAYLOAD_SECRET || "",
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: " – Revice CMS",
    },
  },
  i18n: {
    supportedLanguages: { de },
    fallbackLanguage: "de",
  },
  collections: [Posts, Authors, Media, Users],
  editor: lexicalEditor(),
  db: sqliteAdapter({
    client: { url: databaseUrl, authToken: databaseToken },
    migrationDir: path.resolve(dirname, "cms/migrations"),
    prodMigrations: migrations,
  }),
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(blobToken),
      collections: { media: true },
      token: blobToken || "",
      // Upload direkt vom Browser zu Vercel Blob (umgeht das 4,5-MB-Limit von Vercel)
      clientUploads: true,
    }),
  ],
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
