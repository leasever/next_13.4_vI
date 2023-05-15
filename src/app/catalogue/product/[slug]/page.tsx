import { getProduct, getRelatedProducts } from "@/app/catalogue/services";
import { Metadata } from "next";
import ProductDetails from "./ui/productDetails";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const product = await getProduct(slug);
  return {
    title: product.attributes.name,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  const products = await getRelatedProducts(product);

  return (
    <>
      <ProductDetails product={product} products={products} />
    </>
  );
}
