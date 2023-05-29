import { CartItemInterface } from "@/models/cart.model";
import { QuotationItemInterface } from "@/models/quotation.model";
import { removeFromCart, updateCart } from "@/store/cart-slice";
import { removeFromQuotation, updateQuotation } from "@/store/quotation-slice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";

interface Props {
  data: CartItemInterface | QuotationItemInterface;
  value?: any;
}

export default function DispatchItem({ data }: Props) {
  const { id, quantity, oneQuantityPrice } = data;
  const dispatch = useDispatch();

  const updateCartItem = (type: string, value: any) => {
    const payload = {
      key: type,
      val: value,
      id: id,
    };

    oneQuantityPrice > 0
      ? dispatch(updateCart(payload))
      : dispatch(updateQuotation(payload));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQuantity = parseInt(e.target.value);
    updateCartItem("quantity", newQuantity);
  };
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value;
    updateCartItem("selectedSize", newSize);
  };

  return (
    <>
      <div className="flex items-center gap-1">
        <div className="font-semibold">Cantidad: </div>
        <select
          className="hover:text-black"
          value={quantity}
          onChange={handleQuantityChange}
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

      {data.attributes.size && (
        <div className="flex items-center gap-1">
          <div className="font-semibold">Talla:</div>
          <select
            className="hover:text-black"
            value={data.selectedSize}
            onChange={handleSizeChange}
          >
            {data.attributes.size.data.map((item: any, i: any) => (
              <option
                key={i}
                value={item.size}
                disabled={!item.enabled}
                selected={data.selectedSize === item.size}
              >
                {item.size}
              </option>
            ))}
          </select>
        </div>
      )}

      <RiDeleteBin6Line
        onClick={() =>
          dispatch(
            data.attributes.price
              ? removeFromCart({ id: data.id })
              : removeFromQuotation({ id: data.id })
          )
        }
        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
      />
    </>
  );
}
