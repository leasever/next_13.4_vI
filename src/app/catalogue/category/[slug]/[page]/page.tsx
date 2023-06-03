import { getCategory, getProdutsPerCategory } from "@/app/catalogue/services";
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
  return {
    title: data[0].attributes.name,
  };
}

export default async function CategoryPage({ params: { slug, page } }: Props) {
  const [{ data: category }, { data, meta }] = await Promise.all([
    getCategory(slug),
    getProdutsPerCategory(slug, page, "3"),
  ]);

  return (
    <>
      <PageProducts data={data} meta={meta} category={category[0]} />
    </>
  );
}
