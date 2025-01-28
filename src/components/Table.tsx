import React from 'react';

interface Column {
     name: string;
     displayName: string;
   }

interface TableProps {
  withAddNew: boolean,
  columns: Column[],
}

const Table: React.FC<TableProps> = ({ withAddNew, columns }) => {
  return (
     <>
          {withAddNew && <div>addnew button</div>}
          <table>
               <thead>
                    <tr>
                         {columns.map((column) => (
                              <th key={column.name}>{column.displayName}</th>
                         ))}
                    </tr>
               </thead>
               <tbody>
                    <tr>
                         <td>
                              aaa
                         </td>
                    </tr>
               </tbody>
          </table>
     </>
  );
};

export default Table;
