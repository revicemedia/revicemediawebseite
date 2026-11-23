import ServicePage from "@/components/ServicePage/ServicePage";
import { getService } from "@/components/data/services";

const service = getService("webentwicklung");

export const metadata = {
  title: service.name,
  description: service.page.intro,
};

export default function Webentwicklung() {
  return <ServicePage slug="webentwicklung" />;
}
