import RelatedProducts from "@/components/product/RelatedProducts";
import Pagination from "../../components/ui/PaginationButton";
import { getCategories, getProducts } from "../catalogue/services";
import PageHome from "./ui/interface";

export default async function HomePage() {
  const [{ data: categories, meta }, { data: products }] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);
  return (
    <>
      <PageHome />
      {<Pagination categories={categories} meta={meta} itemsPerPage={2} />}
      <RelatedProducts products={products} />
    </>
  );
}
