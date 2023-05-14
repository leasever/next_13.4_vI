import { Product, Products } from "@/models";
import { fetchDataFromApi } from "@/utils/api";

export const getProducts = async (): Promise<Products> => {
  const data = await fetchDataFromApi(`/api/products?populate=*`);
  return data;
};

export const getRelatedProducts = async (
  product: Product
): Promise<Product[]> => {
  const firstCategory = product.attributes.categories.data[0].id;
  const productSlug = product.attributes.slug;
  const { data: products } = await fetchDataFromApi(
    `/api/products?populate=*&filters[categories][id][$eq]=${firstCategory}&filters[slug][$ne]=${productSlug}`
  );
  return products;
};

export const getProduct = async (slug: string): Promise<Product> => {
  const { data: product } = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  return product[0];
};
