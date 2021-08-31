import React, { useState } from 'react'

function Local() {
    const [name, setName]= useState('')
    //const [list, setList]= useState([])    
    const clickHandler=()=>{
        localStorage.setItem('name', name)
    }
    return (
        <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={clickHandler}>Add</button>
        </div>
    )
}

export default Local
