import {
  getProduct,
  getProducts,
  getRelatedProducts,
} from "@/app/catalogue/services";
import { Metadata } from "next";
import ProductDetails from "./ui/product-details";


interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data } = await getProduct(params.slug);
  return {
    title: data[0].attributes.name,
  };
}

// export async function generateStaticParams() {
//   const categories = await getProducts();
//   const paths = categories.data.map((c) => ({ slug: c.attributes.slug }));
//   return paths;
// }

export default async function ProductPage({ params }: Props) {
  const { data } = await getProduct(params.slug);
  const { data: products } = await getRelatedProducts(
    params.slug,
    data[0].attributes.categories.data[0].id
  );

  return <ProductDetails product={data[0]} products={products} />;
}
