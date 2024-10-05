import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";
import { Dispatch, SetStateAction } from "react";
import { paginationLimit } from "../constants";

interface PaginationInterface {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  recordsPerPage: number;
}

export const Pagination: React.FC<PaginationInterface> = ({
  page,
  setPage,
  recordsPerPage,
}) => {
  return (
    <div className="flex gap-2 justify-center items-center">
      <ChevronDoubleLeftIcon
        className={`w-6 text-blue-300 ${
          page > 1 ? "cursor-pointer" : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => {
          if (page > 1) setPage((prev) => prev - 1);
        }}
      />
      <div className="p-2 w-7 h-7 flex items-center justify-center rounded-full bg-blue-300 text-white">
        {page}
      </div>
      <ChevronDoubleRightIcon
        className={`w-6 text-blue-300 ${
          recordsPerPage == paginationLimit
            ? "cursor-pointer"
            : "opacity-50 cursor-not-allowed"
        }`}
        onClick={() => {
          if (recordsPerPage == paginationLimit) setPage((prev) => prev + 1);
        }}
      />
    </div>
  );
};
