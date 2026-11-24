import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("grafikdesign");

export default function Grafikdesign() {
  return <ServicePage slug="grafikdesign" />;
}
