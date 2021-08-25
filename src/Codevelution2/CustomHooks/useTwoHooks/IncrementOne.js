import React, {useState} from 'react'
import useDocumentTitle from './useDocumentTitle'
import useCounter from './useCounter'

function IncrementOne() {
    const initialValue = 100
    const incrementValue= 5
    const [count, setCount]= useState(initialValue)
    useDocumentTitle(count)
    const [increment] = useCounter(count, setCount, incrementValue)
    return (
        <div>
            <button onClick={increment}>First Count {count}</button>
        </div>
    )
}

export default IncrementOne
