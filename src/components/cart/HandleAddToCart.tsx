import { useDispatch, useSelector } from "react-redux";

import { Product } from "@/models";
import { addToCart } from "@/store/cart-slice";
import { RootState } from "@/store/store";
import { notifySuccess } from "@/utils/notify-manager";

interface HandleAddToCartProps {
  product: Product;
  selectedSize: string;
  setShowError: (showError: boolean) => void;
}

const HandleAddToCart: React.FC<HandleAddToCartProps> = ({
  product,
  selectedSize,
  setShowError,
}) => {
  const dispatch = useDispatch();
  const { attributes } = product;
  const { cartItems } = useSelector((state: RootState) => state.cart);

  if (attributes.stock === 0) {
    return null;
  }

  const isProductInCart = cartItems.some((item) => item.id === product.id);
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
      addToCart({
        ...product,
        selectedSize,
        oneQuantityPrice: attributes.price,
      })
    );

    notifySuccess("Producto agregado");
  };

  return (
    <>
      <button
        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75"
        onClick={handleAddToCart}
        disabled={isProductInCart}
      >
        {isProductInCart ? "Ya está en el carrito" : "Agregar al carrito"}
      </button>
    </>
  );
};

export default HandleAddToCart;
