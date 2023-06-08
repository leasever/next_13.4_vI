import { Products } from "@/models";
import { fetchDataFromApi } from "@/utils/api";
import { notFound } from "next/navigation";

const validateData = (data: Products): Products => {
  if (!data || data.data.length === 0) {
    return notFound();
  }
  return data;
};

export const getProducts = (): Promise<Products> =>
  fetchDataFromApi(`/api/products?populate=*`).then(validateData);

export const getRelatedProducts = (
  slug: string,
  categoryId: number
): Promise<Products> =>
  fetchDataFromApi(
    `/api/products?populate=*&filters[categories][id][$eq]=${categoryId}&filters[slug][$ne]=${slug}`
  ).then(validateData);

export const getProduct = (slug: string): Promise<Products> =>
  fetchDataFromApi(`/api/products?populate=*&filters[slug][$eq]=${slug}`).then(
    validateData
  );

export const getProductsPerCategory = (
  slug: string,
  page: string,
  maxResult: string
): Promise<Products> =>
  fetchDataFromApi(
    `/api/products?populate=*&filters[categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${maxResult}`
  ).then(validateData);
