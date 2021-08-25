import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Practice() {
    const [post, setPost]= useState({})
    const [id, setId]= useState('')
    const [idButton, setIdButton]= useState('')
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
        .then(res => setPost(res.data))
        .catch(err=> err)
    },[idButton])
    return (
        <div>
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)} placeholder='Enter any number'/>
            <button onClick={()=>setIdButton(id)}>Show Result</button>
            <h2>TITLE: <label style={{color:'red'}}>{post.title}</label></h2>
            <h2>BODY: <label style={{color:'red'}}>{post.body}</label></h2>
        </div>
    )
}

export default Practice
