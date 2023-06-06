import { Product } from "@/models";
import { CLIENT_URL } from "@/utils/urls";
import { getCategories, getProducts } from "./catalogue/services";
import { Category } from "@/models/category.model";

export default async function sitemap() {
  const { data: productData } = await getProducts();
  const { data: categoryData } = await getCategories();

  const products = productData.map((product: Product) => ({
    url: `${CLIENT_URL}/catalogue/product/${product.attributes.slug}`,
    lastModified: new Date(),
    changefreq: "weekly",
    priority: 0.8,
  }));

  const categories = categoryData.map((category: Category) => ({
    url: `${CLIENT_URL}/catalogue/category/${category.attributes.slug}/1`,
    lastModified: new Date(),
    changefreq: "weekly",
    priority: 0.8,
  }));

  const routes = [
    "/",
    "/home",
    "/catalogue/products",
    "/catalogue/categories",
    "/contact",
    "/about",
    "/quotation",
    "/cart",
  ].map((route) => ({
    url: `${CLIENT_URL}${route}`,
    lastModified: new Date(),
  }));

  return [...routes, ...products, ...categories];
}
