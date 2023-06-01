import { Metadata } from "next";
import { getCategories } from "../catalogue/services";
import PageHome from "./ui/interface";

export const metadata: Metadata = {
  title: "Consorcio A & C - Eléctrica S.A.C",
  description: "Home page de nuestra empresa",
};

export default async function HomePage() {
  const { data: categories } = await getCategories();
  return (
    <>
      <PageHome categories={categories} />
    </>
  );
}
