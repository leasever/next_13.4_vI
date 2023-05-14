import { getCategories } from "../services";

export default async function CategoriesPage() {
  const { data: categories } = await getCategories();
  return (
    <>
      {categories.map((category) => (
        <p key={category.id}>
          Id : {category.id} name: {category.attributes.name}
        </p>
      ))}
    </>
  );
}
