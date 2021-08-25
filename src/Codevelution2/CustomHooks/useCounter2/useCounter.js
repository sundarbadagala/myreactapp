import {useState} from 'react'

function CounterOne(initialValue, incrementValue) {
    const [count, setCount] = useState(initialValue)

    const increment=()=>{
        setCount(count + incrementValue)
    }

    const decrement=()=>{
        setCount(count - incrementValue)
    }

    const reset=()=>{
        setCount(0)
    }
    return [count, increment, decrement, reset]
}

export default CounterOne
