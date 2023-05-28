import Wrapper from "@/components/Wrapper";
import HeroBanner from "@/components/banner/HeroBanner";
import CategoryCard from "@/components/category/CategoryCard";
import PageTitle from "@/components/ui/PageTitle";
import { Category } from "@/models/category.model";

import { FC } from "react";

interface Props {
  categories: Category[];
}

const PageHome: FC<Props> = ({ categories }) => {
  return (
    <>
      <HeroBanner />
      <Wrapper>
        <div className="md:pb-20">
          <PageTitle title="Categorías destacadas" description="" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 ">
            {categories?.map((category) => (
              <CategoryCard
                key={category.id}
                attributes={category.attributes}
                id={category.id}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default PageHome;
