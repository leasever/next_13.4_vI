import {
  getCategories,
  getCategory,
  getProdutsPerCategory,
} from "@/app/catalogue/services";
import { Metadata } from "next";
import ProductsCategory from "./ui/products-details";

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



export default async function CategoryPage({ params: { slug } }: Props) {
  const { data } = await getCategory(slug);
  const categoryName = data[0].attributes.name;
  return (
    <>
      <span>{categoryName}</span>
    </>
  );
}
