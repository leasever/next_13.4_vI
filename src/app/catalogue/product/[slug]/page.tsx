import {
  getProduct,
  getProducts,
  getRelatedProducts,
} from "@/app/catalogue/services";
import { Metadata } from "next";

import ProductDetails from "./ui/interface";
import { Product } from "@/models";
import ProductDetailsCarousel from "@/components/product/Carousel";
import RelatedProducts from "@/components/product/RelatedProducts";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getProduct(params.slug);
  return {
    title: data[0]?.attributes.name,
  };
}

export async function generateStaticParams() {
  const products = await getProducts();

  return products.data.map(({ attributes: { slug } }: Product) => {
    return {
      slug,
    };
  });
}

export default async function ProductPage({ params }: Props) {
  const { data } = await getProduct(params.slug);

  const categoryId = data[0].attributes.categories.data[0]?.id;
  const products = categoryId
    ? (await getRelatedProducts(params.slug, categoryId)).data
    : [];

  return (
    <>
      <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        <ProductDetailsCarousel data={data[0].attributes.image.data} />
        <ProductDetails product={data[0]} />
      </div>
      {products[0] && <RelatedProducts products={products} />}
    </>
  );
}
