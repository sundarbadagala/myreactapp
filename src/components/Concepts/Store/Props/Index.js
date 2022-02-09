import React, { useState } from 'react'
import Header from './Header'
import Cart from './Cart'
import Main from './Main'
import {Data} from './Data'
import {Container ,Row, Col} from 'react-bootstrap'

function Index() {
    const {products}= Data
    const [cartItems, setCartItems]= useState([])
    const onAdd=(product)=>{
        const exist= cartItems.find(item => item.id === product.id)
        if(exist){
            setCartItems(cartItems.map(item => item.id===product.id ? {...exist, qty: exist.qty+1}: item))
        }else{
            setCartItems([...cartItems, {...product, qty:1}])
        }
    }
    const onRmove=(product)=>{
        const exist = cartItems.find(item => item.id === product.id)
        if(exist.qty === 1){
            setCartItems(cartItems.filter(item => item.id !== product.id))
        }else{
            setCartItems(cartItems.map(item => item.id===product.id ? {...exist, qty:exist.qty-1}: item))
        }
    }
    const onEmpty=()=>{
        setCartItems([])
    }
    const onDelete=(product)=>{
        setCartItems(cartItems.filter(item => item.id !== product.id))
    }
    return (
        <div>
            <Header cartItems={cartItems}/>
            <Container fluid>
            <Row className='d-flex justify-content-between'>
                <Col md={8}><Main onAdd={onAdd} products={products}/></Col>    
                <Col md={4}><Cart onAdd={onAdd} onRmove={onRmove} onEmpty={onEmpty} onDelete={onDelete} cartItems={cartItems}/></Col>
            </Row>
        </Container>
        </div>
    )
}

export default Index
