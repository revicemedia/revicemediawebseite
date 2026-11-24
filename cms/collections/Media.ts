import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Bild", plural: "Medien" },
  admin: { group: "Blog" },
  access: { read: () => true },
  fields: [
    {
      name: "alt",
      label: "Alternativtext",
      type: "text",
      required: true,
      admin: { description: "Kurze Bildbeschreibung – wichtig für Google und Barrierefreiheit." },
    },
  ],
  upload: {
    mimeTypes: ["image/*"],
    focalPoint: true,
    imageSizes: [
      { name: "card", width: 900, height: 600, position: "centre" },
      { name: "large", width: 1920, withoutEnlargement: true },
    ],
    adminThumbnail: "card",
  },
};
