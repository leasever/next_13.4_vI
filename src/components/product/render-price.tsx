import { AttributesProduct } from "@/models";
import { getDiscountedPricePercentage } from "@/utils/helper";

interface Props {
  attributes: AttributesProduct;
}

export const renderPrice = ({ attributes }: Props) => {
  const { price, original_price } = attributes;
  const discountPercentage = getDiscountedPricePercentage(
    original_price,
    price
  );

  return (
    <>
      <p className="mr-2 text-lg font-semibold">S/{price}</p>
      {original_price && (
        <>
          <p className="text-base font-medium line-through">
            S/{original_price}
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {discountPercentage}% off
          </p>
        </>
      )}
    </>
  );
};
