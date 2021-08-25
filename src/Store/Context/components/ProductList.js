import React from 'react'
import Product from './Product'
import {ProductConsumer} from './Context'
import './Styles.css'

function ProductList() {
    return (
        <div className='d-flex m-2 flex-wrap'>
            <ProductConsumer>
            {
                (value)=>{
                    return value.products.map(product =>
                        <Product key={product.id} product={product}/>
                    )
                }
            }
            </ProductConsumer>
        </div>
    )
}

export default ProductList
