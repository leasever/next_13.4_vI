"use client";
import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/models";
import { Categories } from "@/models/category.model";
import { FC, useEffect, useState } from "react";
import { getProdutsPerCategory } from "../../../services";

const maxResult = 3;

interface Props {
  products: Products;
  category: Categories;
}

const ProductsCategory: FC<Props> = ({ products, category }) => {
  const { name, slug } = category.data[0].attributes;
  const [dataProduct, setDataProducts] = useState<Products>(products);
  const [pageIndex, setPageIndex] = useState(1);
  const { data, meta } = dataProduct;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, [pageIndex]);

  const fetchCategories = async () => {
    setIsLoading(true);

    try {
      const newData = await getProdutsPerCategory(slug, pageIndex, maxResult);
      setDataProducts(newData);
      if (newData) setIsLoading(true);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreviousPage = () => {
    setPageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextPage = () => {
    setPageIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="md:py-20">
      <div className="text-center max-w-[800px] mx-auto  md:mt-0 ">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          {name}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {data?.map((product) => (
          <ProductCard key={product?.id} attributes={product.attributes} />
        ))}
      </div>

      {meta?.pagination?.total > maxResult && (
        <Pagination
          pageIndex={pageIndex}
          pageCount={meta.pagination.pageCount}
          onPreviousPage={handlePreviousPage}
          onNextPage={handleNextPage}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default ProductsCategory;
