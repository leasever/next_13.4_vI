import { CartItemInterface } from "@/models/cart.model";
import { updateQuotation } from "@/store/quotation-slice";
import React from "react";
import { useDispatch } from "react-redux";

interface Props {
  data: CartItemInterface;
}

export default function Size({ data }: Props) {
  const { id, size: cartSize, attributes } = data;

  const dispatch = useDispatch();

  const updateCartItem = (type: string, value: any) => {
    const payload = {
      key: type,
      val: value,
      id: id,
    };

    dispatch(updateQuotation(payload));
  };

  const handleQuantityChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    itemId: number,
    itemVal: string,
    quotation_price?: number
  ) => {
    const newSize = Number(e.target.value);
    const updatedSize = cartSize.map((item) =>
      item.id === itemId
        ? { ...item, quotation_price: item.quotation_price, quantity: newSize }
        : item
    );

    const existingSize = updatedSize.find((item) => item.id === itemId);
    existingSize
      ? (existingSize.quantity = newSize)
      : updatedSize.push({
          id: itemId,
          val: itemVal,
          quantity: newSize,
          quotation_price: quotation_price,
        });

    updateCartItem("size", updatedSize);
  };

  return (
    <div className="flex flex-wrap gap-5">
      {attributes.product_sizes.data.map((itemSize) => (
        <div className="flex items-center gap-1" key={itemSize.id}>
          <div className="font-semibold">{itemSize.attributes.val}</div>
          <select
            className="hover:text-black"
            value={cartSize.find((item) => item.id === itemSize.id)?.quantity}
            onChange={(e) =>
              handleQuantityChange(
                e,
                itemSize.id,
                itemSize.attributes.val,
                itemSize.attributes.quotation_price
              )
            }
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
