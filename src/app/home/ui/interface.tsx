'use client'
import Wrapper from "@/components/Wrapper";
import HeroBanner from "@/components/banner/HeroBanner";
import CategoryCard from "@/components/category/CategoryCard";
import RelatedProducts from "@/components/product/RelatedProducts";
import PageTitle from "@/components/ui/PageTitle";
import { Product } from "@/models";
import { Category } from "@/models/category.model";

import { FC } from "react";

interface Props {
  categories: Category[];
  products: Product[];
}

const PageHome: FC<Props> = ({ categories, products }) => {
 
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

          <div className="w-full md:w-auto flex-[1.5]  mx-auto lg:mx-0">
            <RelatedProducts  products={products} />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default PageHome;
