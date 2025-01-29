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

const Table = <T extends Record<string, string | number | ReactNode>>({ withAddNew, columns, data }: TableProps<T>) => {
  return (
    <>
      <div className="px-3 pb-1">
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
              <td colSpan={columns.length} className="text-center py-3">
                No data available for this selection.
              </td>
            </tr>
          )}
          </tbody>
        </table>
        {/* In case we wanted to actually use this app with real data, pagination would be implemented here. */}
      </div>
    </>
  );
};

export default Table;
