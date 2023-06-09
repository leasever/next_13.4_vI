import { CartItemInterface } from "@/models/cart.model";
import Image from "next/image";
import Link from "next/link";
import DispatchItem from "./DispatchItem";

interface Props {
  data: CartItemInterface;
}

const CartItem = ({ data }: Props) => {
  const p = data.attributes;
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b ">
      <div className="shrink-0 aspect-square w-[50px] h-[50px] md:h-[120px] md:w-[120px] bg-white ">
        <Link href={`/catalogue/product/${p.slug}`}>
          <Image
            src={
              p.thumbnail.data?.attributes.url
                ? p.thumbnail.data.attributes.url
                : "/sin_imagen.jpg"
            }
            alt={p.name}
            width={120}
            height={120}
          />
        </Link>
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name.toUpperCase()}
          </div>
        </div>
        <div className="text-sm md:text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtitle?.toUpperCase()}
        </div>
        <DispatchItem data={data} />
      </div>
    </div>
  );
};

export default CartItem;
