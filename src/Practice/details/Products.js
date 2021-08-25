import React from 'react'
import {storeProducts} from './productsData'
import {Link} from 'react-router-dom'

function Products() {
    return (
        <div>
            {
                storeProducts.map(item => <Link to={'/details/'+ item.id} key={item.id}><div>{item.title}</div></Link>)
            }
        </div>
    )
}

export default Products
