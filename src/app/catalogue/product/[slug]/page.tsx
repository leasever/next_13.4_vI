import { getProduct, getRelatedProducts } from "@/app/catalogue/services";
import ProductDetails from "./productDetails";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await getProduct(params.slug);
  return {
    title: product.attributes.name,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await getProduct(params.slug);
  const products = await getRelatedProducts(product);

  return (
    <>
      <ProductDetails product={product} products={products} />
    </>
  );
}
