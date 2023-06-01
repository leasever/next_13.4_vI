import { getCategories } from "../services";
import CategoriesInterface from "./ui/interface";

export default async function CategoriesPage() {
  const { data: categories } = await getCategories();

  return <>{<CategoriesInterface categories={categories} />}</>;
}
