import React, {useState} from 'react'

function CountHook3() {
    const initialValue = 0
    const [count, setCount] = useState(initialValue)
    return (
        <div>
            Counting Value by prevCount method <hr/>
            <h3>Count : {count}</h3>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button><br/>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button><br/>
            <button onClick={()=> setCount(initialValue)}>Reset</button><br/>
        </div>
    )
}

export default CountHook3
