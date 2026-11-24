import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("webentwicklung");

export default function Webentwicklung() {
  return <ServicePage slug="webentwicklung" />;
}
