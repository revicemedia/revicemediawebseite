import ServicePage from "@/components/ServicePage/ServicePage";
import { getService } from "@/components/data/services";

const service = getService("socialmedia");

export const metadata = {
  title: service.name,
  description: service.page.intro,
};

export default function SocialMedia() {
  return <ServicePage slug="socialmedia" />;
}
