import React from 'react'
import { Container } from 'react-bootstrap'
import Card from './Card'

function Main(props) {
    const {products, onAdd}= props
    return (
        <Container  fluid className='d-flex flex-wrap m-3' >
            {
                products.map(product => 
                    <Card key={product.id} product={product} onAdd={onAdd}/>    
                )
            }
        </Container>
    )
}

export default Main
