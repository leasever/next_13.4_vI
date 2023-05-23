import HandleAddToCart from "@/components/cart/HandleAddToCart";
import { Product } from "@/models";
import { useState } from "react";
import { renderSizes } from "./render-sizes";

interface ProductActionsProps {
  product: Product;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { attributes } = product;
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);

  return (
    <>
      <div className="mb-10">
        {renderSizes({
          attributes,
          selectedSize,
          setSelectedSize,
          setShowError,
          showError,
        })}
      </div>

      <HandleAddToCart
        product={product}
        selectedSize={selectedSize}
        setShowError={setShowError}
      />
    </>
  );
};

export default ProductActions;
