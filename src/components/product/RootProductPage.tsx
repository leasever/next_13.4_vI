import { Product } from "@/models";
import ProductDetailsCarousel from "./Carousel";
import ProductDetails from "@/components/product/ProductDetails";
import RelatedProducts from "./RelatedProducts";

interface PropsRootProduct {
  product: Product[];
  products: Product[];
}

export default function RootProductPage({
  product,
  products,
}: PropsRootProduct) {
  return (
    <>
      <div className="flex flex-col justify-around lg:flex-row">
        <ProductDetailsCarousel data={product[0]?.attributes.image.data} />
        <div className=" lg:max-w-[520px] px-2 md:p-5">
          <ProductDetails product={product[0]} />
        </div>
      </div>
      {products.length > 0 && <RelatedProducts products={products} />}
    </>
  );
}
