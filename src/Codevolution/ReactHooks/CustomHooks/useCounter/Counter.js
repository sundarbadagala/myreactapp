import React, {useState} from 'react'
import useCounter from './useCounter'

function Counter() {
    const [count, setCount] = useState(0)
    useCounter(count, setCount)
    return (
        <div>
            <h1>{count}</h1>
        </div>
    )
}

export default Counter
