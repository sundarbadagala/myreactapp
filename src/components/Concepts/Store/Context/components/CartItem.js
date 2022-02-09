import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import './Styles.css'
import {CurrencyFormat} from './CurrencyFormat'

function CartItem({item, value}) {
    const {id,  title,company,  price, total, count}= item
    const {increment, decrement, removeItem}= value
    return (
        <Container>
            <Row className='m-1'>
                <Col md={3}>{company} {title}</Col>
                <Col md={2}>{CurrencyFormat(price)}</Col>
                <Col md={2} className='d-flex justify-content-around'>
                    <Button variant='danger' onClick={()=>decrement(id)} className='circle'>
                        <i className='fas fa-minus'/>
                    </Button>
                    <Button variant='outline-dark' disabled>
                        {count}
                    </Button>
                    <Button variant='success' onClick={()=>increment(id)} className='circle'>
                        <i className='fas fa-plus'/>
                    </Button>
                </Col>
                <Col md={2}>
                    <Button variant='secondary' onClick={()=>removeItem(id)}>
                        <i className='fas fa-trash'/>
                    </Button>
                </Col>
                <Col md={3}>
                    {count} <i class="fas fa-times"/> {price} = {' '}
                    <Button className='p-0 font-weight-bold' variant='secondary' active>
                        {CurrencyFormat(total)}
                    </Button>
                </Col>            
            </Row>
        </Container>
    )
}

export default CartItem
