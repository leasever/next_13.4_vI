import RelatedProducts from "@/components/product/RelatedProducts";
import Pagination from "@/components/ui/PaginationButton";
import { Metadata } from "next";
import { getCategories, getProducts } from "./catalogue/services";
import HomePageInterface from "./home/ui/interface";

export const metadata: Metadata = {
  title: "Consorcio A&C - Eléctrica S.A.C",
  description:
    "Importación y venta de materiales eléctricos para tranformadores",
};


export default async function RootPage() {
  const [{ data: categories, meta }, { data: products }] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);
  return (
    <>
      <HomePageInterface />
      <Pagination categories={categories} meta={meta} itemsPerPage={2} />
      <RelatedProducts products={products} />
    </>
  );
}