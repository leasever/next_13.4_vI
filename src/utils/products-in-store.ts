import { CartItemInterface } from "@/models/cart.model";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export function checkIfProductExists(
  product: number,
  items: CartItemInterface[]
) {
  return items.find((item) => item.id === product);
}

export function useProductExistence(product: number) {
  const { quotationItems } = useSelector((state: RootState) => state.quotation);

  const isProductInQuotation = checkIfProductExists(product, quotationItems);

  return { isProductInQuotation };
}
