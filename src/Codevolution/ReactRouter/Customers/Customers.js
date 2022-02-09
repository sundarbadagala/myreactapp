import React from 'react'
import { useSearchParams} from 'react-router-dom'

function Customers() {
    const [searchParams, setSearchParams]= useSearchParams()
    const showActiveCustomers = searchParams.get('filter') === 'active'
    return (
        <div>
            <button onClick={()=>setSearchParams({})}>Reset Customers</button>
            <button onClick={()=>setSearchParams({filter:'active'})}>Active Customers</button>
            {
                showActiveCustomers ? <h5>Active Customers</h5> : <h5>All Customers</h5>
            }
        </div>
    )
}

export default Customers
