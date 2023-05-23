import { AttributesProduct } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { renderPrice } from "./render-price";

function ProductCard({ attributes }: { attributes: AttributesProduct }) {
  return (
    <>
      <Link
        href={`/catalogue/product/${attributes.slug}`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <Image
          width={500}
          height={500}
          src={attributes.thumbnail.data.attributes.url}
          alt={attributes.name}
          className="m-auto"
        />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">{attributes.name}</h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg  font-semibold">S/{attributes.price}</p>

            {renderPrice({ attributes })}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
