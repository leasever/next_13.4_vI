import { getProduct, getRelatedProducts } from "@/app/catalogue/services";
import RootProductPage from "@/components/product/RootProductPage";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getProduct(params.slug);
  return {
    title: (data[0]?.attributes.name).toUpperCase(),
  };
}

export default async function ProductPage({ params }: Props) {
  const { data } = await getProduct(params.slug);
  const categoryId = data[0]?.attributes.categories.data[0]?.id;
  const products = categoryId
    ? (await getRelatedProducts(params.slug, categoryId)).data
    : [];

  return (
    <>
      <RootProductPage product={data} products={products} />
    </>
  );
}
