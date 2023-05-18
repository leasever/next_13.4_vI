import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "../services";

export default async function ProductsPage() {
  const { data } = await getProducts();

  return (
    <>
      {data.map((product) => (
        <ProductCard key={product.id} attributes={product.attributes} />
      ))}
    </>
  );
}
