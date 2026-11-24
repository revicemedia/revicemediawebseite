import { brand } from "@/brandConfig";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${brand.site.url}/sitemap.xml`,
    host: brand.site.url,
  };
}
