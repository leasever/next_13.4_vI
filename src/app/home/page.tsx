import { getCategories, getProducts } from "../catalogue/services";
import PageHome from "./ui/interface";

export default async function HomePage() {
  const [{ data: categories }, { data: products }] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);
  return (
    <>
      <PageHome categories={categories} products={products} />
    </>
  );
}
