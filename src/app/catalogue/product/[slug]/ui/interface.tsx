"use client";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ToastContainer } from "react-toastify";

import ProductDetailsCarousel from "@/components/product/ProductDetailsCarousel";
import RelatedProducts from "@/components/product/RelatedProducts";
import ProductActions from "@/components/product/product-actions";
import { renderPrice } from "@/components/product/render-price";
import { Product } from "@/models";

interface Props {
  product: Product;
  products: Product[];
}

const ProductDetails: React.FC<Props> = ({ product, products }) => {
  const { attributes } = product;

  return (
    <div className="md:py-20">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <ProductDetailsCarousel data={attributes.image.data} />
        </div>
        <div className="flex-[1] py-3">
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            {attributes.name.toUpperCase()}
          </div>

          <div className="text-lg font-semibold mb-5">
            {attributes.subtitle.toUpperCase()}
          </div>

          <div className="flex items-center text-black/[0.5]">
            {renderPrice({ product })}
          </div>

          {attributes.price && (
            <>
              <div className="text-md font-medium text-black/[0.5]">
                Incluido de impuestos
              </div>

              <div className="text-md font-medium text-black/[0.5] mb-10">
                (También incluye todos los deberes aplicables)
              </div>

              <ProductActions product={product} />
            </>
          )}

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
      </div>
      {products[0] && <RelatedProducts products={products} />}
    </div>
  );
};

export default ProductDetails;
