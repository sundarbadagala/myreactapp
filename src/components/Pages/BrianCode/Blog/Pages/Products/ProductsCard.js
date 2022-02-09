import React from 'react'
import './productCard.css'

function ProductsCard(props) {
    return (
        <div className='product-main'>
            <img src={props.image} alt=''/>
            <div className='product-details'>
                <div className='product-title'>
                    <div>{props.title}</div>
                    <div>Price: {props.price.toLocaleString('en-US',{style:'currency', currency:'INR'})}</div>
                </div>
                <div className='product-description'>{props.description}</div>
            </div>
        </div>
    )
}

export default ProductsCard
