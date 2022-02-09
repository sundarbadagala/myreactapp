import React, { useEffect, useState } from 'react'

function Storage2() {
    const [value, setValue]= useState('')
    const [values, setValues]= useState([])
    const clickHandler=()=>{
        setValues([...values, value])
    }
    useEffect(()=>{
        localStorage.setItem('value', JSON.stringify(values))
    })
    return (
        <div>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default Storage2
