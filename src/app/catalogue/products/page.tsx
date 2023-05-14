import ProductCard from "@/components/ProductCard";
import { getProducts } from "../services";

export default async function ProductsPage() {
  const { data: products } = await getProducts();

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} attributes={product.attributes} />
      ))}
    </>
  );
}
