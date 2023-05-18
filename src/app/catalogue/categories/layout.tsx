import PageTitle from "@/components/ui/PageTitle";
import Wrapper from "@/components/Wrapper";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Catálogo de categorías",
  description: "Todos nuestras categorías",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <PageTitle title={"Todos las categorías"} description={"Descripción"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {children}
      </div>
    </Wrapper>
  );
}
