import RootHomePage from "@/components/home/RootPageHome";
import { Metadata } from "next";
import { getCategories, getProducts } from "./catalogue/services";

export const metadata: Metadata = {
  title: "Consorcio A&C - Eléctrica S.A.C",
  description:
    "Importación y venta de materiales eléctricos para tranformadores",
};

const dataImages = [
  {
    id: 1,
    url: "banner_1.webp",
  },
  {
    id: 2,
    url: "banner_2.webp",
  },
  {
    id: 3,
    url: "banner_3.webp",
  },
];

export default async function RootPage() {
  const [{ data: categories, meta }, { data: products }] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);
  return (
    <>
      <RootHomePage
        categories={categories}
        dataImages={dataImages}
        itemsPerPage={2}
        meta={meta}
        products={products}
      />
    </>
  );
}
