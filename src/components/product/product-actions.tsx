import HandleAddToCart from "@/components/cart/HandleAddToCart";
import { Product } from "@/models";
import { SizeProd } from "@/models/cart.model";
import { useEffect, useState } from "react";
import { useProductExistence } from "../../utils/products-in-store";

interface ProductActionsProps {
  product: Product;
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => {
  const { attributes } = product;
  const [selectedSizes, setSelectedSizes] = useState<SizeProd[]>([]);
  const [showError, setShowError] = useState(false);
  const { isProductInCart, isProductInQuotation } = useProductExistence(
    product.id
  );

  useEffect(() => {
    if (isProductInCart || isProductInQuotation) {
      const selectedSize = isProductInCart
        ? isProductInCart.size
        : isProductInQuotation?.size;

      if (selectedSize && selectedSize.length > 0) {
        setSelectedSizes(selectedSize);
      }
    }
  }, [isProductInCart, isProductInQuotation]);

  const sizeGridItems = attributes.size.map((item) => (
    <div
      key={item.id}
      className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
        selectedSizes.some((size) => size.val === item.val) && "border-black"
      }`}
      onClick={() => {
        setSelectedSizes((prevSizes) =>
          selectedSizes.some((size) => size.val === item.val)
            ? prevSizes.filter((size) => size.val !== item.val)
            : [...prevSizes, { id: item.id, val: item.val, quantity: 1 }]
        );
        setShowError(false);
      }}
    >
      {item.val}
    </div>
  ));

  return (
    <>
      {attributes.size.length > 0 && (
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <div className="text-md font-semibold">Selecciona el tamaño</div>
          </div>

          <div id="sizesGrid" className="grid grid-cols-3 gap-2">
            {sizeGridItems}
          </div>

          {showError && (
            <div className="text-red-600 mt-1">
              Se requiere selección de tamaño
            </div>
          )}
        </div>
      )}

      <HandleAddToCart
        product={product}
        selectedSizes={selectedSizes}
        setShowError={setShowError}
      />
    </>
  );
};

export default ProductActions;
