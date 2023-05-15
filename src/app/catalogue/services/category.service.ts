import { Products } from "@/models";
import { Categories, Category } from "@/models/category.model";
import { fetchDataFromApi } from "@/utils/api";

export const getCategories = async (): Promise<Categories> => {
  const data = await fetchDataFromApi(`/api/categories?populate=*`);
  return data;
};

export const getCategory = async (slug: string): Promise<Category> => {
  const { data: category } = await fetchDataFromApi(
    `/api/categories?filters[slug][$eq]=${slug}`
  );
  return category[0];
};

export const getProdutsPerCategory = async (
  slug: string,
  page: number,
  maxResult: number
): Promise<Products> => {
  const data = await fetchDataFromApi(
    `/api/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=${maxResult}`
  );
  return data;
};
