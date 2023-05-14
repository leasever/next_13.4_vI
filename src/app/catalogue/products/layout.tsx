import PageTitle from "@/components/PageTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description: "Todos nuestros productos",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageTitle title={"Todos los productos"} description={"Descripción"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {children}
      </div>
    </>
  );
}
