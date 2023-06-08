import CategoryCard from "@/components/category/CategoryCard";
import PageTitle from "@/components/ui/PageTitle";
import Wrapper from "@/components/Wrapper";
import { Category } from "@/models/categories.model";

export default function CategoriesInterface({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <Wrapper>
      <PageTitle title={"CATEGORÍAS DESTACADAS"} description={""} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 ">
        {categories.map((category: Category) => (
          <CategoryCard
            key={category.id}
            attributes={category.attributes}
            id={category.id}
          />
        ))}
      </div>
    </Wrapper>
  );
}
