import React, {useState} from 'react'
import useCounter from './useCounter'

function IncrementOne() {
    const initialValue= 100
    const initialIncrement =10
    const initialDecrement = 5
    const [count, setCount]= useState(initialValue)
    const [increment, decrement, reset]= useCounter(count, setCount, initialValue, initialIncrement, initialDecrement)
    return (
        <div>
            initialValue= 100<br/>
            initialIncrement =10<br/>
            initialDecrement = 5<br/>
            <label style={{color:'red'}}>{count}</label><br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default IncrementOne
