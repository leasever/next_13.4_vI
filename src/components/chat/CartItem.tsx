import { CartItemInterface } from "@/models/cart.model";
import { removeFromCart, updateCart } from "@/store/cart-slice";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface Props {
  data: CartItemInterface;
}

const CartItem = ({ data }: Props) => {
  const p = data.attributes;

  const dispatch = useDispatch();

  const updateCartItem = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    let payload = {
      key,
      val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
      id: data.id,
    };
    dispatch(updateCart(payload));
  };
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <Image
          src={p.thumbnail.data.attributes.url}
          alt={p.name}
          width={120}
          height={120}
        />
      </div>

      <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {p.name}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {p.subtitle}
          </div>
          <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
            MRP : S/{p.price}
          </div>
        </div>
        <div className="text-sm md:text-md font-medium text-black/[0.5] hidden md:block">
          {p.subtitle}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Talla:</div>
              <select
                className="hover:text-black"
                value={data.selectedSize}
                onChange={(e) => updateCartItem(e, "selectedSize")}
              >
                {p.size.data.map((item, i) => (
                  <option
                    key={i}
                    value={item.size}
                    disabled={!item.enabled}
                    defaultValue={
                      data.selectedSize === item.size ? "selected" : undefined
                    }
                  >
                    {item.size}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1">
              <div className="font-semibold">Cantidad:</div>
              <select
                className="hover:text-black"
                value={data.quantity}
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {[...Array(10)].map((_, i) => {
                  const q = i + 1;
                  return (
                    <option key={q} value={q}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <RiDeleteBin6Line
            onClick={() => dispatch(removeFromCart({ id: data.id }))}
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
