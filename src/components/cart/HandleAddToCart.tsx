import { Product } from "@/models";
import { SizeProd } from "@/models/cart.model";
import { addToCart } from "@/store/cart-slice";
import { addToQuotation } from "@/store/quotation-slice";
import { notifySuccess } from "@/utils/notify-manager";
import { useDispatch } from "react-redux";
import { useProductExistence } from "../../utils/products-in-store";

interface HandleAddToCartProps {
  product: Product;
  selectedSizes: SizeProd[];
  setShowError: (showError: boolean) => void;
  productName?: string;
}

const HandleAddToCart: React.FC<HandleAddToCartProps> = ({
  product,
  selectedSizes,
  setShowError,
}) => {
  const { attributes } = product;

  if (attributes.stock === 0) {
    return null;
  }

  const dispatch = useDispatch();
  const { isProductInCart, isProductInQuotation } = useProductExistence(
    product.id
  );

  const handleAddToCart = () => {
    if (selectedSizes.length <= 0 && attributes.size.length > 0) {
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
            size: selectedSizes,
            productId: product.id,
            oneQuantityPrice: attributes.price,
          })
        : addToQuotation({
            ...product,
            size: selectedSizes,
            productId: product.id,
            name: `${attributes.name}`.toUpperCase(),
          })
    );

    notifySuccess("Producto agregado");
  };

  const buttonDisabled = !!(isProductInCart || isProductInQuotation);

  return (
    <button
      className={`w-full py-4 rounded-full  text-white text-lg font-medium transition-transform active:scale-95 mb-10 hover:opacity-75 ${
        buttonDisabled ? "bg-[#656565]" : "bg-[#1D1D1D]"
      }`}
      onClick={handleAddToCart}
      disabled={buttonDisabled}
    >
      {buttonDisabled && "Producto agregado"}
      {!buttonDisabled &&
        (attributes.price ? "Agregar al carrito" : "Cotizar producto")}
    </button>
  );
};

export default HandleAddToCart;
