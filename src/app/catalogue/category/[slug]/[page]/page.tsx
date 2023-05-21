import { getCategory, getProdutsPerCategory } from "@/app/catalogue/services";
import { Metadata } from "next";
import PageProducts from "./ui/page-products";

interface Props {
  params: {
    slug: string;
    page: number;
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

export default async function page({ params: { slug, page } }: Props) {
  const products = await getProdutsPerCategory(slug, page, 3);
  const { data: category } = await getCategory(slug);
  const { data, meta } = products;
  return (
    <>
      {!data.length ? (
        <>Not found...</>
      ) : (
        <PageProducts data={data} meta={meta} category={category[0]} />
      )}
    </>
  );
}
