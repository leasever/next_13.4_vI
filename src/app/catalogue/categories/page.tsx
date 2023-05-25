import CategoryCard from "@/components/category/CategoryCard";
import { getCategories } from "../services";
import { Category } from "@/models/category.model";

export default async function CategoriesPage() {
  const { data: categories } = await getCategories();

  const renderedCategories = categories.map((category: Category) => (
    <CategoryCard
      key={category.id}
      attributes={category.attributes}
      id={category.id}
    />
  ));

  return <>{renderedCategories}</>;
}
