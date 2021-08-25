import React, {useEffect, useState} from 'react'

function IncrementThree() {
    const initialValue = 0
    const [count, setCount]= useState(initialValue)
    const increment = () =>{
        setCount(count + 1)
    }
    useEffect(()=>{
        document.title= `Count ${count}`
    }, [count])
    return (
        <div>
            <button onClick={increment}>Third Count {count}</button>        
        </div>
    )
}

export default IncrementThree