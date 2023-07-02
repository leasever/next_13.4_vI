import HeroBanner from "@/components/banner/HeroBanner";
import RelatedProducts from "@/components/product/RelatedProducts";
import Pagination from "@/components/ui/PaginationButton";
import { Category, Meta, Product } from "@/models";

interface dataImages {
  id: number;
  url: string;
}

interface HomePageProps {
  dataImages: dataImages[];
  categories: Category[];
  meta: Meta;
  itemsPerPage: number;
  products: Product[];
}

export default function RootHomePage({
  categories,
  dataImages,
  itemsPerPage,
  meta,
  products,
}: HomePageProps) {
  return (
    <>
      <HeroBanner data={dataImages} />
      <Pagination
        categories={categories}
        meta={meta}
        itemsPerPage={itemsPerPage}
      />
      <RelatedProducts products={products} />
    </>
  );
}
