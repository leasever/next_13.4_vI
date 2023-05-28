import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Consorcio A & C - Eléctrica S.A.C",
  description: "Home page de nuestra empresa",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
