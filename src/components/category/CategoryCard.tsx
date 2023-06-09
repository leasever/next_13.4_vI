import { CategoryAttributes } from "@/models/categories.model";
import Image from "next/image";
import Link from "next/link";
import SkeletonBackground from "@/components/ui/SkeletonBackground";

interface CategoryCardProps {
  category: CategoryAttributes;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { image, name, slug, description } = category;
  const { data } = image;

  const imageUrl = data ? data[0]?.attributes?.url : "/sin_imagen.jpg";

  return (
    <div className="group relative">
      <div className="relative max-h-96 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75">
        <Image
          width={630}
          height={400}
          src={imageUrl}
          alt={name}
          className="w-full"
          // blurDataURL="/placeholder-image.jpg" // Ruta a la imagen de placeholder desenfocada
          // placeholder="blur" // Se aplica el efecto de desenfoque al cargar
          onLoad={() => <SkeletonBackground />} // Se muestra el skeleton mientras se carga la imagen
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
