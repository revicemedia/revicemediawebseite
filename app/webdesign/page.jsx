import ServicePage from "@/components/ServicePage/ServicePage";
import { getService } from "@/components/data/services";

const service = getService("webdesign");

export const metadata = {
  title: service.name,
  description: service.page.intro,
};

export default function Webdesign() {
  return <ServicePage slug="webdesign" />;
}
