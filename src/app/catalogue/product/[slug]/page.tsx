import {
  getProduct,
  getRelatedProducts
} from "@/app/catalogue/services";
import { Metadata } from "next";
import ProductDetails from "./ui/interface";
import { redirect } from "next/navigation";

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

export default async function ProductPage({ params }: Props) {
  const { data } = await getProduct(params.slug);
  if (data.length === 0) {
    redirect("/catalogue/products");
  }
  const categoryId = data[0].attributes.categories.data[0]?.id;

  if (categoryId) {
    const { data: products } = await getRelatedProducts(
      params.slug,
      categoryId
    );
    return (
      <>
        <ProductDetails product={data[0]} products={products} />
      </>
    );
  }

  return <ProductDetails product={data[0]} products={[]} />;
}
