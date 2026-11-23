import ServicePage from "@/components/ServicePage/ServicePage";
import { getService } from "@/components/data/services";

const service = getService("shopsysteme");

export const metadata = {
  title: service.name,
  description: service.page.intro,
};

export default function Shopsysteme() {
  return <ServicePage slug="shopsysteme" />;
}
