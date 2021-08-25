import React from 'react'
import {ProductConsumer} from './Context'
import CartList from './CartList'
import {Container, Jumbotron} from 'react-bootstrap'

function Cart() {
    return (
        <Container className='mt-4'>
            <ProductConsumer>
            {
                value =>{
                    const {cart} = value;
                    if(cart.length >0){
                        return <CartList/>
                    }else{
                        return  <Jumbotron className='m-5 p-3 text-center text-danger font-weight-bold text-capitalize'>
                                    cart is empty
                                </Jumbotron>
                    }
                }
            }
            </ProductConsumer>
        </Container>
    )
}

export default Cart
