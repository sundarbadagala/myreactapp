import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Duplication() {
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    },[])
    const value = data.map(item => item.category)
    const a = new Set(value)
    const b = Array.from(a)
    return (
        <div>
            {
                b.map((item, index )=> <div key={index}>{item}</div>)
            }
        </div>
    )
}

export default Duplication
