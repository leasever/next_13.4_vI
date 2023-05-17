import { FC } from "react";

interface Props {
  pageIndex: number;
  pageCount: number;
  isLoading: boolean;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const Pagination: FC<Props> = ({
  pageIndex,
  pageCount,
  isLoading,
  onPreviousPage,
  onNextPage,
}) => {
  return (
    <div className="flex gap-3 items-center justify-center my-16 md:my-0">
      <button
        className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
        disabled={isLoading || pageIndex === 1}
        onClick={onPreviousPage}
      >
        Previous
      </button>

      <span className="font-bold">{`${pageIndex} of ${pageCount}`}</span>

      <button
        className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
        disabled={isLoading || pageIndex === pageCount}
        onClick={onNextPage}
      >
        Next
      </button>

      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
          <img src="/logo.svg" width={150} />
          <span className="text-2xl font-medium">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
