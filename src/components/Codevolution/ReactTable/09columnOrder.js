import React, { useMemo } from 'react'
import { useTable, useColumnOrder } from 'react-table'
import DATA from  './mockData.json'
import {COLUMNS} from './columns'
import './styles.css'


function App() {
    const columns = useMemo(()=> COLUMNS, [])
    const data = useMemo(()=>DATA, [])
    const tableInstance = useTable({
        columns,
        data
    }, useColumnOrder)
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, setColumnOrder}= tableInstance

    const changeOrder = () =>{
        setColumnOrder(['id', 'last_name', 'first_name', 'age','mail', 'date_of_birth','phone'])
    }
    return (
        <React.Fragment>
            <button onClick={changeOrder}>
                Change Col order
            </button>
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
