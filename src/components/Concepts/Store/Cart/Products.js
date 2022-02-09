import React, { useEffect, useState } from 'react'

const products=[
    {
        id:1,
        name:'Book',
        price:200
    },
    {
        id:2,
        name:'Pen',
        price:100
    },
    {
        id:3,
        name:'Pencil',
        price:50
    }
]


function Products() {
    const [cart, setCart]= useState([])
    const [count, setCount]= useState(1)
    const addItem=(product)=>{
        const exist = cart.find(item => item.id === product.id)
        if(exist){
            setCart(
                cart.map(item => item.id === product.id ? {...exist, qty: exist.qty+1} : item )
            )
        }else{
            setCart(
                [...cart, {...product, qty:1}]
            )
        }
    }
    const deleteItem=(id)=>{
        setCart(
            cart.filter(item => item.id !== id)
        )
    }
    const incrementItem=(id)=>{
        setCart(
            cart.map(item => item.id === id ? {...item , qty: item.qty+ 1}: item )
        )
    }
    const decrementItem=(id)=>{
        const value = cart.find(item => item.id === id)
        //console.log(value.qty)
        if(value.qty > 1){
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty -1}: item)
            )
        }else{
            setCart(
                cart.filter(item => item.id !== id)
            )
        }
    }
    const changeHandler=(e, id)=>{
        setCount(e.target.value)
        adjustQty(count, id)
        console.log(count)
    }
    
    const adjustQty=(count, id)=>{
        setCart(
            cart.map(item => item.id === id ? {...item , qty : parseInt(count)}: item)
        )
    }
    const totalCost = cart.reduce((a,c)=> a + c.price*c.qty, 0) 
    //console.log(totalCost)
    
    //console.log(cart)
    return (
        <div>
        <div>
            {
                products.map(item => 
                    <div key={item.id}>{item.name} {item.price} 
                        <button onClick={()=>addItem(item)}>Add</button>
                    </div>
                )
            }
        </div><hr/>
        <div>
            {
                cart.map(item => 
                    <div key={item.id}>{item.name} {item.price} {item.qty}
                        <button onClick={()=>deleteItem(item.id)}>delete</button> 
                        <button onClick={()=>incrementItem(item.id)}>+</button>
                        <button onClick={()=>decrementItem(item.id)}>-</button>
                        <input type='number' name='qty' id='qty' min='1' value={count} onChange={e=>changeHandler(e, item.id)}/>
                    </div>
                )
            }
        </div><hr/>
        Total Cost {totalCost}
        </div>
    )
}

export default Products


// const exist = cart.find(x => x.id === item.id)
//         if(exist){
//             setCart(
//                 cart.map(x=> x.id === item.id ? {...exist, qty: exist.qty + 1}: x)
//             )
//         }else{
//             setCart(
//                 [...cart, {...item, qty:1}]
//             )
//         }