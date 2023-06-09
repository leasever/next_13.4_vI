import { CategoryAttributes } from "@/models/categories.model";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: CategoryAttributes;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { image, name, slug, description } = category;
  const { data } = image;

  const imageUrl = data ? data[0]?.attributes?.url : "/sin_imagen.jpg";
  const imageLoader = ({ src, width, quality }: any) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="group relative">
      <div className="relative max-h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
        <Image
          width={630}
          height={400}
          loader={imageLoader}
          src={imageUrl}
          alt={name}
          className="w-full"
        />
      </div>
      <div className="mt-6">
        <Link href={`/catalogue/category/${slug}/1`}>
          <p className="absolute inset-0"></p>
        </Link>
      </div>
      <h3 className="text-base font-semibold text-gray-900">
        {name.toUpperCase()} {description}
      </h3>
    </div>
  );
};

export default CategoryCard;
