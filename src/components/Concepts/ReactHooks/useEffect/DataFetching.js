import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setPosts(response.data))
        .catch(error => console.log(error))
    },[ ])
    
    return (
        <div>
            <ul>
                {
                    posts.map((item,index) => <li key={index}>Title: {item.title} <br/> Body: {item.body}</li>)
                }
            </ul>
        </div>
    )
}

export default DataFetching
