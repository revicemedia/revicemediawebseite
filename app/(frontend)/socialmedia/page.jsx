import ServicePage from "@/components/ServicePage/ServicePage";
import { serviceMetadata } from "@/components/data/services";

export const metadata = serviceMetadata("socialmedia");

export default function SocialMedia() {
  return <ServicePage slug="socialmedia" />;
}
