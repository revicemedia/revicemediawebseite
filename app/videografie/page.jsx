import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("videografie");

export default function Videografie() {
  return <ServicePage slug="videografie" />;
}
