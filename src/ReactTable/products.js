import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useTable, useSortBy, usePagination } from "react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { Box, Button, Input, Select, MenuItem} from "@mui/material";
import {format} from 'date-fns'

const COLUMNS = [
  {
    Header: "ID",
    accessor: "flight_number",
  },
  {
    Header: "Missin Name",
    accessor: "mission_name",
  },
  {
    Header: "Launch Date",
    accessor: "launch_date_local",
    cell: ({value})=>{return format(new Date(value), 'dd/MM/yyyy')}
  },
  {
    Header: "Rocket Name",
    accessor: "rocket.rocket_name",
  },
  {
    Header: "Rocket Type",
    accessor: "rocket.rocket_type",
  },
];

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((res) => setProducts(res.data))
      .catch((error) => console.log(error));
  }, []);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => products, [products]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        {...getTableProps}
      >
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()} sx={{width:'20%'}}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Box sx={{textAlign:'right', py:3, px:10}}>
        <Box component='span'>
            Rows Per Page : {' '}
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={pageSize}
          onChange={(e)=>setPageSize(Number(e.target.value))}
          label="Rows"
          variant='standard'
          sx={{width:'50px'}}
        >
          {
                    [5,10,15,20].map((pageSize) => (
                        <MenuItem key={pageSize} value={pageSize}>
                            {pageSize}
                        </MenuItem>
                    ))
                }
        </Select>
        </Box>
        <Box component='span'  sx={{mx:3}}>
          Go To Page {' '}
          <Input 
                type='number' 
                label="Go To Page" 
                variant="outlined" 
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                  sx={{ width: "35px", height:30, textAlign:'center' }}
                  InputLabelProps={{
                    shrink: true,
                  }}

            />
        </Box>
        <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <FirstPageIcon/>
        </Button>
        <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
        <NavigateBeforeIcon/>
        </Button>
        <Button onClick={() => nextPage()} disabled={!canNextPage}>
          <NavigateNextIcon/>
        </Button>
        <Button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <LastPageIcon/>
        </Button>
        <Box component='span'>
          {pageIndex + 1} of {pageOptions.length} {' '}
        </Box>
      </Box>
      
    </TableContainer>
  );
}

export default Products;
