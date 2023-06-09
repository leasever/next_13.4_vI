"use client";
import Wrapper from "@/components/Wrapper";
import CategoryCard from "@/components/category/CategoryCard";
import PageTitle from "@/components/ui/PageTitle";
import { Category, Meta } from "@/models";
import { useState } from "react";

interface PaginationProps {
  categories: Category[];
  meta: Meta;
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  categories,
  meta,
  itemsPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Wrapper>
      <PageTitle title={"CATEGORÍAS DESTACADAS"} description={""} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 ">
        {currentItems.map((category) => (
          <CategoryCard
            key={category.id}
            category={category.attributes}
          />
        ))}
      </div>
      <div className="flex gap-3 items-center justify-center my-7 md:my-0">
        <button
          className={`rounded py-2 px-4 bg-[#1D1D1D] text-white disabled:bg-gray-200 disabled:text-gray-500`}
          disabled={currentPage === 1}
          onClick={goToPreviousPage}
        >
          Anterior
        </button>

        <span className="font-bold">{`${currentPage} de ${totalPages}`}</span>

        <button
          className={`rounded py-2 px-4 bg-[#1D1D1D] text-white disabled:bg-gray-200 disabled:text-gray-500`}
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
        >
          Siguiente
        </button>
      </div>
    </Wrapper>
  );
};

export default Pagination;
