import React, { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import DATA from "./mockData.json";
import { COLUMNS } from "./columns";
import "./styles.css";

function App() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
  } = tableInstance;

  const { pageIndex, pageSize } = state;
  return (
    <React.Fragment>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          {pageIndex + 1} of {pageOptions.length}
        </span>
        <span>
            | Go to page : {' '}
            <input 
                type='number' 
                defaultValue={pageIndex + 1} 
                onChange={e =>{
                    const pageNumber = e.target.value ? Number(e.target.value)-1 : 0
                    gotoPage(pageNumber)
                }}
                style={{width:'50px'}}
            />
        </span>
        <select value={pageSize} onChange={(e)=> setPageSize(Number(e.target.value))}>
            {
                [5,10,15,20].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                        {pageSize}
                    </option>
                ))
            }
        </select>
        <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          next
        </button>
        <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage}>
            {'>>'}
        </button>
      </div>
    </React.Fragment>
  );
}

export default App;
