import { redirect } from "next/navigation";

// Alte URL → Cases (der WAKE-UP-Case ist vorerst ausgeblendet)
export default function WakeUp() {
  redirect("/cases?kategorie=foto");
}
