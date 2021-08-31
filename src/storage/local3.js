import React, { useEffect, useState } from 'react'
import {reactLocalStorage} from 'reactjs-localstorage'

function Local() {
    const [name, setName]= useState('')
    const [list, setList]= useState([])
    const submitHandler=(e)=>{
        e.preventDefault()
        setList([...list, name])
    }
    useEffect(()=>{
        reactLocalStorage.set('name', JSON.stringify(list) )
    },[list])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Local
