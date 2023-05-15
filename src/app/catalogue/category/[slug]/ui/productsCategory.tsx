"use client";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/models";
import { Category } from "@/models/category.model";
import { FC, useEffect, useState } from "react";
import { getProdutsPerCategory } from "../../../services";
const maxResult = 3;

interface Props {
  dataProducts: Products;
  category: Category;
}

const ProductsCategory: FC<Props> = ({ dataProducts, category }) => {
  const { name: categoryName, slug } = category.attributes;
  const [dataProduct, setProducts] = useState<Products>(dataProducts);
  const [pageIndex, setPageIndex] = useState(1);
  const { data, meta } = dataProduct;

  useEffect(() => {
    fetchCategories();
  }, [pageIndex]);

  const fetchCategories = async () => {
    const data = await getProdutsPerCategory(slug, pageIndex, 3);
    setProducts(data);
  };

  return (
    <div className="md:py-20">
      <div className="text-center max-w-[800px] mx-auto  md:mt-0 ">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          {categoryName}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {data?.map((product) => (
          <ProductCard key={product?.id} attributes={product.attributes} />
        ))}
      </div>

      {meta?.pagination?.total > maxResult && (
        <div className="flex gap-3 items-center justify-center my-16 md:my-0">
          <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            Previous
          </button>

          <span className="font-bold">{`${pageIndex} of ${
            dataProducts && meta.pagination.pageCount
          }`}</span>

          <button
            className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
            disabled={pageIndex === (dataProducts && meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsCategory;
