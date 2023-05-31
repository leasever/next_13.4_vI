import { useDispatch, useSelector } from "react-redux";

import { Product } from "@/models";
import { addToCart } from "@/store/cart-slice";
import { RootState } from "@/store/store";
import { notifySuccess } from "@/utils/notify-manager";
import { addToQuotation } from "@/store/quotation-slice";

interface HandleAddToCartProps {
  product: Product;
  selectedSize: string;
  setShowError: (showError: boolean) => void;
  productName?: string;
}

const HandleAddToCart: React.FC<HandleAddToCartProps> = ({
  product,
  selectedSize,
  setShowError,
}) => {
  const dispatch = useDispatch();
  const { attributes } = product;

  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { quotationItems } = useSelector((state: RootState) => state.quotation);
  
  if (attributes.stock === 0) {
    return null;
  }

  const isProductInCart = cartItems.some(
    (item) => item.productId === product.id
  );
  const isProductInQuotation = quotationItems.some(
    (item) => item.productId === product.id
  );

  const handleAddToCart = () => {
    if (!selectedSize && attributes.size) {
      setShowError(true);
      document.getElementById("sizesGrid")?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      return;
    }

    dispatch(
      attributes.price
        ? addToCart({
            ...product,
            selectedSize,
            productId: product.id,
            oneQuantityPrice: attributes.price,
          })
        : addToQuotation({
            ...product,
            selectedSize,
            productId: product.id,
            name: `${attributes.name} x 1`.toUpperCase(),
          })
    );

    notifySuccess("Producto agregado");
  };

  return (
    <>
      <button
        className={`w-full py-4 rounded-full  text-white text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 ${
          isProductInCart || isProductInQuotation
            ? "bg-[#656565]"
            : "bg-[#1D1D1D]"
        }`}
        onClick={handleAddToCart}
        disabled={isProductInCart || isProductInQuotation}
      >
        {isProductInCart || isProductInQuotation
          ? attributes.price
            ? "Ya está agregado al carrito"
            : "Ya está agregado para cotizar"
          : attributes.price
          ? "Agregar al carrito"
          : "Cotizar"}
      </button>
    </>
  );
};

export default HandleAddToCart;
