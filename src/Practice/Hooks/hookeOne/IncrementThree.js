import React, {useState} from 'react'

function IncrementOne() {
    const initialValue= 0
    const initialIncrement =1
    const initialDecrement = 1
    const [count, setCount]= useState(initialValue)
    const increment = ()=>{
        setCount(count + initialIncrement)
    }
    const decrement = ()=>{
        setCount(count - initialDecrement)
    }
    const reset = ()=>{
        setCount(initialValue)
    }
    return (
        <div>
            Component wihtout custom hooks<br/>
            <label style={{color:'red'}}>{count}</label><br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default IncrementOne
