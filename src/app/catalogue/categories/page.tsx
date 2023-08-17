import { getCategories } from "../../../services";
import Pagination from "../../../components/ui/PaginationButton";

export default async function CategoriesPage() {
  const { data: categories, meta } = await getCategories();

  return (
    <>
      <Pagination meta={meta} categories={categories} itemsPerPage={2} />
    </>
  );
}
