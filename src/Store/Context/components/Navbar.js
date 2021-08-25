import React from 'react'
import {Container, Row, Col, Button, Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {ProductConsumer} from './Context'

const styles={
    main:{
        fontSize:'20px'
    },
    link:{
        
        height:'100%',
        fontSize:'25px',
    },
}

function Navbar() {
    return (
        <Container fluid>
            <Row className='bg-primary text-white font-weight-bold p-2' style={styles.main}>
                <Col sm={6} md={4}  className='d-flex' style={styles}>
                    <Link to='/' style={styles.link} className='d-flex justify-content-center align-items-center font-italic text-white text-decoration-none text-uppercase' > 
                        Mobile Store
                    </Link>
                </Col>
                <ProductConsumer>
                {
                    value=>{
                        const {cart}= value;
                        return(
                            <Col sm={6} md={8} className='d-flex justify-content-end align-items-center' style={styles}>
                                <Link to='/cart'> 
                                    <Button variant='warning' className='mr-2 text-capitalize font-weight-bold'>
                                        <i className='fas fa-cart-plus mr-1'/> 
                                        my cart 
                                        {cart.length > 0 && <Badge variant='danger' pill className='ml-1'>{cart.length}</Badge>}
                                    </Button>
                                </Link>    
                            </Col>
                        )
                    }
                }
                </ProductConsumer>
            </Row>
        </Container>
    )
}

export default Navbar
