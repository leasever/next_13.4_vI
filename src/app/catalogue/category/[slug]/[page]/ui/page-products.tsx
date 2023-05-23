import ProductCard from "@/components/product/ProductCard";
import PageTitle from "@/components/ui/PageTitle";
import Pagination from "@/components/ui/Pagination";
import { Meta, Product } from "@/models";
import { Category } from "@/models/category.model";

import { FC } from "react";

const maxResult = 3;

interface Props {
  data: Product[];
  meta: Meta;
  category: Category;
}

const PageProducts: FC<Props> = ({ data, meta, category }) => {
  const {
    pagination: { page, pageCount, pageSize, total },
  } = meta;
  const {
    attributes: { name, slug },
  } = category;

  return (
    <div className="md:pb-20">
      <PageTitle title={name} description="" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {data?.map((product) => (
          <ProductCard key={product?.id} attributes={product.attributes} />
        ))}
      </div>

      {meta?.pagination?.total > maxResult && (
        <Pagination
          pageIndex={page}
          pageCount={pageCount}
          slug={slug}
          total={total}
          pageSize={pageSize}
          name="category"
        />
      )}
    </div>
  );
};

export default PageProducts;
