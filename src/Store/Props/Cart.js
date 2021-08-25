import React from 'react'
import { Container, Row, Col , Button} from 'react-bootstrap'

function Cart(props) {
    const {cartItems, onAdd, onRmove, onEmpty, onDelete}=props
    const itemsPrice= cartItems.reduce((a,c)=> a + c.price*c.qty, 0)
    const taxPrice= itemsPrice*0.14
    const shippingPrice= itemsPrice > 12000 ? 0 : 50
    const totalPrice= itemsPrice + taxPrice + shippingPrice 
    return (
        <Container className='border m-3'>
            <Row><Col className='text-center font-weight-bold mt-3'>Cart Items</Col></Row><hr/>
            <Row><Col className='text-center'>{cartItems.length===0 && <span className='text-danger'>Cart is Empty</span>}</Col></Row>
                {
                    cartItems.map(item => 
                        <Row key={item.id} className='d-flex'>
                            <Col md={4}>
                                {item.name}
                            </Col>
                            <Col md={4} className='d-flex justify-content-around p-1'>
                                <Button variant='outline-secondary' size='sm' disabled>{item.qty}</Button>
                                <Button variant='success' size='sm' onClick={()=>onAdd(item)}><i class="fas fa-plus"></i></Button> 
                                <Button variant='danger' size='sm' onClick={()=>onRmove(item)}><i class="fas fa-minus"></i></Button>
                                <Button variant='secondary' size='sm' onClick={()=>onDelete(item)}><i class="fas fa-trash"></i></Button>
                            </Col>
                            <Col md={4}>
                                {item.qty} x {item.price.toFixed(2)}/-
                            </Col>
                        </Row>)
                }
                {
                    cartItems.length !==0 && <Button block variant='info' onClick={onEmpty} className='m-2 p-2'>Empty the Cart</Button>
                }
                <hr/>
                {
                    cartItems.length !== 0 &&
                    <Row className='d-flex flex-column font-weight-bold' w={20}>
                    <Col className='d-flex justify-content-between'>
                        <span>Items Price: </span> 
                        <span>{itemsPrice.toFixed(2)}</span>
                    </Col>
                    <Col className='d-flex justify-content-between'>
                        <span>Tax Price: </span>
                        <span>{taxPrice.toFixed(2)}</span>
                    </Col>
                    <Col className='d-flex justify-content-between'>
                        <span>Shipping Price: </span>
                        <span>{shippingPrice.toFixed(2)}</span>
                    </Col>
                    <Col className='d-flex justify-content-between'>
                        <span>Total Price: </span>
                        <span>{totalPrice.toFixed(2)}</span>
                    </Col>
                </Row>
                }
                {
                    cartItems.length !== 0 && 
                        <Button block variant='info' className='m-1' onClick={()=>alert('Implement Check Out')}>Check Out</Button>
                }
        </Container>
    )
}

export default Cart
