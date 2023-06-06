import {
  getProduct,
  getProducts,
  getRelatedProducts,
} from "@/app/catalogue/services";
import { Metadata } from "next";

import ProductDetails from "./ui/interface";
import { Product } from "@/models";

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

export const revalidate = 5;
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
      <ProductDetails product={data[0]} products={products} />
    </>
  );
}
