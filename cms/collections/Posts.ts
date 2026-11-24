import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, CollectionConfig, FieldHook } from "payload";
import {
  FixedToolbarFeature,
  HeadingFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { toSlug } from "../../lib/slug";

const slugFromTitle: FieldHook = ({ value, data }) =>
  value ? toSlug(value) : data?.title ? toSlug(data.title) : value;

// Nach dem Speichern die betroffenen Seiten neu erzeugen, damit Änderungen sofort live sind
const revalidate = async (slugs: (string | undefined)[], context: Record<string, unknown>) => {
  if (context?.disableRevalidate) return;
  try {
    const { revalidatePath } = await import("next/cache");
    revalidatePath("/");
    revalidatePath("/blog");
    revalidatePath("/sitemap.xml");
    slugs.filter(Boolean).forEach((slug) => revalidatePath(`/blog/${slug}`));
  } catch {
    // außerhalb von Next.js (z. B. Seed-Skript) gibt es nichts neu zu erzeugen
  }
};

const afterChange: CollectionAfterChangeHook = async ({ doc, previousDoc, context }) => {
  await revalidate([doc?.slug, previousDoc?.slug], context);
  return doc;
};

const afterDelete: CollectionAfterDeleteHook = async ({ doc, context }) => {
  await revalidate([doc?.slug], context);
  return doc;
};

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Blogartikel", plural: "Blogartikel" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "publishedAt", "_status"],
    group: "Blog",
    preview: (doc) => (doc?.slug ? `/blog/${doc.slug}` : null),
  },
  defaultSort: "-publishedAt",
  versions: {
    drafts: true,
    maxPerDoc: 20,
  },
  access: {
    // Öffentlich nur veröffentlichte Artikel, eingeloggt auch Entwürfe
    read: ({ req: { user } }) => (user ? true : { _status: { equals: "published" } }),
  },
  hooks: {
    afterChange: [afterChange],
    afterDelete: [afterDelete],
  },
  fields: [
    {
      name: "title",
      label: "Überschrift",
      type: "text",
      required: true,
    },
    {
      name: "excerpt",
      label: "Kurzbeschreibung",
      type: "textarea",
      required: true,
      maxLength: 300,
      admin: {
        description: "1–2 Sätze. Erscheint in der Blog-Übersicht und bei Google.",
      },
    },
    {
      name: "coverImage",
      label: "Titelbild",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "content",
      label: "Inhalt",
      type: "richText",
      required: true,
      admin: {
        description: "Zwischenüberschriften (H2) erscheinen automatisch im Inhaltsverzeichnis.",
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures.filter((f) => f.key !== "heading"),
          HeadingFeature({ enabledHeadingSizes: ["h2", "h3"] }),
          FixedToolbarFeature(),
        ],
      }),
    },
    {
      name: "faq",
      label: "Akkordeon (optional)",
      type: "group",
      admin: {
        description: "Aufklappbare Punkte am Ende des Artikels, z. B. „5 Gründe für …“.",
      },
      fields: [
        { name: "title", label: "Überschrift", type: "text" },
        {
          name: "items",
          label: "Punkte",
          labels: { singular: "Punkt", plural: "Punkte" },
          type: "array",
          fields: [
            { name: "question", label: "Titel", type: "text", required: true },
            { name: "answer", label: "Text", type: "textarea", required: true },
          ],
        },
      ],
    },
    {
      name: "ctaTitle",
      label: "Überschrift Kontakt-Box (optional)",
      type: "text",
      admin: { placeholder: "Du willst mehr aus deinem Auftritt machen?" },
    },

    // Seitenleiste
    {
      name: "slug",
      label: "URL",
      type: "text",
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "Wird automatisch aus der Überschrift erzeugt.",
      },
      hooks: { beforeValidate: [slugFromTitle] },
    },
    {
      name: "publishedAt",
      label: "Veröffentlicht am",
      type: "date",
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayOnly", displayFormat: "dd.MM.yyyy" },
      },
    },
    {
      name: "author",
      label: "Autor",
      type: "relationship",
      relationTo: "authors",
      admin: { position: "sidebar" },
    },
    {
      name: "categories",
      label: "Schlagworte",
      type: "text",
      hasMany: true,
      admin: { position: "sidebar", description: "z. B. Webseiten, Social Media" },
    },
  ],
};
