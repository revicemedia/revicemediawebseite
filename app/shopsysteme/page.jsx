import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("shopsysteme");

export default function Shopsysteme() {
  return <ServicePage slug="shopsysteme" />;
}
