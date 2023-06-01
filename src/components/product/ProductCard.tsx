import { Product } from "@/models";
import Image from "next/image";
import Link from "next/link";
import { renderPrice } from "./render-price";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const { attributes } = product;
  return (
    <div className="aspect-[1] ">
      <Link
        href={`/catalogue/product/${product.attributes.slug}`}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <Image
          width={500}
          height={500}
          src={attributes.thumbnail.data.attributes.url}
          alt={attributes.name}
          priority={true}
        />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">
            {attributes.name.toLocaleUpperCase()}
          </h2>
          <div className="flex items-center text-black/[0.5]">
            {attributes.price ? (
              renderPrice({ product })
            ) : (
              <p className="text-sm ">Producto bajo pedido</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
