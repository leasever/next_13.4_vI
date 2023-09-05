import { Products } from "@/models";
import { fetchDataFromApi } from "@/utils/api";

export const getProducts = (): Promise<Products> =>
  fetchDataFromApi(`/api/products?populate=*`);

export const getRelatedProducts = (
  slug: string,
  categoryId: number
): Promise<Products> =>
  fetchDataFromApi(
    `/api/products?populate=*&filters[categories][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}`
  );

export const getProduct = (slug: string): Promise<Products> =>
  fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`);

export const getProductsPerCategory = (
  slug: string,
  page: string,
  maxResult: string
): Promise<Products> =>
  fetchDataFromApi(
    `/api/products?populate=*&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${maxResult}`
  );

export const getProductsBot = (): Promise<Products> =>
  fetchDataFromApi(`/api/products`);
