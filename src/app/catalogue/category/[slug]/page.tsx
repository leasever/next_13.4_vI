import { getCategory, getProdutsPerCategory } from "@/app/catalogue/services";
import ProductsCategory from "./productsCategory";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params: { slug } }: Props) {
  const maxResult = 3;
  const page = 1;
  const products = await getProdutsPerCategory(slug, page, maxResult);
  const category = await getCategory(slug);
  return (
    <>
      <ProductsCategory dataProducts={products} category={category} />
    </>
  );
}
