import { useDispatch } from "react-redux";

import { Product } from "@/models";
import { addToCart } from "@/store/cart-slice";
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

  const handleAddToCart = () => {
    if (!selectedSize) {
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
        className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default HandleAddToCart;
