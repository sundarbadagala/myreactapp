import React,{useState} from 'react'

function CountHook() {
    const initialValue = 0
    const [count, incrementCount]= useState(initialValue)
    return (
        <div>
            counting value normal method <hr/>
            <h3>Count : {count}</h3>
            <button onClick={()=>incrementCount(count + 1)}>Increment</button><br/>
            <button onClick={()=>incrementCount(count - 1 )}>Decrement</button><br/>
            <button onClick={()=>incrementCount(initialValue)}>Reset</button><br/>
        </div>
    )
}

export default CountHook
