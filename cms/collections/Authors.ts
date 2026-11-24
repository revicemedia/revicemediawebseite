import type { CollectionConfig } from "payload";

// Autoren, die unter Blogartikeln angezeigt werden
export const Authors: CollectionConfig = {
  slug: "authors",
  labels: { singular: "Autor", plural: "Autoren" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "role"],
    group: "Blog",
  },
  access: { read: () => true },
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "role", label: "Rolle", type: "text", admin: { description: "z. B. „Gründer von Revice Media“" } },
    { name: "image", label: "Foto", type: "upload", relationTo: "media" },
  ],
};
