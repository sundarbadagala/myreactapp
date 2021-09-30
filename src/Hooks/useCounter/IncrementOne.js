import React, {useState} from 'react'
import useCounter from './useCounter'

function IncrementOne() {
    const initialValue= 0
    const initialIncrement =100
    const initialDecrement = 100
    const [count, setCount]= useState(initialValue)
    const [increment, decrement, reset]= useCounter(count, setCount, initialValue, initialIncrement, initialDecrement)
    return (
        <div>
            initialValue= 0<br/>
            initialIncrement =100<br/>
            initialDecrement = 100<br/>
            <label style={{color:'red'}}>{count}</label><br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default IncrementOne
