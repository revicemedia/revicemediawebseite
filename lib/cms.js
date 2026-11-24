import { getPayload } from "payload";
import config from "@payload-config";

// Zugriff auf das CMS (Payload, Local API – ohne Umweg über HTTP)
const payload = () => getPayload({ config });

const published = { _status: { equals: "published" } };

/** Veröffentlichte Blogartikel, neueste zuerst */
export async function getPosts({ limit = 100 } = {}) {
  try {
    const { docs } = await (await payload()).find({
      collection: "posts",
      where: published,
      sort: "-publishedAt",
      limit,
      depth: 2,
    });
    return docs;
  } catch (error) {
    console.error("[cms] Blogartikel konnten nicht geladen werden:", error.message);
    return [];
  }
}

/** Einzelner veröffentlichter Artikel per URL-Slug */
export async function getPost(slug) {
  try {
    const { docs } = await (await payload()).find({
      collection: "posts",
      where: { and: [published, { slug: { equals: slug } }] },
      limit: 1,
      depth: 2,
    });
    return docs[0] || null;
  } catch (error) {
    console.error("[cms] Blogartikel konnte nicht geladen werden:", error.message);
    return null;
  }
}

/** Bild-URL, bevorzugt in einer bestimmten Größe (siehe Media-Collection) */
export const mediaUrl = (media, size) =>
  (media && typeof media === "object" && (media.sizes?.[size]?.url || media.url)) || null;

/** 2023-09-26T… → „26. September 2023“ */
export const formatDate = (iso) =>
  iso
    ? new Intl.DateTimeFormat("de-DE", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso))
    : "";
