import { getCategory, getProductsPerCategory } from "@/services";
import { CategoryProductsNotFound } from "@/lib/execptions";
import { Category, Meta, Product } from "@/models";
import { Metadata } from "next";
import PageProducts from "./ui/interface";

interface Props {
  params: {
    slug: string;
    page: string;
  };
}

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  const { data } = await getCategory(slug);
  const title = data[0]?.attributes?.name?.toLocaleUpperCase() || "";
  return { title };
}

export default async function CategoryPage({ params: { slug, page } }: Props) {
  const fetchData = async (): Promise<{
    category: Category;
    data: Product[];
    meta: Meta;
  }> => {
    const [categoryResponse, productsResponse] = await Promise.all([
      getCategory(slug),
      getProductsPerCategory(slug, page, "3"),
    ]);

    if (!productsResponse || productsResponse.data.length === 0) {
      throw new CategoryProductsNotFound();
    }
    const category = categoryResponse.data[0];
    const { data, meta } = productsResponse;

    return { category, data, meta };
  };

  const { category, data, meta } = await fetchData();

  return (
    <>
      <PageProducts data={data} meta={meta} category={category} />
    </>
  );
}
