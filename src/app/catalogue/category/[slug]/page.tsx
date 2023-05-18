import {
  getCategories,
  getCategory,
  getProdutsPerCategory,
} from "@/app/catalogue/services";
import { Metadata } from "next";
import ProductsCategory from "./ui/products-details";
export const dynamicParams = true;

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { data } = await getCategory(slug);
  return {
    title: data[0].attributes.name,
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  const paths = categories.data.map((c) => ({ slug: c.attributes.slug }));
  return paths;
}

export default async function CategoryPage({ params: { slug } }: Props) {
  const [category, products] = await Promise.all([
    getCategory(slug),
    getProdutsPerCategory(slug, 1, 3),
  ]);

  return (
    <>
      <ProductsCategory products={products} category={category} />
    </>
  );
}
