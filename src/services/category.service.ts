import { Categories } from "@/models";
import { fetchDataFromApi } from "@/utils/api";

export const getCategories = (): Promise<Categories> =>
  fetchDataFromApi(`/api/categories?populate=*`);

export const getCategory = (slug: string): Promise<Categories> =>
  fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`);

export const getCategoriesBot = (): Promise<Categories> =>
  fetchDataFromApi(`/api/categories`);
