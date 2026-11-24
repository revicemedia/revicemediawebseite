import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("webdesign");

export default function Webdesign() {
  return <ServicePage slug="webdesign" />;
}
