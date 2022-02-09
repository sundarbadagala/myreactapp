import React from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import './Styles.css'
import {CurrencyFormat} from './CurrencyFormat'

function CartTotal({value}) {
    const {clearCart, cartSubTotal, cartTax, cartTotal}= value
    
    return (
        <Container>
            <Row>
                <Col className='text-right'>
                    <Button className='px-5 mr-5 scaling-small bg-orange' onClick={()=>clearCart()}>Clear Cart</Button>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col className='font-weight-bold text-left p-3 ml-5 spacing'>
                    <span>Items Price: {CurrencyFormat(cartSubTotal)} </span><br/>
                    <span>Tax Price: {CurrencyFormat(cartTax)} </span><hr/>
                    <span>Cart Total: {CurrencyFormat(cartTotal)} </span><hr/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button block variant='info'>Check Out</Button><hr/>
                </Col>
            </Row>
        </Container>
    )
}

export default CartTotal
