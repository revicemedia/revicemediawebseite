import type { CollectionConfig } from "payload";

// Logins für das CMS (/admin)
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Benutzer", plural: "Benutzer" },
  admin: {
    useAsTitle: "email",
    group: "Einstellungen",
  },
  auth: true,
  fields: [{ name: "name", label: "Name", type: "text" }],
};
