import { Category } from "@/models/category.model";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({ attributes }: Category) {
  const {
    image: { data },
  } = attributes;
  return (
    <>
      <div className="group relative">
        <div className="relative max-h-96 w-full overflow-hidden rounded-lg bg-white  group-hover:opacity-75 ">
          <Image
            width={630}
            height={400}
            src={data ? data[0].attributes.url : "/sin_imagen.jpg"}
            alt={attributes.name}
            className="w-full"
          />
        </div>
        <h3 className="mt-6 text-lg text-gray-500">
          <Link href={`/catalogue/category/${attributes.slug}/1`}>
            <span className="absolute inset-0"></span>
            {attributes.name.toUpperCase()}
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {attributes.description}
        </p>
      </div>
    </>
  );
}

export default CategoryCard;
