import React from "react";

interface Column {
  name: string;
  displayName: string;
}

interface TableProps {
  withAddNew: boolean;
  columns: Column[];
}

const Table: React.FC<TableProps> = ({ withAddNew, columns }) => {
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
            <tr>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
            </tr>
            <tr>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
            </tr>
            <tr>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
              <td> aaa </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
