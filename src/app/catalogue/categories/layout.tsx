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
      <PageTitle title={"CATEGORÍAS DESTACADAS"} description={""} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 ">
        {children}
      </div>
    </Wrapper>
  );
}
