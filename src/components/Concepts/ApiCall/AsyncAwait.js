import React, { useEffect, useState } from 'react'

function App() {
    const [data, setData]= useState([])
    useEffect(()=>{
        async function getData(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = res.json()
            return data
        }
        getData().then(data=> setData(data))
    },[])
    return (
        <div>
            {
                data.map(item => item.name)
            }
        </div>
    )
}

export default App
