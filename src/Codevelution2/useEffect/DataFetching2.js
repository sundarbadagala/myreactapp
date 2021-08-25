import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching2() {
    const [post, setPost]= useState({})
    const [id, setId]= useState('')
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(Response => setPost(Response.data))
        .catch(error => error)
    }, [id])
    return (
        <div>
            <input type='number' value={id} onChange={(e)=>setId(e.target.value)} placeholder='Enter any number'/><br/>
            <h2>TITLE: <label style={{color:'red'}}>{post.title}</label></h2>
            <h2>BODY: <label style={{color:'red'}}>{post.body}</label></h2>
        </div>
    )
}

export default DataFetching2
