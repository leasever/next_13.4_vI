import { Product } from "@/models";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import ProductCard from "./ProductCard";

const RelatedProducts = ({ products }: { products: Product[] }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="aspect-[16/7] mt-[50px] md:mt-[100px] mb-0 z-0">
      <div className="w-full h-auto flex flex-row justify-between">
        <div className="text-2xl font-bold mb-5">Productos relacionados</div>
        <Link href={"/catalogue/products"}>
          <p className="text-base underline  font-bold mb-5">Ver todos</p>
        </Link>
      </div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-[10px]"
        itemClass="px-[10px]"
        draggable={false}
        autoPlay
        infinite
        className="custom-carousel"
      >
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;
