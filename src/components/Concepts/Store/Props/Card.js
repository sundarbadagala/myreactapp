import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Cards(props) {
    const {product, onAdd}= props
    return (
        <Card className='m-2' style={{width:'170px'}}>
            <Card.Img src={product.banner}/>
            <Card.Header> 
                {product.company}<br/>
                {product.name}<br/>
                {product.price}/- </Card.Header>
            <Card.Body className='p-1'>   
                <Button block onClick={()=>onAdd(product)}>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Cards
