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
  const { isProductInQuotation } = useProductExistence(product.id);

  useEffect(() => {
    if (isProductInQuotation) {
      const selectedSize = isProductInQuotation?.size;

      if (selectedSize && selectedSize.length > 0) {
        setSelectedSizes(selectedSize);
      }
    }
  }, [isProductInQuotation]);

  const sizeGridItems = attributes.product_sizes.data.map((item) => (
    <div
      key={item.id}
      className={`border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer ${
        selectedSizes.some((size) => size.val === item.attributes.val) &&
        "border-black"
      }`}
      onClick={() => {
        setSelectedSizes((prevSizes) =>
          selectedSizes.some((size) => size.val === item.attributes.val)
            ? prevSizes.filter((size) => size.val !== item.attributes.val)
            : [
                ...prevSizes,
                {
                  id: item.id,
                  val: item.attributes.val,
                  quantity: 1,
                  quotation_price: item.attributes.quotation_price,
                },
              ]
        );
        setShowError(false);
      }}
    >
      {item.attributes.val}
    </div>
  ));

  return (
    <>
      {attributes.product_sizes.data.length > 0 && (
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
