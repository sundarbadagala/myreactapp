import React, { useMemo } from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'
import DATA from  './mockData.json'
import {COLUMNS} from './columns'
import './styles.css'
import {GlobalFilter} from './06globalFilter'
import { ColumnFilter } from './06columnFilter'

function App() {
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=>DATA, [])

    const defaultColumn = useMemo(()=>{
        return{
            Filter : ColumnFilter
        }
    },[])

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter} = useTable({
        columns,
        data,
        defaultColumn
    }, useFilters, useGlobalFilter )
    

    const {globalFilter}= state
    return (
        <React.Fragment>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}> 
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <div>
                                        {column.canFilter ? column.render('Filter') : null}
                                    </div>
                                </th>
                            ))
                        }
                    </tr> 
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map((row)=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps}>
                                {
                                    row.cells.map(cell =>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> 
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </React.Fragment>
    )
}

export default App
