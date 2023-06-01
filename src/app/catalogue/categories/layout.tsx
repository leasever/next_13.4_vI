import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Catálogo de categorías",
  description: "Todos nuestras categorías",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
