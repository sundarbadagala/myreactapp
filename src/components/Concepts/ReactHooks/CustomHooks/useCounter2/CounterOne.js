import React from 'react'
import useCounter from './useCounter'

function CounterOne() {
    const [count, increment, decrement, reset] = useCounter(0, 1)
    return (
        <div>
            {count}<br/>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
