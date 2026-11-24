import { RichText } from "@payloadcms/richtext-lexical/react";
import { toSlug } from "@/lib/slug";

// Reinen Text aus einem Lexical-Knoten holen (für Überschriften-Anker)
export const nodeText = (node) =>
  node?.text ?? (node?.children || []).map(nodeText).join("");

/** H2-Überschriften für das Inhaltsverzeichnis */
export const headingsOf = (content) =>
  (content?.root?.children || [])
    .filter((n) => n.type === "heading" && n.tag === "h2")
    .map((n) => ({ id: toSlug(nodeText(n)), title: nodeText(n) }));

const converters = ({ defaultConverters }) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) => {
    const Tag = node.tag;
    return <Tag id={toSlug(nodeText(node))}>{nodesToJSX({ nodes: node.children })}</Tag>;
  },
});

/** Artikeltext aus dem CMS im Revice-Stil (Styles: .rich-text in globals.css) */
export default function RichContent({ content }) {
  return <RichText data={content} converters={converters} className="rich-text" />;
}
