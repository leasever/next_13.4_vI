import { getCategory, getProdutsPerCategory } from "@/app/catalogue/services";
import { Metadata } from "next";
import PageProducts from "./ui/interface";
import { redirect } from 'next/navigation';

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
  const products = await getProdutsPerCategory(slug, page, '3');
  if (products.data.length === 0) {
    redirect('/catalogue/categories');
  }
  const { data: category } = await getCategory(slug);
  const { data, meta } = products;
  return (
    <>
      <PageProducts data={data} meta={meta} category={category[0]} />
    </>
  );
}
