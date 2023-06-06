import HomePage from "./home/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consorcio A&C - Eléctrica S.A.C",
  description:
    "Importación y venta de materiales eléctricos para tranformadores",
};

export default async function RootPage() {
  return <>{HomePage()}</>;
}
