import { Product } from "@/models";
import { getDiscountedPricePercentage } from "@/utils/helper";

interface Props {
  product: Product;
}

export const renderPrice = ({ product }: Props) => {
  const { attributes } = product;

  return (
    <>
      {attributes.price ? (
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
      ) : (
        <div className="flex flex-col w-full h-28 justify-between text-left mb-10">
          <p className="text-base ">Producto bajo pedido</p>
          <button className="w-full py-4 rounded-lg bg-black text-white text-lg font-medium transition-transform active:scale-95  hover:opacity-75">
            Cotizar
          </button>
        </div>
      )}
    </>
  );
};
