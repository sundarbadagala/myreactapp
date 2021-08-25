import React from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Image, Button, Alert} from 'react-bootstrap'
import './Styles.css'
import {CurrencyFormat} from './CurrencyFormat'

function Details() {
    return (
        <Container className='font-weight-bold py-2 mt-4'>
        <Alert className='p-2' variant='primary'>
            <ProductConsumer>
            {
                value=>{
                    const {id, img, company, title, price,info, inCart}= value.details
                    return <Row>
                            <Col sm={4}>
                                <Image src={img} alt='' thumbnail width={400}/><br/>
                            </Col>
                            <Col sm={8}>
                                <span>Name : {company} {title} </span><br/>
                                <span>Price : {CurrencyFormat(price)} </span><hr/>
                                <span className='text-muted'>{info}</span><hr/>
                                <Link to='/'>
                                    <Button className='mr-2 text-capitalize font-weight-bold'>
                                        Go to products
                                    </Button>
                                </Link>
                                <Button disabled={inCart ? true : false} onClick={()=>value.addToCart(id)} className='text-capitalize font-weight-bold'>
                                    {inCart ? <span>In Cart</span> : <span>Add to Cart</span>}
                                </Button>
                            </Col>
                    </Row>
                }
            }
            </ProductConsumer>
        </Alert>
        </Container>
    )
}

export default Details
