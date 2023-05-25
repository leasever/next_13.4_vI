import { Category } from "@/models/category.model";
import Image from "next/image";
import Link from "next/link";

function CategoryCard({ attributes }: Category) {
  return (
    <>
      <div className="group relative">
        <div className="relative h-96 w-full overflow-hidden rounded-lg bg-white  group-hover:opacity-75 ">
          <Image
            width={630}
            height={400}
            src={attributes.image.data[0].attributes.url}
            alt={attributes.name}
            className=" h-full w-full object-cover object-center"
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
