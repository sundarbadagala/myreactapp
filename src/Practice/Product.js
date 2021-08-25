import React from 'react'
import ProductData from './ProductList';
import ProductCard from './ProductCard';

function Product(){
    const productComponent=ProductData.map(item => 
        <ProductCard product={item}/>
        )
    return(
        <div>
            {productComponent}
        </div>
    );
}
export default Product;