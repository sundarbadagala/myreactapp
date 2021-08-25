import React from 'react'
import useCounter from './useInput'

function Main() {
    const initialValue=0;
    const [count]= useCounter(initialValue)
    return (
        <div>
            {count}
        </div>
    )
}

export default Main
