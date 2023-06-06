"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import ProductActions from "@/components/product/product-actions";
import { renderPrice } from "@/components/product/render-price";
import { Product } from "@/models";

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const { attributes } = product;

  return (
    <>
      <div className="flex-[1] py-3">
        <div className="text-[34px] font-semibold mb-2 leading-tight">
          {attributes.name.toUpperCase()}
        </div>

        <div className="text-lg font-semibold mb-5">
          {attributes.subtitle?.toUpperCase()}
        </div>

        {attributes.price && (
          <>
            <div className="flex items-center text-black/[0.5]">
              {renderPrice({ product })}
            </div>
            <div className="text-md font-medium text-black/[0.5]">
              Incluido de impuestos
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-10">
              (También incluye todos los deberes aplicables)
            </div>
          </>
        )}

        <ProductActions product={product} />

        <div>
          <div className="text-lg font-bold mb-5">Detalles del producto</div>
        </div>
        <div className="text-base mb-5 text-[#009EC1]">
          Stock:
          {attributes.stock ? " " + attributes.stock : <> disponible</>}
        </div>
        <div className="markdown text-md mb-5">
          <ReactMarkdown>{attributes.description}</ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
