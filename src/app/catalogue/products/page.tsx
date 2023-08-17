import { getProducts } from "../../../services";
import ProductsI from "./ui/interface";

export default async function ProductsPage() {
  const { data } = await getProducts();

  return (
    <>
      <ProductsI products={data} />
    </>
  );
}
