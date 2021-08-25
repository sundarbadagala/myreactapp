import React from 'react'

function Card(props){
    return(
        <div>
        <h3>{props.product.name}</h3>
        <p>{props.product.price}-{props.product.description}</p>
        </div>
    );
}
export default Card;