import { ANIMATION } from "@/constants/theme";
import React from "react";

type Props<T> = {
  columns: string[];
  data: T[];
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  renderRow: (item: T, index: number) => React.ReactNode;
};

const TablePagination = <T,>({
  columns,
  data,
  page,
  pageSize,
  total,
  onPageChange,
  onPageSizeChange,
  renderRow,
}: Props<T>) => {
  const totalPages = Math.ceil(total / pageSize);
  const start = page * pageSize + 1;
  const end = Math.min((page + 1) * pageSize, total);

return (
    <div>
      <div className="w-full overflow-x-auto rounded-lg border">
        <table className="min-w-full text-sm text-left rounded-lg">
          <thead className={`${ANIMATION} bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-white`}>
            <tr className="border-b">
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-3 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-white divide-y">
            {data.map((item, idx) => (
              <tr key={idx}>{renderRow(item, idx)}</tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 gap-2">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Showing {start} - {end} of {total}
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm">
            Rows per page:
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="ml-2 p-1 border rounded"
            >
              {[5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>

          <button
            disabled={page === 0}
            onClick={() => onPageChange(page - 1)}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            disabled={page + 1 >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className="px-2 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
