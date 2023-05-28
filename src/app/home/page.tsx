import { getCategories } from "../catalogue/services";
import PageHome from "./ui/interface";

export default async function HomePage() {
  const { data: categories } = await getCategories();

  return (
    <>
      <PageHome categories={categories} />
    </>
  );
}
