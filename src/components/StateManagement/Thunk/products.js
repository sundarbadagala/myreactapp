import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchProducts} from './redux/actions'

function Products() {
    const {products, loading, errorMessage} = useSelector(state => state.products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    console.log('prodcuts',products)
    return (
        <div>
            {
                products.map(item => <div>{item.title}</div>)
            }
        </div>
    )
}

export default Products
