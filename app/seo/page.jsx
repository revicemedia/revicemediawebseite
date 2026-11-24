import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("seo");

export default function Seo() {
  return <ServicePage slug="seo" />;
}
