import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'
import useCounter from './useCounter'

function IncrementTwo() {
    const initialValue =10
    const incrementValue = 1
    const [count, setCount]= useState(initialValue)
    useDocumentTitle(count)
    const [increment] = useCounter(count, setCount, incrementValue)
    return (
        <div>
            <button onClick={increment}>Second Count {count}</button>
        </div>
    )
}

export default IncrementTwo
