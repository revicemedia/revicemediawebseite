import ServicePage from "@/components/ServicePage/ServicePage";
import { getService } from "@/components/data/services";

const service = getService("grafikdesign");

export const metadata = {
  title: service.name,
  description: service.page.intro,
};

export default function Grafikdesign() {
  return <ServicePage slug="grafikdesign" />;
}
