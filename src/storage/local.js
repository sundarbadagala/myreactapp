import React, {useState } from 'react'

function Storage2() {
    console.log(JSON.parse(localStorage.getItem("value")),"don");
const data = JSON.parse(localStorage.getItem("value"))?JSON.parse(localStorage.getItem("value")):[]
    const [value, setValue]= useState(data);
    const [values, setValues]= useState([])
    const clickHandler=()=>{
        setValues([...values, value])
    }
    localStorage.setItem("value",JSON.stringify(values))
    return (
        <div>
            <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default Storage2
