import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consorcio A&C - Eléctrica S.A.C",
  description:
    "Importación y venta de materiales eléctricos para tranformadores",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
