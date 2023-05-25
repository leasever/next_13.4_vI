import HeroBanner from "@/components/banner/HeroBanner";
import PageTitle from "@/components/ui/PageTitle";
import Wrapper from "@/components/Wrapper";
import CategoriesPage from "../catalogue/categories/page";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        <PageTitle title={"CATEGORÍAS DESTACADAS"} description={""} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 ">
          {CategoriesPage()}
        </div>
      </Wrapper>
      ;
    </>
  );
}
