import Link from "next/link";
import { FC } from "react";

interface Props {
  pageIndex: number;
  pageCount: number;
  pageSize: number;
  slug: string;
  total: number;
  name: string;
}

const Pagination: FC<Props> = ({
  pageIndex,
  pageCount,
  pageSize,
  slug,
  name,
}) => {
  return (
    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
      <Link href={`/catalogue/${name}/${slug}/${pageIndex - 1}`}>
        <button
          className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
          disabled={pageIndex === 1}
        >
          Anterior
        </button>
      </Link>

      <span className="font-bold">{`${pageIndex} of ${pageCount}`}</span>

      <Link href={`/catalogue/${name}/${slug}/${pageIndex + 1}`}>
        <button
          className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
          disabled={pageIndex === pageCount}
        >
          Siguiente
        </button>
      </Link>
    </div>
  );
};

export default Pagination;
