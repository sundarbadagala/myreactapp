import React, { useContext } from 'react'
import {CountContext} from './Main'

function ComponentF() {
    const counter = useContext(CountContext)
    return (
        <div>
        Component F
        <button onClick={()=>counter.countDispatch('increment')}>Increment</button>
        <button onClick={()=>counter.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>counter.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentF
