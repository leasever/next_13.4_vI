import { Products } from "@/models";
import { fetchDataFromApi } from "@/utils/api";

export const getProducts = (): Promise<Products> => {
  return fetchDataFromApi(`/api/products?populate=*`);
};

export const getRelatedProducts = (
  slug: string,
  categoryId: number
): Promise<Products> => {
  return fetchDataFromApi(
    `/api/products?populate=*&filters[categories][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}`
  );
};

export const getProduct = (slug: string): Promise<Products> => {
  return fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
};
