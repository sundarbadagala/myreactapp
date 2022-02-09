import React, { useMemo } from 'react'
import { useTable, useRowSelect } from 'react-table'
import DATA from  './mockData.json'
import {COLUMNS} from './columns'
import './styles.css'
import { Checkbox } from './08checkBox'

function App() {
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=>DATA, [])
    const tableInstance = useTable({
        columns,
        data
    }, useRowSelect, (hooks)=>{
        hooks.visibleColumns.push((columns)=>{
            return[
                {
                    id: 'selection',
                    Header:({getToggleAllRowsSelectedProps})=>(
                        <Checkbox {...getToggleAllRowsSelectedProps()}/>
                    ),
                    Cell: ({row}) => (
                        <Checkbox {...row.getToggleRowSelectedProps()}/>
                    )
                },
                ...columns
                  
            ]
        })
    })
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows}= tableInstance

    const firstPageRows = rows.slice(0,20)
    return (
        <React.Fragment>
        <table {...getTableProps()}> 
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                        }
                    </tr> 
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    firstPageRows.map((row)=>{
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
        <pre>
                <code>
                    {
                        JSON.stringify(
                            {
                                selectedFlatRows: selectedFlatRows.map(row => row.original)
                            },
                            null,
                            2
                        )
                    }
                </code>
            </pre>
        </React.Fragment>
    )
}

export default App
