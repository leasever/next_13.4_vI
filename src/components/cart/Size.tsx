import { CartItemInterface } from "@/models/cart.model";
import { updateCart } from "@/store/cart-slice";
import { updateQuotation } from "@/store/quotation-slice";
import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  data: CartItemInterface;
}

export default function Size({ data }: Props) {
  const { productId, oneQuantityPrice, size: cartSize } = data;

  const dispatch = useDispatch();

  const updateCartItem = (type: string, value: any) => {
    const payload = {
      key: type,
      val: value,
      id: productId,
    };

    dispatch(
      oneQuantityPrice > 0 ? updateCart(payload) : updateQuotation(payload)
    );
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    itemId: number,
    itemVal: string
  ) => {
    const newSize = Number(e.target.value);
    const updatedSize = cartSize.map((item) =>
      item.id === itemId ? { ...item, quantity: newSize } : item
    );

    const existingSize = updatedSize.find((item) => item.id === itemId);
    existingSize
      ? (existingSize.quantity = newSize)
      : updatedSize.push({ id: itemId, quantity: newSize, val: itemVal });

    updateCartItem("size", updatedSize);
  };

  return (
    <div className="flex flex-wrap gap-5">
      {data.attributes.size.map((itemSize) => (
        <div className="flex items-center gap-1" key={itemSize.id}>
          <div className="font-semibold">{itemSize.val}</div>
          <select
            className="hover:text-black"
            value={cartSize.find((item) => item.id === itemSize.id)?.quantity}
            onChange={(e) => handleQuantityChange(e, itemSize.id, itemSize.val)}
          >
            {[...Array(50)].map((_, i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
}
