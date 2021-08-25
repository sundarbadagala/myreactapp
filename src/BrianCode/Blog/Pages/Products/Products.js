import React from 'react'
import './Products.css'
import './ProductsCard'
import ProductsCard from './ProductsCard'
import {menuItems} from './menuItems'

function Home() {
    return (
        <div className='products-main'>
            {
                menuItems.map(item => <ProductsCard img={item.image} title={item.title} price={item.price} image={item.banner}/>)
            }
        </div>
    )
}

export default Home
