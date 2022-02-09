import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Api2() {
    const [userId, setUserId]= useState('')
    const [title, setTitle]= useState('')
    const [body, setBody]= useState('')
    const [data, setData]= useState([])
  
    const submitHangler=(e)=>{
        e.preventDefault()
        setData([...data, {userId:userId, title: title, body:body}])
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
        
    }
    return (
        <div>
        <form onSubmit={submitHangler}>
            <input type='text' name='userId' value={userId} onChange={(e)=>setUserId(e.target.value)} placeholder='userId'/><br/>
            <input type='text' name='title' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='title'/><br/>
            <input type='text' name='body' value={body} onChange={(e)=>setBody(e.target.value)} placeholder='body'/><br/>
            <button type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default Api2
