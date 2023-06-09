import { Product } from "@/models";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const { attributes } = product;
  return (
    <>
      <Link href={`/catalogue/product/${product.attributes.slug}`}>
        <div className="aspect-[1] transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
          <Image
            width={650}
            height={650}
            src={
              attributes.thumbnail.data?.attributes.url
                ? attributes.thumbnail.data.attributes.url
                : "/sin_imagen.jpg"
            }
            alt={attributes.name}
            priority={true}
          />
        </div>
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">
            {attributes.name.toLocaleUpperCase()}
          </h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="text-sm ">Producto bajo pedido</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
