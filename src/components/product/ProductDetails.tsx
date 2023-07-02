"use client";

import ProductActions from "@/components/product/product-actions";
import { Product } from "@/models";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ToastContainer } from "react-toastify";

interface Props {
  product: Product;
}

const ProductDetails: React.FC<Props> = ({ product }) => {
  const { attributes } = product;
  const { name, subtitle, description } = attributes;

  return (
    <>
      <div className="flex-[1] py-3">
        <div className="text-[34px] font-semibold mb-10 leading-tight">
          {name.toUpperCase()}
          {subtitle && (
            <div className="text-lg font-semibold mt-5">
              {subtitle.toUpperCase()}
            </div>
          )}
        </div>

        <ProductActions product={product} />

        <div>
          <div className="text-lg font-bold mb-5">Detalles del producto</div>
        </div>

        <div className="text-base mb-5 text-[#009EC1]">Stock: disponible</div>

        {description && (
          <div className="markdown text-md mb-5">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default ProductDetails;
