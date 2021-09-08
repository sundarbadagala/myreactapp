import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Component() {
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    },[])
    return (
        <h1>
            {
                data.map(item => item.id)
            }
        </h1>
    )
}

export default Component
