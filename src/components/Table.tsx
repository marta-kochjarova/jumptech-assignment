import React, { ReactNode } from "react";

interface Column {
  name: string;
  displayName: string;
}

interface TableProps<T extends Record<string, string | number | ReactNode>> {
  withAddNew: boolean;
  columns: Column[];
  data: T[] | null;
}

const Table = <T extends Record<string, string | number | ReactNode>>({
  withAddNew,
  columns,
  data,
}: TableProps<T>) => {
  return (
    <>
      <div className="px-3 py-1">
        {withAddNew && <button className="add-new-btn mb-05">add new</button>}
        <table className="">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.name}>{column.displayName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {data ? (
            data.map((row) => (
              <tr>
                {columns.map((column) => (
                  <td>
                    {row[column.name]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} className="text-center">
                No data found
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
