import ProductCard from "@/components/product/ProductCard";
import PageTitle from "@/components/ui/PageTitle";
import Wrapper from "@/components/Wrapper";
import { Product } from "@/models";

export default function ProductsI({ products }: { products: Product[] }) {
  return (
    <Wrapper>
      <PageTitle title="Nuestros productos" description="Descripción" />
      <div className="grid aspect-[16/7] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Wrapper>
  );
}
