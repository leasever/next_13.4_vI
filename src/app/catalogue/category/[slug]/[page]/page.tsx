import { getCategory, getProdutsPerCategory } from "@/app/catalogue/services";
import { Metadata } from "next";
import PageProducts from "./ui/interface";
import { Category, Meta } from "@/models/category.model";
import { Product } from "@/models";
import NotFound from "@/app/not-found";

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
  const title = (data[0]?.attributes?.name).toLocaleUpperCase() || "";
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
      getProdutsPerCategory(slug, page, "3"),
    ]);
    const category = categoryResponse.data[0];
    const { data, meta } = productsResponse;
    return { category, data, meta };
  };

  const { category, data, meta } = await fetchData();

  if (!category || data.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <PageProducts data={data} meta={meta} category={category} />
    </>
  );
}
