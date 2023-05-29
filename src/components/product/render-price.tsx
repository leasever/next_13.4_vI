import { Product } from "@/models";
import { getDiscountedPricePercentage } from "@/utils/helper";

interface Props {
  product: Product;
}

export const renderPrice = ({ product }: Props) => {
  const { attributes } = product;

  return (
    <>
      <p className="mr-2 text-lg font-semibold">S/{attributes.price}</p>
      {attributes.original_price && (
        <>
          <p className="text-base font-medium line-through">
            S/{attributes.original_price}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {getDiscountedPricePercentage(
              attributes.original_price,
              attributes.price
            )}
            %off
          </p>
        </>
      )}
    </>
  );
};
