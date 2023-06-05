import { CartItemInterface } from "@/models/cart.model";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

export function checkIfProductExists(
  product: number,
  items: CartItemInterface[]
) {
  return items.find((item) => item.productId === product);
}

export function useProductExistence(product: number) {
  const { quotationItems } = useSelector((state: RootState) => state.quotation);
  const { cartItems } = useSelector((state: RootState) => state.cart);

  const isProductInCart = checkIfProductExists(product, cartItems);
  const isProductInQuotation = checkIfProductExists(product, quotationItems);

  return { isProductInCart, isProductInQuotation };
}
