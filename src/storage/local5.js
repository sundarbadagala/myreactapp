import React, { useEffect, useState } from 'react'

function Local() {
    const [name, setName]= useState('')
    const [list, setList]= useState([])
    const changeHandler=(e)=>{
        setName(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        setList([...list, name])
    }
    console.log(list)
    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(list))
    },[list])
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={name} onChange={changeHandler}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default Local
