import React, { useContext } from 'react'
import {CountContext} from './Main'

function ComponentD() {
    const counter = useContext(CountContext)
    return (
        <div>
        Component D
        <button onClick={()=>counter.countDispatch('increment')}>Increment</button>
        <button onClick={()=>counter.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>counter.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD
