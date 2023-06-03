import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description: "Todos nuestros productos",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
