import { Products } from "@/models";
import { Categories } from "@/models/category.model";
import { fetchDataFromApi } from "@/utils/api";

export const getCategories = (): Promise<Categories> => {
  return fetchDataFromApi(`/api/categories?populate=*`);
};

export const getCategory = (slug: string): Promise<Categories> => {
  return fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`);
};

export const getProdutsPerCategory = (
  slug: string,
  page: number,
  maxResult: number
): Promise<Products> => {
  return fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${maxResult}`
  );
};
