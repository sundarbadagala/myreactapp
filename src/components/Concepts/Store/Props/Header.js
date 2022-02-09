import React from 'react'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'

function Header(props) {
    const {cartItems}= props
    return (
        <Container fluid>
            <Row className='bg-primary p-2'>
                <Col md={11}>
                    <h3 className='font-italic font-weight-bold'>Mobile Store</h3>
                </Col>
                <Col md={1} className='d-flex align-items-center justify-content-center'>
                    <Button variant='warning'><i className='fas fa-cart-plus mr-2'/><Badge variant='secondary'>{cartItems.length}</Badge></Button>   
                </Col>
            </Row>
        </Container>
    )
}

export default Header
