"use client";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";
import { Product } from "@/models";
import { addToCart } from "@/store/cart-slice";
import { getDiscountedPricePercentage } from "@/utils/helper";
import { notifySuccess } from "@/utils/notify-manager";
import { FC, useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

interface Props {
  product: Product;
  products: Product[];
}

const ProductDetails: FC<Props> = ({ product, products }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const { attributes } = product;

  return (
    <div className="md:py-20">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]  ">
        <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
          <ProductDetailsCarousel data={attributes.image.data} />
        </div>
        <div className="flex-[1] py-3">
          <div className="text-[34px] font-semibold mb-2 leading-tight">
            {attributes.name}
          </div>

          <div className="text-lg font-semibold mb-5">
            {attributes.subtitle}
          </div>

          <div className="flex items-center text-black/[0.5]">
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
          </div>

          <div className="text-md font-medium text-black/[0.5]">
            Incluido de impuestos
          </div>

          <div className="text-md font-medium text-black/[0.5] mb-20">{`(También incluye todos los deberes aplicables)`}</div>

          <div className="mb-10">
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">Selecciona el tamaño</div>
              <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                Seleccionar guía
              </div>
            </div>

            <div id="sizesGrid" className="grid grid-cols-3 gap-2">
              {attributes.size.data.map((item, i) => (
                <div
                  key={i}
                  className={`border rounded-md text-center py-3 font-medium ${
                    item.enabled
                      ? "hover:border-black cursor-pointer"
                      : " cursor-not-allowed bg-black/[0.1] opacity-50"
                  } ${selectedSize === item.size ? "border-black" : ""}`}
                  onClick={() => {
                    setSelectedSize(item.size);
                    setShowError(false);
                  }}
                >
                  {item.size}
                </div>
              ))}
            </div>
            {showError && (
              <div className="text-red-600 mt-1">
                Se requiere selección de tamaño
              </div>
            )}
          </div>

          <button
            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
            onClick={() => {
              if (!selectedSize) {
                setShowError(true);
                document.getElementById("sizesGrid")?.scrollIntoView({
                  block: "center",
                  behavior: "smooth",
                });
              } else {
                dispatch(
                  addToCart({
                    ...product,
                    selectedSize,
                    oneQuantityPrice: attributes.price,
                  })
                );
                notifySuccess("Producto agregado");
              }
            }}
          >
            Agregar al carrito
          </button>

          <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
            Lista de deseos
            <IoMdHeartEmpty size={20} />
          </button>

          <div>
            <div className="text-lg font-bold mb-5">Detalles del producto</div>
          </div>
          <div className="markdown text-md mb-5">
            <ReactMarkdown>{attributes.description}</ReactMarkdown>
          </div>
        </div>
      </div>
      <RelatedProducts products={products} />
    </div>
  );
};

export default ProductDetails;
