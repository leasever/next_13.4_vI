import { Product } from "@/models";
import { CLIENT_URL } from "@/utils/urls";
import { getCategories, getProducts } from "./catalogue/services";
import { Category } from "@/models/category.model";

export default async function sitemap() {
  const { data: productData } = await getProducts();
  const { data: categoryData } = await getCategories();
  console.log(" clienturl ", CLIENT_URL);
  const products = productData.map((product: Product) => ({
    url: `${CLIENT_URL}/catalogue/product/${product.attributes.slug}`,
    lastModified: new Date(),
  }));

  const categories = categoryData.map((category: Category) => ({
    url: `${CLIENT_URL}/catalogue/category/${category.attributes.slug}`,
    lastModified: new Date(),
  }));

  const routes = [
    "/",
    "/catalogue/products",
    "/catalogue/categories",
    "/contact",
    "/about",
  ].map((route) => ({
    url: `${CLIENT_URL}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...products, ...categories];
}
