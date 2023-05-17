import { getCategory, getProdutsPerCategory } from "@/app/catalogue/services";
import ProductsCategory from "./ui/productsCategory";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const category = await getCategory(slug);

  return {
    title: category.attributes.name,
  };
}

export default async function CategoryPage({ params: { slug } }: Props) {
  const [category, products] = await Promise.all([
    getCategory(slug),
    getProdutsPerCategory(slug, 1, 3),
  ]);

  return (
    <>
      <ProductsCategory dataProducts={products} category={category} />
    </>
  );
}
