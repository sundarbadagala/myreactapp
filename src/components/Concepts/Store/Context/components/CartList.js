import React from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import {ProductConsumer} from './Context'

function CartList({value}) {
    return (
        <div>
        <ProductConsumer>
        {
            (value)=>{
                const {cart}= value
                return (
                    <React.Fragment>
                    {
                        cart.map(item => <CartItem key={item.id} item={item} value={value}/>)
                    }
                    <hr/>
                    <CartTotal value={value}/>
                    </React.Fragment>
                )
            }
        }
        </ProductConsumer>
        </div>
    )
}

export default CartList
