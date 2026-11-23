import ServicePage from "@/components/ServicePage/ServicePage";
import { getService } from "@/components/data/services";

const service = getService("app-entwicklung");

export const metadata = {
  title: service.name,
  description: service.page.intro,
};

export default function AppEntwicklung() {
  return <ServicePage slug="app-entwicklung" />;
}
