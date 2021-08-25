import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyCake } from './redux/actions'

function Main() {
    const numberOfCakes = useSelector(state => state.numberOfCakes)
    const dispatch = useDispatch()
    const [count, setCount]= useState(1)
    return (
        <div>
            The number of Cakes : {numberOfCakes}<br/>
            <input type='text' value={count} onChange={e=>setCount(e.target.value)}/>
            <button onClick={()=>dispatch(buyCake(count))}>Buy a cake</button>
        </div>
    )
}

export default Main
