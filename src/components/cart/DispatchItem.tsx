import { CartItemInterface } from "@/models/cart.model";
import { removeFromCart, updateCart } from "@/store/cart-slice";
import { removeFromQuotation, updateQuotation } from "@/store/quotation-slice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Size from "./Size";

interface Props {
  data: CartItemInterface;
  value?: any;
}

export default function DispatchItem({ data }: Props) {
  const {
    productId,
    quantity,
    oneQuantityPrice,
    attributes: { size, name, price },
    size: sizeCart,
  } = data;
  const dispatch = useDispatch();

  const updateCartItem = (type: string, value: any) => {
    const payload = {
      key: type,
      val: value,
      id: productId,
    };

    oneQuantityPrice > 0
      ? dispatch(updateCart(payload))
      : dispatch(updateQuotation(payload));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    const newName = `${name} x ${newQuantity}`.toLocaleUpperCase();
    updateCartItem("quantity", newQuantity);
    updateCartItem("name", newName);
  };

  return (
    <>
      <div className="flex items-center justify-between mt-4">
        {size.length > 0 ? (
          <Size data={data} />
        ) : (
          <div className="flex items-center gap-1">
            <div className="font-semibold">Cantidad: </div>
            <select
              className="hover:text-black"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[...Array(50)].map((_, i) => {
                const q = i + 1;
                return (
                  <option key={q} value={q}>
                    {q}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        <RiDeleteBin6Line
          onClick={() =>
            dispatch(
              price
                ? removeFromCart({ id: productId })
                : removeFromQuotation({ id: productId })
            )
          }
          className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
        />
      </div>
    </>
  );
}
