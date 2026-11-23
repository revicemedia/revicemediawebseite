import ServicePage from "@/components/ServicePage/ServicePage";
import { getService } from "@/components/data/services";

const service = getService("videografie");

export const metadata = {
  title: service.name,
  description: service.page.intro,
};

export default function Videografie() {
  return <ServicePage slug="videografie" />;
}
