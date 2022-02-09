import React from 'react'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { ProductConsumer } from './Context'
import './Styles.css'
import {CurrencyFormat} from './CurrencyFormat'

function Products(props) {
    const {product}= props
    return (
        <div className='m-2'>
        <ProductConsumer>
        {
            value =>(
                <Card style={{width:'180px'}} className='flow-hidden box-shadow'>
                <div onClick={()=>value.handleDetail(product.id)}>
                <Link to='/details'>
                    <Card.Img src={product.img} style={{height:'180px'}} className='scaling'/>
                </Link>
                </div>
                <Card.Header className='text-hover'>
                    {product.company}<br/>
                    {product.title}<br/>
                    {CurrencyFormat(product.price)}
                </Card.Header>
                <Card.Title className='p-1 mb-0'>
                    <Button block disabled={product.inCart ? true : false} onClick={()=>value.addToCart(product.id)}>
                        {product.inCart ? <span>In Cart</span> : <span>Add to Cart</span>}
                    </Button>
                </Card.Title>
            </Card>       
            )
        }
        </ProductConsumer> 
        </div>
    )
}

export default Products

Products.propTypes={
    product:PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
} 
