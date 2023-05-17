import { getCategories } from "../services";

export default async function CategoriesPage() {
  const { data: categories } = await getCategories();

  const renderedCategories = categories.map((category) => (
    <p key={category.id}>
      Id: {category.id} Name: {category.attributes.name}
    </p>
  ));

  return <>{renderedCategories}</>;
}
