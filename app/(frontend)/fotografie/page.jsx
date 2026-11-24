import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("fotografie");

export default function Fotografie() {
  return <ServicePage slug="fotografie" />;
}
