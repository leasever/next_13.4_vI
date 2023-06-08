import { Categories } from "@/models";
import { fetchDataFromApi } from "@/utils/api";
import { notFound } from "next/navigation";

const validateData = (data: Categories) => {
  if (!data || data.data.length === 0) {
    return notFound();
  }
  return data;
};

export const getCategories = (): Promise<Categories> =>
  fetchDataFromApi(`/api/categories?populate=*`).then(validateData);

export const getCategory = (slug: string): Promise<Categories> =>
  fetchDataFromApi(`/api/categories?filters[slug][$eq]=${slug}`).then(
    validateData
  );
