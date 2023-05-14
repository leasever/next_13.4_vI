import { Categories } from "@/models/category.model";
import { fetchDataFromApi } from "@/utils/api";

export const getCategories = async (): Promise<Categories> => {
  const data = await fetchDataFromApi(`/api/categories?populate=*`);
  return data;
};
