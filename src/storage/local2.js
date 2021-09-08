import React, { useState } from 'react'

function Storage() {
    const [value, setValue]= useState('')
    const addValue=()=>{
        localStorage.setItem('name' , JSON.stringify('Sudar Rao'))
    }
    const getValue=()=>{
        setValue(JSON.parse(localStorage.getItem('name')))
    }
    const removeItem=()=>{
        localStorage.removeItem('name')
    }
    console.log(value)
    return (
        <div>
            <button onClick={addValue}>Add</button>
            <button onClick={getValue}>Get</button>
            <button onClick={removeItem}>Remove</button>
        </div>
    )
}

export default Storage
