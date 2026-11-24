import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("app-entwicklung");

export default function AppEntwicklung() {
  return <ServicePage slug="app-entwicklung" />;
}
