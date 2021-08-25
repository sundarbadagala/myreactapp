import React from 'react'
import useCounter from './useCounter'

function CounterOne(initialValue, incrementValue) {
    const [count, increment, decrement, reset] = useCounter(100,5)
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
